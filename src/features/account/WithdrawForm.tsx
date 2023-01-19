import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Form, Card, CardHeader, FormItem } from "../../components/styled";
import { useWithdrawMutation } from "./accountSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function WithdrawForm() {
  interface WithdrawFormData {
    amount: number;
  }

  const [withdraw, result] = useWithdrawMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WithdrawFormData>();

  useEffect(() => {
    if (result.error) {
      toast.error(result.error.toString());
    }
  }, [result.error]);

  const validateWithdraw = (v: any) => (!v ? "Write a number" : true);

  const onSubmitWithdraw = async (data: WithdrawFormData) => {
    await withdraw(data.amount.toString());
    reset();
  };

  return (
    <>
      <Card>
        <Grid container spacing={0}>
          <FormItem>
            <CardHeader
              title="Refund Account"
              description="Withdraw some nRLC (1 nRLC = 1*10^-9 RLC) from user account to user wallet."
            />
          </FormItem>
          <FormItem>
            <Box>
              <Form onSubmit={handleSubmit(onSubmitWithdraw)}>
                <Grid container spacing={1}>
                  <Grid xs={4}></Grid>
                  <Grid xs={4}>
                    <TextField
                      {...register("amount", {
                        required: true,
                        valueAsNumber: true,
                        validate: validateWithdraw,
                      })}
                      label="Amount"
                      fullWidth
                      error={Boolean(errors.amount)}
                      helperText={errors.amount?.message ?? ""}
                      size="small"
                    />
                  </Grid>
                  <Grid xs={4}>
                    <Button fullWidth variant="contained" type="submit">
                      Refund
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Box>
          </FormItem>
        </Grid>
      </Card>
    </>
  );
}
