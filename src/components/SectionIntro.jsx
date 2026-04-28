import { Stack, Typography } from "@mui/material";

function SectionIntro({ eyebrow, title, description }) {
  return (
    <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: (theme) => `${theme.app.layout.contentMaxWidth}px` }}>
      <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 800 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
        {description}
      </Typography>
    </Stack>
  );
}

export default SectionIntro;
