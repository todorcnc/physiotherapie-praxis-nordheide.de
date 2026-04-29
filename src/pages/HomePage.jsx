import CallRoundedIcon from "@mui/icons-material/CallRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SectionIntro from "../components/SectionIntro";
import { withBase } from "../config/runtime";
import { practiceInfo } from "../data/siteContent";

const openingHours = [
  { day: "Mo - Do", hours: "08:00 - 12:30 Uhr / 14:00 - 18:00 Uhr" },
  { day: "Fr", hours: "08:00 - 14:00 Uhr" },
];

function HomePage() {
  return (
    <>
      <Container sx={{ py: { xs: 2, md: 4 } }}>
        <Box className="feature-band">
          <SectionIntro
            eyebrow="Willkommen"
            title="Physiotherapie Praxis Nordheide"
            description="Herzlich willkommen in unserer Praxis für Physiotherapie und Krankengymnastik im Münchner Norden - im Ärztehaus Nordheide."
          />
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
            <Box
              component="img"
              src={withBase("images/Rezeption.webp")}
              alt="Empfangsbereich der Praxis"
              sx={{ width: "100%", display: "block", borderRadius: "var(--app-radius-lg)" }}
            />
          </Stack>
        </Box>
      </Container>

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Box className="feature-band">
          <SectionIntro
            eyebrow="Wir sind für Sie da"
            title="Liebe Patientinnen und Patienten,"
            description="Als Physiotherapeutinnen und Physiotherapeuten begleiten wir Sie kompetent und individuell auf Ihrem Weg zu mehr Beweglichkeit, Gesundheit und Wohlbefinden."
          />

          <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 5 }} alignItems="center" sx={{ width: "100%" }}>
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                width: "100%",
              }}
            >
              <Stack spacing={2.5}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  In unserer Praxis erwartet Sie eine persönliche Betreuung in angenehmer Atmosphäre. Unsere Behandlungen finden in modernen, separaten Räumen
                  statt, damit Sie sich gut aufgehoben fühlen und Ihre Therapie in ruhiger Umgebung stattfinden kann.
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  Um Wartezeiten zu vermeiden und Ihnen eine optimale Betreuung zu ermöglichen, bitten wir Sie, Termine vorab telefonisch zu vereinbaren.
                  Sollten Sie einen vereinbarten Termin einmal nicht wahrnehmen können, sagen Sie diesen bitte rechtzeitig ab.
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  Wir freuen uns darauf, Sie in unserer Praxis begrüßen zu dürfen.
                </Typography>
                <Typography variant="h5">Ihr Team der {practiceInfo.name}</Typography>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                <Button href={`tel:${practiceInfo.phone.replaceAll(" ", "")}`} variant="contained" color="primary" startIcon={<CallRoundedIcon />}>
                  Jetzt anrufen
                </Button>
                <Button component={NavLink} to="/kontakt" variant="outlined" color="primary">
                  Kontakt & Anfahrt
                </Button>
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
                src={withBase("images/img_1.jpg")}
                alt="Behandlungsraum der Praxis"
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  height: "auto",
                  display: "block",
                  borderRadius: "var(--app-radius-lg)",
                  border: "1px solid var(--app-surface-border)",
                  boxShadow: "var(--app-shadow-media)",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>

      <Container sx={{ pb: { xs: 8, md: 10 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box className="icon-chip">
                    <ScheduleRoundedIcon />
                  </Box>
                  <Box sx={{ minWidth: 0, width: "100%" }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      Öffnungszeiten
                    </Typography>
                    <Stack spacing={1.25}>
                      {openingHours.map((item) => (
                        <Stack
                          key={`${item.day}-${item.hours}`}
                          direction={{ xs: "column", sm: "row" }}
                          spacing={{ xs: 0.5, sm: 2 }}
                          justifyContent="space-between"
                          sx={{ py: 0.5 }}
                        >
                          <Typography sx={{ fontWeight: 700, minWidth: 88 }}>{item.day}</Typography>
                          <Typography color="text.secondary">{item.hours}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box className="icon-chip">
                    <PhoneInTalkRoundedIcon />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      Rufen Sie uns für einen Termin an
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 2.5 }}>
                      Vereinbaren Sie Ihren Termin einfach telefonisch. Wir unterstützen Sie gern bei der passenden Zeit und beantworten Ihre Fragen direkt.
                    </Typography>
                    <Button href={`tel:${practiceInfo.phone.replaceAll(" ", "")}`} variant="contained" color="primary" startIcon={<CallRoundedIcon />}>
                      {practiceInfo.phone}
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
