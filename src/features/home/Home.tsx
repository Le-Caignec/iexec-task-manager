import RequesterOrders from "./RequesterOrders";
import Tasks from "./Tasks";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TableCardItem, Card, CardHeader, FormItem } from "../../components/styled";
import { selectAccountIsConnected } from "../account/accountSlice";
import { useAppSelector } from "../../app/hooks";
import Breadcumbs from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const isConnected = useAppSelector(selectAccountIsConnected);
  const navigate = useNavigate();

  return (
    <>
      {isConnected && (
        <>
          <Grid container spacing={1}>
            {/* PAGE HEADER */}
            <Grid xs={12}>
              <Breadcumbs title="" />
            </Grid>

            {/* RUN APP */}
            <Grid container spacing={1}>
              <Grid xs={12}>
                <Card>
                  <Grid container spacing={0} alignItems="center">
                    <FormItem>
                      <CardHeader
                        title="Run Application"
                        description="Run an iExec application at market price or buy computation at limit price on the Marketplace"
                      />
                    </FormItem>
                    <FormItem>
                      <Box display="flex" justifyContent="flex-end" gap={1} alignContent="center">
                        <Button variant="contained" onClick={() => navigate("/newTask")}>
                          Request Execution
                        </Button>
                      </Box>
                    </FormItem>
                  </Grid>
                </Card>
              </Grid>

              {/* TASKS LIST */}
              <Grid xs={12}>
                <Card>
                  <TableCardItem>
                    <CardHeader title="Tasks" description="List of your current tasks" />
                    <Tasks />
                  </TableCardItem>
                </Card>
              </Grid>

              {/* ORDERS */}
              <Grid xs={12}>
                <Card>
                  <TableCardItem>
                    <CardHeader title="Order Book" description="List of your pending orders" />
                    <RequesterOrders />
                  </TableCardItem>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
