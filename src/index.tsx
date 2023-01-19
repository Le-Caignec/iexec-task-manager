import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./features/application/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewTaskForm from "./features/newTask/NewTaskForm";
import Account from "./features/account/Account";
import Home from "./features/home/Home";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/newTask",
        element: <NewTaskForm />,
      },
    ],
  },
]);

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FCD15A",
    },
    secondary: {
      main: "#C4C4C4",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
