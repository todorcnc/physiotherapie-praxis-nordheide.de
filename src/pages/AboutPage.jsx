import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { withBase } from "../config/runtime";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { practiceInfo } from "../data/siteContent";

const values = [
  {
    title: "Moderne Behandlung",
    text: "In der Physiotherapie Praxis Nordheide verbinden wir bewährte physiotherapeutische Methoden mit einer modernen, zeitgemäßen Behandlung in angenehmer Praxisatmosphäre.",
    icon: <MedicalServicesRoundedIcon fontSize="large" />,
  },
  {
    title: "Individueller Ansatz",
    text: "Jeder Mensch bringt andere Beschwerden, Voraussetzungen und Ziele mit. Deshalb richten wir unsere Therapie gezielt nach Ihrer persönlichen Situation aus.",
    icon: <Diversity3RoundedIcon fontSize="large" />,
  },
  {
    title: "Nachhaltige Ergebnisse",
    text: "Unser Anspruch ist es, nicht nur kurzfristig zu entlasten, sondern langfristige Verbesserungen für Beweglichkeit, Stabilität und Lebensqualität zu erreichen.",
    icon: <TrackChangesRoundedIcon fontSize="large" />,
  },
];

const strengths = [
  "Persönliche physiotherapeutische Betreuung mit Blick auf den ganzen Menschen",
  "Individuell abgestimmte Behandlung für akute, chronische und postoperative Beschwerden",
  "Ruhige, professionelle Praxisumgebung im Münchner Norden",
  "Klare Begleitung mit dem Ziel, alltagstaugliche und langfristige Fortschritte zu erreichen",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Physiotherapie mit persönlichem Anspruch und klarem Therapieziel."
        description="Die Physiotherapie Praxis Nordheide steht für moderne physiotherapeutische Behandlung, individuelle Betreuung und das Ziel, nachhaltige Ergebnisse für Ihre Gesundheit und Lebensqualität zu erreichen."
        primaryAction={{ label: "Termin anfragen", to: "/kontakt" }}
        secondaryAction={{ label: "Leistungen ansehen", to: "/leistungen" }}
        image={withBase("images/team-placeholder.svg")}
        imageAlt="Platzhalter für die Praxisdarstellung"
      />

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Box className="feature-band">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionIntro
                eyebrow="Unsere Praxis"
                title="Physiotherapie Praxis Nordheide"
                description="Wir bieten Ihnen eine moderne und qualitätsorientierte physiotherapeutische Behandlung für ein breites Spektrum an Beschwerden. Unser Ziel ist es, jede Patientin und jeden Patienten individuell zu begleiten und durch einen persönlich abgestimmten Therapieansatz langfristige Verbesserungen zu erreichen, die zu mehr Beweglichkeit, mehr Wohlbefinden und einer besseren Lebensqualität beitragen."
              />

              <Stack spacing={2.2} sx={{ mt: 4 }}>
                {strengths.map((item) => (
                  <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        mt: "0.55rem",
                        flexShrink: 0,
                      }}
                    />
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={withBase("images/team-placeholder.svg")}
                alt="Platzhalter für Praxis oder Teamfoto"
                sx={{
                  width: "100%",
                  maxWidth: 620,
                  display: "block",
                  mx: "auto",
                  borderRadius: "var(--app-radius-lg)",
                  boxShadow: "var(--app-shadow-soft)",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container sx={{ py: { xs: 2, md: 4 } }}>
        <SectionIntro
          eyebrow="Wofür wir stehen"
          title="Kompetent, aufmerksam und individuell."
          description="Unsere Behandlungen orientieren sich nicht nur an der Diagnose, sondern an Ihrer gesamten gesundheitlichen Situation. So entsteht eine Therapie, die fachlich fundiert ist und gleichzeitig zu Ihrem Alltag passt."
        />

        <Grid container spacing={3}>
          {values.map((value) => (
            <Grid key={value.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Box className="icon-chip">{value.icon}</Box>
                  <Typography variant="h5" sx={{ mt: 2.5, mb: 1.5 }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                    {value.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Card>
          <CardContent sx={{ p: { xs: 4, md: 5 } }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h4" sx={{ mb: 1.5 }}>
                  Unser Behandlungsverständnis
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9, maxWidth: 920 }}>
                  In der Physiotherapie Praxis Nordheide legen wir Wert auf eine strukturierte, persönliche und zielgerichtete Behandlung. Wir möchten Beschwerden
                  nicht nur kurzfristig begleiten, sondern gemeinsam mit Ihnen daran arbeiten, Funktionen zu verbessern, Belastungen zu reduzieren und ein stabiles
                  Ergebnis für den Alltag zu schaffen.
                </Typography>
              </Box>

              <Box>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9, maxWidth: 920 }}>
                  Dazu verbinden wir therapeutische Erfahrung, sorgfältige Befundung und individuell ausgewählte Maßnahmen aus unserem physiotherapeutischen
                  Leistungsspektrum. So entsteht eine Behandlung, die nachvollziehbar, persönlich und auf Ihre Entwicklung abgestimmt ist.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>

      <Container sx={{ py: { xs: 2, md: 6 } }}>
        <Box className="cta-panel">
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }}>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h3" sx={{ mb: 1.5, color: "#fff" }}>
                Lernen Sie unsere Praxis persönlich kennen
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 680, lineHeight: 1.8 }}>
                Vereinbaren Sie Ihren Termin telefonisch unter {practiceInfo.phone} oder besuchen Sie unsere Kontaktseite für Anfahrt, Öffnungszeiten und weitere
                Informationen.
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", md: "auto" } }}>
              <Button href={`tel:${practiceInfo.phone.replaceAll(" ", "")}`} variant="contained" color="secondary">
                Jetzt anrufen
              </Button>
              <Button component={NavLink} to="/kontakt" variant="outlined" sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.42)" }}>
                Kontakt ansehen
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>

      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Card>
          <CardContent sx={{ p: { xs: 4, md: 5 } }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="space-between">
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  Praxisinformationen
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {practiceInfo.addressLine1}
                  <br />
                  {practiceInfo.addressLine2}
                </Typography>
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  Kontakt
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Telefon: {practiceInfo.phone}
                  <br />
                  E-Mail: {practiceInfo.email}
                </Typography>
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  Hinweis
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {practiceInfo.note}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default AboutPage;
