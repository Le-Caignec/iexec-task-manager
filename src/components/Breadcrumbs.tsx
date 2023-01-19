import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function Breadcumbs(props: { title: string }) {
  return (
    <>
      <Stack sx={{ paddingLeft: 1 }} spacing={1}>
        <MUIBreadcrumbs maxItems={2} aria-label="breadcrumb">
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </NavLink>
          <Typography color="text.primary">{props.title}</Typography>
        </MUIBreadcrumbs>
        <Typography variant="h4" color="text.primary" gutterBottom>
          {/* {props.title} */}
        </Typography>
      </Stack>
    </>
  );
}
