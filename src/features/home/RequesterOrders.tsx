import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectAccountUserAddress } from "../account/accountSlice";
import IETable from "../../components/IETable.tsx";
import { useCancelRequestorderMutation, useGetRequestOrderbookQuery } from "./homeSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function RequestOrders() {
  const acuunt = useAppSelector(selectAccountUserAddress);
  const { data } = useGetRequestOrderbookQuery(acuunt);

  return (
    <>
      <IETable columnNames={["Hash", "App", "Status", ""]}>
        <TableBody sx={{}}>
          {data &&
            data.map((order) => (
              <TableRow key={order.orderHash}>
                <TableCell component="th" scope="row">
                  {order.orderHash}
                </TableCell>
                <TableCell style={{ width: 10 }} align="center">
                  {order.order.app}
                </TableCell>
                <TableCell style={{ width: 10 }} align="center">
                  {order.status}
                </TableCell>
                <TableCell style={{ width: 10 }} align="center">
                  <CancelOrderAction hash={order.orderHash} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </IETable>
    </>
  );
}

function CancelOrderAction(props: { hash: string }) {
  const [cancel, { isLoading, isError, error }] = useCancelRequestorderMutation();

  useEffect(() => {
    if (error) {
      toast.error(error.toString());
    }
  }, [error]);

  return (
    <>
      <Button disabled={isLoading || isError} size="small" onClick={() => cancel(props.hash)}>
        Cancel
      </Button>
    </>
  );
}
