import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { withBase } from "../config/runtime";
import SectionIntro from "../components/SectionIntro";

const strengths = [
  "Persönliche physiotherapeutische Betreuung mit Blick auf den ganzen Menschen",
  "Individuell abgestimmte Behandlung für akute, chronische und postoperative Beschwerden",
  "Ruhige, professionelle Praxisumgebung im Münchner Norden",
  "Klare Begleitung mit dem Ziel, alltagstaugliche und langfristige Fortschritte zu erreichen",
];

const cabinetImages = [
  { src: "images/Rezeption.png", alt: "Rezeption der Physiotherapie Praxis Nordheide" },
  { src: "images/2.jpeg", alt: "Einblick in den Eingangsbereich der Praxis" },
  { src: "images/3.jpeg", alt: "Therapieraum der Praxis" },
  { src: "images/4.jpeg", alt: "Moderner Behandlungsraum" },
  { src: "images/5.jpeg", alt: "Praxisraum der Physiotherapie Praxis Nordheide" },
  { src: "images/6.jpeg", alt: "Behandlungsbereich der Praxis" },
  { src: "images/7.jpeg", alt: "Weiterer Eindruck aus den Praxisräumen" },
];

function AboutPage() {
  return (
    <>
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Box className="feature-band">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionIntro
                eyebrow="Über uns"
                title="Physiotherapie mit persönlichem Anspruch und klarem Therapieziel."
                description="Die Physiotherapie Praxis Nordheide steht für moderne physiotherapeutische Behandlung, individuelle Betreuung und das Ziel, nachhaltige Ergebnisse für Ihre Gesundheit und Lebensqualität zu erreichen. Wir begleiten jede Patientin und jeden Patienten mit einem persönlich abgestimmten Therapieansatz, der fachliche Qualität, Ruhe und eine vertrauensvolle Atmosphäre miteinander verbindet."
              />

              <Typography color="text.secondary" sx={{ lineHeight: 1.9, mt: 3, mb: 3 }}>
                Unser Anspruch ist es, Beschwerden nicht nur kurzfristig zu begleiten, sondern langfristige Verbesserungen in Beweglichkeit, Stabilität und
                Wohlbefinden zu fördern. Dazu verbinden wir therapeutische Erfahrung, sorgfältige Befundung und individuell ausgewählte Maßnahmen aus unserem
                physiotherapeutischen Leistungsspektrum.
              </Typography>

              <Stack spacing={2.2}>
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
                src={withBase("images/Rezeption.png")}
                alt="Rezeption der Physiotherapie Praxis Nordheide"
                sx={{
                  width: "100%",
                  maxWidth: 620,
                  display: "block",
                  mx: "auto",
                  borderRadius: "var(--app-radius-lg)",
                  boxShadow: "var(--app-shadow-soft)",
                  objectFit: "cover",
                  maxHeight: 620,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container sx={{ py: { xs: 2, md: 4 } }}>
        <SectionIntro
          eyebrow="Unsere Räume"
          title="Ein Eindruck aus unserer Praxis"
          description="Helle Räume, eine ruhige Atmosphäre und eine professionelle Umgebung gehören für uns zu einer guten Behandlung dazu. Hier erhalten Sie einen ersten visuellen Einblick in die Physiotherapie Praxis Nordheide."
        />

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="img"
              src={withBase(cabinetImages[0].src)}
              alt={cabinetImages[0].alt}
              sx={{
                width: "100%",
                height: { xs: 260, sm: 360, md: 520 },
                objectFit: "cover",
                display: "block",
                borderRadius: "var(--app-radius-lg)",
                boxShadow: "var(--app-shadow-soft)",
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={2.5}>
              {cabinetImages.slice(1, 5).map((image) => (
                <Grid key={image.src} size={{ xs: 6 }}>
                  <Box
                    component="img"
                    src={withBase(image.src)}
                    alt={image.alt}
                    sx={{
                      width: "100%",
                      height: { xs: 140, sm: 180, md: 248 },
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "var(--app-radius-md)",
                      boxShadow: "var(--app-shadow-soft)",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {cabinetImages.slice(5).map((image) => (
            <Grid key={image.src} size={{ xs: 12, sm: 6 }}>
              <Box
                component="img"
                src={withBase(image.src)}
                alt={image.alt}
                sx={{
                  width: "100%",
                  height: { xs: 220, sm: 260, md: 300 },
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "var(--app-radius-md)",
                  boxShadow: "var(--app-shadow-soft)",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default AboutPage;
