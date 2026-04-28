import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { aboutValues, practiceInfo } from "../data/siteContent";

const icons = [<Diversity3RoundedIcon fontSize="large" />, <PsychologyAltRoundedIcon fontSize="large" />, <FavoriteBorderRoundedIcon fontSize="large" />];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Team, das Fachwissen und menschliche Nähe verbindet."
        description="Die bisherige Website betont Kompetenz, Empathie und ein engagiertes Team. Diese Seite schafft dafür eine moderne Bühne und Platz für spätere echte Teamfotos und Porträts."
        primaryAction={{ label: "Kontakt aufnehmen", to: "/kontakt" }}
        secondaryAction={{ label: "Leistungen ansehen", to: "/leistungen" }}
        image="/images/team-placeholder.svg"
        imageAlt="Platzhalter für ein Teamfoto"
      />

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          eyebrow="Praxisprofil"
          title="Wofür die Praxis stehen soll."
          description="Aus dem alten Webauftritt lassen sich drei klare Schwerpunkte ableiten: therapeutische Kompetenz, echte Zuwendung und ein individueller, ganzheitlicher Ansatz."
        />
        <Grid container spacing={3}>
          {aboutValues.map((value, index) => (
            <Grid key={value.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Box className="icon-chip">{icons[index]}</Box>
                  <Typography variant="h5" sx={{ mt: 2.5, mb: 1.5 }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {value.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ py: { xs: 2, md: 4 } }}>
        <Box className="feature-band">
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
                Raum für echte Gesichter und echte Geschichten.
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.85, mb: 2 }}>
                Aktuell sind Bild- und Textbereiche so aufgebaut, dass später einzelne Therapeutinnen und Therapeuten, Spezialisierungen oder ein kurzer
                Praxisleitgedanke ergänzt werden können.
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                Die Seite funktioniert also schon als sauberer Launch-Stand und lässt sich zugleich unkompliziert mit echten Inhalten ausbauen.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, width: "100%" }}>
              <Box
                component="img"
                src="/images/team-placeholder.svg"
                alt="Platzhalter für zukünftige Teamdarstellung"
                sx={{ width: "100%", borderRadius: "var(--app-radius-lg)" }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Card>
          <CardContent sx={{ p: { xs: 4, md: 5 } }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Praktische Informationen
            </Typography>
            <Stack spacing={1.2}>
              <Typography color="text.secondary">
                Adresse: {practiceInfo.addressLine1}, {practiceInfo.addressLine2}
              </Typography>
              <Typography color="text.secondary">Telefon: {practiceInfo.phone}</Typography>
              <Typography color="text.secondary">E-Mail: {practiceInfo.email}</Typography>
              <Typography color="text.secondary">{practiceInfo.note}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default AboutPage;
