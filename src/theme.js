import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";
const productSans = localFont({
  src: [
    {
      path: "../public/static/fonts/Product Sans/ProductSans.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/static/fonts/Product Sans/ProductSans-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
});

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#e8ecf4",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: productSans.style.fontFamily,
  },
});

export default theme;
