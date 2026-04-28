import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { ConsentProvider } from "./context/ConsentContext";
import theme from "./theme";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConsentProvider>
        <BrowserRouter basename="/physiotherapie-praxis-nordheide.de">
          <App />
        </BrowserRouter>
      </ConsentProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
