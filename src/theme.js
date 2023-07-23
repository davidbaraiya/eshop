import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f8fac",
    },
    secondary: {
      main: "#1f1f1f",
    },
    white: {
      main: "#fff",
    },
    black: {
      main: "#1f1f1f",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1200px !important",
          paddingLeft: "15px !important",
          paddingRight: "15px !important",
          width: "100%",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

export default theme;
