import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d6e6e",
      dark: "#084b4b",
      light: "#4f9696",
    },
    secondary: {
      main: "#c98c49",
      light: "#dfb17e",
      dark: "#8f5f2a",
    },
    background: {
      default: "#f6f4ef",
      paper: "#fffdf9",
    },
    text: {
      primary: "#1f2a2c",
      secondary: "#5e6769",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 20px 60px rgba(13, 110, 110, 0.08)",
        },
      },
    },
  },
});

export default theme;
