import { Box, Card, CardContent, Typography } from "@mui/material";

function IconInfoCard({ icon, title, children, action, titleVariant = "h4" }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", gap: 2.5, alignItems: "flex-start" }}>
          <Box className="icon-chip">{icon}</Box>
          <Box sx={{ minWidth: 0, width: "100%" }}>
            <Typography variant={titleVariant} sx={{ mb: 2 }}>
              {title}
            </Typography>
            <Box>{children}</Box>
            {action ? <Box sx={{ mt: 2.5 }}>{action}</Box> : null}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default IconInfoCard;
