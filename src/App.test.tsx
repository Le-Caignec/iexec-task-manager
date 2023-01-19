import { render, screen } from "@testing-library/react";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Breadcumbs from "./components/Breadcrumbs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Breadcumbs title="BreadcumbTest" />,
  },
]);

test("renders learn react link", () => {
  render(
    <ThemeProvider theme={createTheme()}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/BreadcumbTest/i);
  expect(linkElement).toBeInTheDocument();
});
