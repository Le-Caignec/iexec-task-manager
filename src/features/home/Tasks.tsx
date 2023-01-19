import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectAccountUserAddress } from "../account/accountSlice";
import IETable from "../../components/IETable.tsx";
import {
  useHasDownloadableResultQuery,
  useGetTasksQuery,
  useLazyFetchTaskResultQuery,
} from "./homeSlice";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import DownloadIcon from "@mui/icons-material/DownloadSharp";
export default function Tasks() {
  const userAddress = useAppSelector(selectAccountUserAddress);
  const { data } = useGetTasksQuery(userAddress);

  return (
    <>
      <IETable columnNames={["Id", "Deadline", "Status"]}>
        <TableBody sx={{}}>
          {data &&
            data.tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell component="th" scope="row">
                  {task.id}
                </TableCell>
                <TableCell style={{ width: 10 }} align="center">
                  {new Date(task.finalDeadline * 1000).toLocaleDateString()}
                </TableCell>
                <TableCell style={{ width: 10 }} align="center">
                  {task.status === "COMPLETED" && <DownloadAction taskId={task.id} />}
                  {task.status !== "COMPLETED" && task.status}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </IETable>
    </>
  );
}

function DownloadAction(props: { taskId: string }) {
  const [trigger, { data, isLoading, isError, isSuccess, error }] = useLazyFetchTaskResultQuery();
  const { data: somethingToDownload } = useHasDownloadableResultQuery(props.taskId);
  useEffect(() => {
    if (error) {
      toast.error(error.toString());
    }
  }, [error]);

  const startFileDownload = useCallback(
    (url: string) => {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", props.taskId + ".zip");
      document.body.appendChild(link);
      link.click();
    },
    [props.taskId]
  );

  useEffect(() => {
    if (isSuccess && data) {
      startFileDownload(data);
    }
  }, [data, isSuccess, startFileDownload]);

  return (
    <>
      <Button
        disabled={isLoading || isError || !somethingToDownload}
        size="small"
        onClick={() => trigger(props.taskId)}
      >
        <DownloadIcon aria-label="Download" />
      </Button>
    </>
  );
}
