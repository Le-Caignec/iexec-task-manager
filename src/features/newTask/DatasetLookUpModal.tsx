import { TextField, TableBody, TableRow, TableCell, Button, Typography, Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { AppModal, setOpenModal } from "../application/applicationSlice";
import IETable from "../../components/IETable.tsx";
import IEModal from "../application/IEModal";
import {
  setSelectedDataset,
  useLazySearchDatasetsQuery,
  useLazyFetchDatasetOrderbookQuery,
} from "./newTaskSlice";
import { Dataset } from "../../generated/graphql";
import { useResolveRestricted } from "./useResolveRestricted";

export default function DatasetLookUpModal() {
  const [trigger, result] = useLazySearchDatasetsQuery();
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);
  const { restrictedDatasets: restricted } = useResolveRestricted();
  const restrictedDatasets = restricted ? JSON.stringify(restricted) : undefined;

  useEffect(() => {
    // console.log({ restrictedDatasets, searchText });
    trigger({ restrictedDatasets, searchText });
  }, [searchText, trigger, restrictedDatasets]);

  return (
    <>
      <IEModal kind={AppModal.LOOKUP_DATASET_MODAL}>
        <TextField
          fullWidth
          label="Search for a dataset..."
          type="search"
          variant="filled"
          onChange={handleSearchTextChange}
        />

        <IETable columnNames={[]}>
          <TableBody>
            {result?.data?.datasets &&
              result.data?.datasets.map((dataset) => (
                <TableRow hover key={dataset.id}>
                  <DatasetCollapsibleCell dataset={dataset} />
                </TableRow>
              ))}
          </TableBody>
        </IETable>
      </IEModal>
      )
    </>
  );
}

function DatasetCollapsibleCell(props: { dataset: Dataset }) {
  const dispatch = useAppDispatch();
  const [showOrders, setShowOrders] = useState(false);
  const [fetch, { isUninitialized, isSuccess, data, isLoading }] =
    useLazyFetchDatasetOrderbookQuery();

  useEffect(() => {
    if (showOrders && isUninitialized) {
      fetch(props.dataset.id);
    }
  }, [fetch, showOrders, isUninitialized, props.dataset.id]);

  const thereAreOrders = isSuccess && data && data.length > 0;
  const handleDatasetSelected = () => {
    dispatch(setSelectedDataset(props.dataset.id));
    dispatch(setOpenModal(null));
  };
  return (
    <TableCell
      key={props.dataset.id}
      onClick={() => setShowOrders(true)}
      component="th"
      scope="row"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography>{props.dataset.id}</Typography>
        <Typography>{props.dataset.name}</Typography>
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
                    <TableRow key={props.dataset.id + Math.random()}>
                      <TableCell component="th" scope="row">
                        {order.order.datasetprice}
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
            <Button fullWidth onClick={handleDatasetSelected}>
              SELECT
            </Button>
          )}
        </Box>
      )}
    </TableCell>
  );
}
