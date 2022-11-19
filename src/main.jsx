import React from "react";
import ReactDOM from "react-dom/client";
// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
// @mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import palette from "./theme/palette";
//
import typography from "./theme/typography";
import App from "./App";

// ----------------------------------------------------------------------

const theme = createTheme({ palette, typography });

// ----------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
