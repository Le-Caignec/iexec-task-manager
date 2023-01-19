import { Box, styled, Card as MuiCard, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";

export const Card = styled(MuiCard)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  padding: theme.spacing(3),
  backgroundColor: "rgba(32,32,32, 0.8)",
  border: 0.1,
  borderColor: "rgba(255,255,255, 0.3)",
  borderRadius: 8,
  borderStyle: "solid",
}));

export const CardItem = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255, 0.0)",
  padding: theme.spacing(0),
  margin: theme.spacing(0),
}));

export const TableCardItem = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  minHeight: "100px",
}));

export const Form = styled("form")({});

export function FormItem(props: { children?: ReactNode }) {
  return (
    <>
      <Grid xs={12} md={6}>
        <CardItem>{props.children}</CardItem>
      </Grid>
    </>
  );
}

export function CardHeader(props: { title: string; description: string }) {
  return (
    <>
      {props.title.length > 0 && (
        <Typography variant="h5" gutterBottom color="rgba(255,255,255,0.8)">
          {props.title}
        </Typography>
      )}
      <Typography variant="body2" gutterBottom color="rgba(255,255,255,0.6)">
        {props.description}
      </Typography>
    </>
  );
}
