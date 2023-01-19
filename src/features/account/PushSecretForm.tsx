import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Form, Card, CardHeader, FormItem } from "../../components/styled";
import { usePushSecretMutation } from "./accountSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function PushSecretForm() {
  interface PushSecretFormData {
    secretName: string;
    secretValue: string;
  }

  const [pushSecret, result] = usePushSecretMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PushSecretFormData>();

  useEffect(() => {
    if (result.error) {
      toast.error(result.error.toString());
    }
  }, [result.error]);

  const onSubmitPushSecret = async (data: PushSecretFormData) => {
    await pushSecret(data);
    toast.success("Push completed!");
    reset();
  };

  return (
    <>
      <Card>
        <Grid container spacing={0}>
          <FormItem>
            <CardHeader
              title="Push Requester Secret"
              description="Push a named secret to the Secret Management Service."
            />
          </FormItem>
          <FormItem>
            <Form onSubmit={handleSubmit(onSubmitPushSecret)}>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <TextField
                    {...register("secretName", { required: true })}
                    label="Secret Name"
                    fullWidth
                    required
                    type="password"
                    error={Boolean(errors.secretName)}
                    helperText={errors.secretName?.message ?? ""}
                    size="small"
                  />
                </Grid>
                <Grid xs={4}>
                  <TextField
                    {...register("secretValue", { required: true })}
                    label="Secret Value"
                    fullWidth
                    required
                    type="password"
                    error={Boolean(errors.secretValue)}
                    helperText={errors.secretValue?.message ?? ""}
                    size="small"
                  />
                </Grid>
                <Grid xs={4}>
                  <Button fullWidth variant="contained" type="submit">
                    Push
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
