import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../../app/hooks";
import { Card, FormItem } from "../../components/styled";
import { selectAccountUserAddress, useGetBalanceQuery } from "./accountSlice";
import Breadcumbs from "../../components/Breadcrumbs";
import DepositForm from "./DepositForm";
import PushSecretForm from "./PushSecretForm";
import WithdrawForm from "./WithdrawForm";

export default function Account() {
  const userAddress = useAppSelector(selectAccountUserAddress);
  const balance = useGetBalanceQuery(userAddress);

  return (
    <>
      <Grid container spacing={1}>
        {/* PAGE HEADER */}
        <Grid xs={12}>
          <Breadcumbs title="Account" />
        </Grid>

        <Grid container spacing={1}>
          <Grid xs={12} md={6}>
            <Card>
              <FormItem>
                <Typography variant="body2" gutterBottom color="rgba(255,255,255,0.6)">
                  Nano RLC staked
                </Typography>
                <Typography variant="h4" gutterBottom color="rgba(255,255,255,0.8)">
                  {balance?.data?.stake || "0"}
                </Typography>
              </FormItem>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card>
              <FormItem>
                <Typography variant="body2" gutterBottom color="rgba(255,255,255,0.6)">
                  Nano RLC locked
                </Typography>
                <Typography variant="h4" gutterBottom color="rgba(255,255,255,0.8)">
                  {balance?.data?.locked || "0"}
                </Typography>
              </FormItem>
            </Card>
          </Grid>
          <Grid xs={12}>
            <DepositForm />
          </Grid>
          <Grid xs={12}>
            <WithdrawForm />
          </Grid>
          <Grid xs={12}>
            <PushSecretForm />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
