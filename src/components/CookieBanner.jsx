import { Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { useConsent } from "../context/ConsentContext";

function CookieBanner() {
  const { isBannerOpen, acceptAll, rejectAll, openSettings } = useConsent();

  if (!isBannerOpen) {
    return null;
  }

  return (
    <Box sx={{ position: "fixed", insetInline: 0, bottom: 24, zIndex: 1400, px: 2 }}>
      <Container>
        <Card
          sx={{
            borderRadius: "var(--app-radius-md)",
            border: "1px solid var(--app-surface-border-strong)",
            boxShadow: "0 28px 90px rgba(14, 49, 54, 0.18)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Cookie settings
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  We use essential storage for core functionality. Optional technologies for analytics,
                  external media, or marketing remain blocked unless the visitor explicitly allows them.
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", md: "row" }} spacing={1.5}>
                <Button variant="contained" color="primary" onClick={acceptAll}>
                  Accept all
                </Button>
                <Button variant="outlined" color="primary" onClick={rejectAll}>
                  Reject all
                </Button>
                <Button variant="text" color="primary" onClick={openSettings}>
                  Customize
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default CookieBanner;
