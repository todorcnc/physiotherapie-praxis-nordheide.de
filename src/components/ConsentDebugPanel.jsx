import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useConsent } from "../context/ConsentContext";

const items = [
  { key: "analytics", title: "Analytics scripts", icon: <BarChartRoundedIcon /> },
  { key: "embeds", title: "External embeds", icon: <TravelExploreRoundedIcon /> },
  { key: "marketing", title: "Marketing tags", icon: <CampaignRoundedIcon /> },
];

function ConsentDebugPanel() {
  const { consent } = useConsent();

  return (
    <Grid container spacing={3}>
      {items.map((item) => {
        const enabled = consent[item.key];

        return (
          <Grid key={item.key} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 3.5 }}>
                <Box className="icon-chip">{item.icon}</Box>
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography color={enabled ? "primary.main" : "text.secondary"} sx={{ fontWeight: 700 }}>
                  {enabled ? "Allowed" : "Blocked"}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.75 }}>
                  {enabled
                    ? "This category can load after the visitor opted in."
                    : "This category remains off and should not load third-party code."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ConsentDebugPanel;
