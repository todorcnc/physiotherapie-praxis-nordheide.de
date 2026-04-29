import CallRoundedIcon from "@mui/icons-material/CallRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { appointmentCardContent, openingHoursCompact, practiceInfo } from "../data/siteContent";
import IconInfoCard from "./IconInfoCard";

function OpeningHoursAndCallGrid() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <IconInfoCard icon={<ScheduleRoundedIcon />} title="Öffnungszeiten">
          <Stack spacing={1.25}>
            {openingHoursCompact.map((item) => (
              <Stack
                key={`${item.day}-${item.hours}`}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 0.5, sm: 2 }}
                justifyContent="space-between"
                sx={{ py: 0.5 }}
              >
                <Typography sx={{ fontWeight: 700, minWidth: 88, color: "text.primary" }}>{item.day}</Typography>
                <Typography color="text.secondary">{item.hours}</Typography>
              </Stack>
            ))}
          </Stack>
        </IconInfoCard>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <IconInfoCard
          icon={<PhoneInTalkRoundedIcon />}
          title={appointmentCardContent.title}
          action={
            <Button
              href={`tel:${practiceInfo.phone.replaceAll(" ", "")}`}
              variant="contained"
              color="primary"
              startIcon={<CallRoundedIcon />}
            >
              {practiceInfo.phone}
            </Button>
          }
        >
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {appointmentCardContent.text}
          </Typography>
        </IconInfoCard>
      </Grid>
    </Grid>
  );
}

export default OpeningHoursAndCallGrid;
