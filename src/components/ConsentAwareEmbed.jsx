import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useConsent } from "../context/ConsentContext";

function ConsentAwareEmbed() {
  const { canUse, openSettings } = useConsent();
  const embedsAllowed = canUse("embeds");

  if (embedsAllowed) {
    return (
      <Box
        sx={{
          minHeight: 320,
          borderRadius: "var(--app-radius-md)",
          p: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(223, 244, 238, 0.84), rgba(247, 239, 228, 0.95))",
          border: "1px solid rgba(13, 110, 110, 0.1)",
        }}
      >
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: (theme) => `${theme.app.layout.contentMaxWidth - 180}px` }}>
          <MapOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h5">External embeds are allowed</Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
            This area is ready for a real map or video embed. Because the visitor opted in, third-party
            content may now load here.
          </Typography>
        </Stack>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: 320,
        borderRadius: "var(--app-radius-md)",
        p: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#f3efe8",
        border: "1px dashed rgba(13, 110, 110, 0.2)",
      }}
    >
      <Stack spacing={2} alignItems="center" sx={{ maxWidth: (theme) => `${theme.app.layout.contentMaxWidth - 180}px` }}>
        <LockOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
        <Typography variant="h5">Map blocked until consent is given</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
          External maps can set third-party cookies, so they stay blocked until the visitor enables
          external media.
        </Typography>
        <Button onClick={openSettings} variant="outlined" color="primary">
          Change cookie settings
        </Button>
      </Stack>
    </Box>
  );
}

export default ConsentAwareEmbed;
