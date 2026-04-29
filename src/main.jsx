import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { normalizeGithubPagesRedirect, routerBasename } from "./config/runtime";
import { ConsentProvider } from "./context/ConsentContext";
import theme from "./theme";
import "./styles.css";

normalizeGithubPagesRedirect();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConsentProvider>
        <BrowserRouter basename={routerBasename()}>
          <App />
        </BrowserRouter>
      </ConsentProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
