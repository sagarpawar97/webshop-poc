import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const theme = createTheme({
  typography: {
    fontFamily: ` "Open Sans", sans-serif`, // Replace with your font
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
