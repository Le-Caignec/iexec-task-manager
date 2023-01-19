import { TextField, TableBody, TableRow, TableCell, Typography, Button, Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { AppModal, setOpenModal } from "../application/applicationSlice";
import IETable from "../../components/IETable.tsx";
import IEModal from "../application/IEModal";
import {
  setSelectedWorkerpool,
  useLazySearchWorkerpoolsQuery,
  useLazyFetchWorkerpoolOrderbookQuery,
} from "./newTaskSlice";
import { Workerpool } from "../../generated/graphql";
import { useResolveRestricted } from "./useResolveRestricted";

export default function WorkerpoolLookUpModal() {
  const [trigger, result] = useLazySearchWorkerpoolsQuery();
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  const { restrictedWorkerpools: restricted } = useResolveRestricted();
  const restrictedWorkerpools = restricted.length > 0 ? JSON.stringify(restricted) : undefined;

  useEffect(() => {
    // console.log({ restrictedWorkerpools, searchText });
    trigger({ restrictedWorkerpools, searchText });
  }, [searchText, trigger, restrictedWorkerpools]);

  return (
    <>
      <IEModal kind={AppModal.LOOKUP_WORKERPOOL_MODAL}>
        <TextField
          fullWidth
          label="Search for a workerpool..."
          type="search"
          variant="filled"
          onChange={handleSearchTextChange}
        />

        <IETable columnNames={[]}>
          <TableBody>
            {result?.data?.workerpools &&
              result.data?.workerpools.map((workerpool) => (
                <TableRow hover key={workerpool.id}>
                  <WorkerpoolCollapsibleCell workerpool={workerpool} />
                </TableRow>
              ))}
          </TableBody>
        </IETable>
      </IEModal>
      )
    </>
  );
}

function WorkerpoolCollapsibleCell(props: { workerpool: Workerpool }) {
  const dispatch = useAppDispatch();
  const [showOrders, setShowOrders] = useState(false);
  const [fetch, { isUninitialized, isSuccess, data, isLoading }] =
    useLazyFetchWorkerpoolOrderbookQuery();

  useEffect(() => {
    if (showOrders && isUninitialized) {
      fetch(props.workerpool.id);
    }
  }, [fetch, showOrders, isUninitialized, props.workerpool.id]);

  const thereAreOrders = isSuccess && data && data.length > 0;
  const handleWorkerpoolSelected = () => {
    dispatch(setSelectedWorkerpool(props.workerpool.id));
    dispatch(setOpenModal(null));
  };
  return (
    <TableCell
      key={props.workerpool.id}
      onClick={() => setShowOrders(true)}
      component="th"
      scope="row"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography>{props.workerpool.id}</Typography>
        <Typography>{props.workerpool.description}</Typography>
      </Box>
      {showOrders && (
        <Box>
          <Typography color="secondary" variant="body2">
            {isSuccess && thereAreOrders && "Available orders:"}
            {isLoading && "Looking for orders..."}
            {isSuccess && !thereAreOrders && "There are no orders available."}
          </Typography>
          {thereAreOrders && (
            <IETable columnNames={["Price", "Remaining", "Status"]}>
              <TableBody sx={{}}>
                {data &&
                  data.map((order, idx) => (
                    <TableRow key={props.workerpool.id + Math.random()}>
                      <TableCell component="th" scope="row">
                        {order.order.workerpoolprice}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {order.remaining}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {order.status}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </IETable>
          )}
          {thereAreOrders && (
            <Button fullWidth onClick={handleWorkerpoolSelected}>
              SELECT
            </Button>
          )}
        </Box>
      )}
    </TableCell>
  );
}
