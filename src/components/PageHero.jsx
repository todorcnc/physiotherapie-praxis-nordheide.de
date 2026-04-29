import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function actionProps(action) {
  if (!action) {
    return {};
  }

  if (action.href) {
    return {
      component: "a",
      href: action.href,
    };
  }

  return {
    component: NavLink,
    to: action.to,
  };
}

function PageHero({ eyebrow, title, description, primaryAction, secondaryAction, image, imageAlt }) {
  return (
    <Container sx={{ pt: { xs: 6, md: 10 } }}>
      <Box className="hero-shell">
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
            <Chip label={eyebrow} color="secondary" sx={{ mb: 3, color: "secondary.dark", bgcolor: "rgba(201, 140, 73, 0.14)" }} />
            <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "4.75rem" }, lineHeight: 1.02, mb: 3 }}>
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 580, mb: 4, lineHeight: 1.7, fontWeight: 500 }}>
              {description}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              {primaryAction && (
                <Button {...actionProps(primaryAction)} variant="contained" color="primary" endIcon={<ArrowOutwardRoundedIcon />}>
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button {...actionProps(secondaryAction)} variant="outlined" color="primary">
                  {secondaryAction.label}
                </Button>
              )}
            </Stack>
          </Box>
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={imageAlt}
              sx={{
                width: "100%",
                maxWidth: 560,
                height: "auto",
                display: "block",
                borderRadius: (theme) => `${theme.app.shell.heroImageRadius}px`,
                border: "1px solid var(--app-surface-border)",
                boxShadow: "var(--app-shadow-media)",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default PageHero;
