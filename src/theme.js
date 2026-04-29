import { createTheme } from "@mui/material/styles";

const appThemeConfig = {
  layout: {
    containerMaxWidth: 1400,
    contentMaxWidth: 1200,
    gutters: {
      xs: 20,
      sm: 28,
      md: 32,
    },
  },
  radius: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 36,
    pill: 999,
  },
  shell: {
    heroImageRadius: 32,
    iconChipSize: 56,
  },
  shadow: {
    card: "0 20px 60px rgba(13, 110, 110, 0.08)",
    shell: "0 28px 80px rgba(13, 110, 110, 0.1)",
    media: "0 30px 80px rgba(13, 110, 110, 0.12)",
    brand: "0 16px 32px rgba(13, 110, 110, 0.2)",
  },
  surface: {
    muted: "rgba(13, 110, 110, 0.08)",
    border: "rgba(13, 110, 110, 0.08)",
    borderStrong: "rgba(13, 110, 110, 0.12)",
    feature: "linear-gradient(135deg, rgba(223, 244, 238, 0.84), rgba(255, 255, 255, 0.9))",
    hero: "linear-gradient(160deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.76)), linear-gradient(120deg, rgba(223, 244, 238, 0.85), rgba(247, 239, 228, 0.7))",
    cta: "radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 22%), linear-gradient(135deg, #0d6e6e 0%, #114f57 100%)",
  },
};

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
    borderRadius: appThemeConfig.radius.sm,
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
  app: appThemeConfig,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--app-container-max-width": `${appThemeConfig.layout.containerMaxWidth}px`,
          "--app-content-max-width": `${appThemeConfig.layout.contentMaxWidth}px`,
          "--app-radius-xs": `${appThemeConfig.radius.xs}px`,
          "--app-radius-sm": `${appThemeConfig.radius.sm}px`,
          "--app-radius-md": `${appThemeConfig.radius.md}px`,
          "--app-radius-lg": `${appThemeConfig.radius.lg}px`,
          "--app-radius-xl": `${appThemeConfig.radius.xl}px`,
          "--app-radius-pill": `${appThemeConfig.radius.pill}px`,
          "--app-icon-chip-size": `${appThemeConfig.shell.iconChipSize}px`,
          "--app-surface-muted": appThemeConfig.surface.muted,
          "--app-surface-border": appThemeConfig.surface.border,
          "--app-surface-border-strong": appThemeConfig.surface.borderStrong,
          "--app-shadow-card": appThemeConfig.shadow.card,
          "--app-shadow-shell": appThemeConfig.shadow.shell,
          "--app-shadow-media": appThemeConfig.shadow.media,
          "--app-shadow-brand": appThemeConfig.shadow.brand,
          "--app-surface-feature": appThemeConfig.surface.feature,
          "--app-surface-hero": appThemeConfig.surface.hero,
          "--app-surface-cta": appThemeConfig.surface.cta,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",
          maxWidth: `${theme.app.layout.containerMaxWidth}px`,
          marginInline: "auto",
          paddingInline: `${theme.app.layout.gutters.xs}px`,
          [theme.breakpoints.up("sm")]: {
            paddingInline: `${theme.app.layout.gutters.sm}px`,
          },
          [theme.breakpoints.up("md")]: {
            paddingInline: `${theme.app.layout.gutters.md}px`,
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: appThemeConfig.radius.pill,
          paddingInline: 20,
          paddingBlock: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: appThemeConfig.radius.pill,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: appThemeConfig.radius.md,
          boxShadow: appThemeConfig.shadow.card,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: appThemeConfig.radius.md,
        },
      },
    },
  },
});

export default theme;
