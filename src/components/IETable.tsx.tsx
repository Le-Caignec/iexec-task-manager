import { Box, TableHead } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { ReactNode } from "react";

interface IETableProps {
  columnNames: string[];
  children: ReactNode;
}

export default function IETable(props: IETableProps) {
  return (
    <TableContainer component={Box} sx={{ maxHeight: 400 }}>
      <Table
        // sx={{ minWidth: 500 }}
        stickyHeader
        aria-label="table"
      >
        {props.columnNames?.length > 0 && (
          <TableHead>
            <TableRow>
              {props.columnNames.map((name, index) => (
                <TableCell
                  key={name}
                  sx={{
                    fontWeight: "bold",
                    background: "rgba(0, 0, 0, 0.11)",
                    backdropFilter: "blur(12px)",
                  }}
                  align={index === 0 ? "left" : "center"}
                >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        {props.children}

        <TableFooter>
          <TableRow>
            <></>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
