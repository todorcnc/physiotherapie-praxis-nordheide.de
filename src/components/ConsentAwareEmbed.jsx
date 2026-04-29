import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useConsent } from "../context/ConsentContext";

function ConsentAwareEmbed({ embedUrl, title = "Standortkarte", height = 420 }) {
  const { canUse, openSettings } = useConsent();
  const embedsAllowed = canUse("embeds");

  if (embedsAllowed) {
    return (
      <Box
        sx={{
          minHeight: height,
          borderRadius: "var(--app-radius-md)",
          overflow: "hidden",
          border: "1px solid rgba(13, 110, 110, 0.1)",
          boxShadow: "var(--app-shadow-card)",
        }}
      >
        <Box
          component="iframe"
          src={embedUrl}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          sx={{
            width: "100%",
            height: `${height}px`,
            border: 0,
            display: "block",
          }}
        />
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
          external media. After consent, the Google map with the practice location will load here.
        </Typography>
        <Button onClick={openSettings} variant="outlined" color="primary">
          Change cookie settings
        </Button>
      </Stack>
    </Box>
  );
}

export default ConsentAwareEmbed;
