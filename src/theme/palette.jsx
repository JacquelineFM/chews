// @mui
import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

const PRIMARY = {
  light: "#3D3D3D",
  main: "#0D0D0D",
  dark: "#090909",
};

const SECONDARY = {
  light: "#6E85A3",
  main: "#4A678C",
  dark: "#334862",
};

const INFO = {
  light: "#64B5F6",
  main: "#2196F3",
  dark: "#1976D2",
};

const SUCCESS = {
  light: "#81C784",
  main: "#4CAF50",
  dark: "#388E3C",
};

const WARNING = {
  light: "##FFB74D",
  main: "#FF9800",
  dark: "#F57C00",
};

const ERROR = {
  light: "#C54949",
  main: "#B71C1C",
  dark: "#801313",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const COMMON = {
  common: { black: "#000000", white: "#FFFFFF" },
  primary: { ...PRIMARY, contrastText: "#FFFFFF" },
  secondary: { ...SECONDARY, contrastText: "#FFFFFF" },
  info: { ...INFO, contrastText: "#FFFFFF" },
  success: { ...SUCCESS, contrastText: "#000000DE" },
  warning: { ...WARNING, contrastText: "#000000DE" },
  error: { ...ERROR, contrastText: "#FFFFFF" },
  grey: GREY,
  divider: "#0000001F",
};

const palette = {
  type: "light",
  ...COMMON,
  text: { primary: "#000000DE", secondary: GREY[600], disabled: GREY[500] },
  background: { paper: "#FFFFFF", default: "#FAFAFA" },
};

export default palette;
