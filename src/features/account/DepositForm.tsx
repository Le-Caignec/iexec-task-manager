import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Form, Card, CardHeader, FormItem } from "../../components/styled";
import { useDepositMutation } from "./accountSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function DepositForm() {
  interface DepositFormData {
    amount: number;
  }

  const [deposit, result] = useDepositMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DepositFormData>();

  useEffect(() => {
    if (result.error) {
      toast.error(result.error.toString());
    }
  }, [result.error]);

  const validateDeposit = (v: any) => (!v ? "Write a number" : true);

  const onSubmitDeposit = async (data: DepositFormData) => {
    await deposit(data.amount.toString());
    reset();
  };

  return (
    <>
      <Card>
        <Grid container spacing={0}>
          <FormItem>
            <CardHeader
              title="Fund Account"
              description="Fund your account with some nRLC (1 nRLC = 1*10^-9 RLC) from your wallet."
            />
          </FormItem>
          <FormItem>
            <Form onSubmit={handleSubmit(onSubmitDeposit)}>
              <Grid container spacing={1}>
                <Grid xs={4}></Grid>
                <Grid xs={4}>
                  <TextField
                    {...register("amount", {
                      required: true,
                      valueAsNumber: true,
                      validate: validateDeposit,
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
                    Fund
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </FormItem>
        </Grid>
      </Card>
    </>
  );
}
