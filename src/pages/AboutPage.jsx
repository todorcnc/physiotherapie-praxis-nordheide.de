import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import { Box, Card, CardContent, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { withBase } from "../config/runtime";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { aboutValues, practiceInfo } from "../data/siteContent";

const icons = [<Diversity3RoundedIcon fontSize="large" />, <PsychologyAltRoundedIcon fontSize="large" />, <FavoriteBorderRoundedIcon fontSize="large" />];

const quickFacts = [
  {
    title: "Breites Leistungsspektrum",
    text: "Zu unseren Behandlungsmöglichkeiten zählen unter anderem Krankengymnastik, manuelle Therapie, Lymphdrainage und weitere physiotherapeutische Anwendungen.",
    icon: <MedicalServicesRoundedIcon />,
  },
  {
    title: "Durchgehend besetzter Empfang",
    text: "Wir bemühen uns, auch für komplexe Terminpläne eine gute Lösung zu finden. Unser Team ist für Sie da und unterstützt Sie bei der Terminvereinbarung.",
    icon: <SupportAgentRoundedIcon />,
  },
  {
    title: "Kompetente Fachkräfte",
    text: "Unsere qualifizierten Therapeutinnen und Therapeuten begleiten Sie individuell, aufmerksam und mit dem Blick auf eine nachhaltige Verbesserung.",
    icon: <PersonSearchRoundedIcon />,
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Team, das Fachwissen und menschliche Nähe verbindet."
        description="Die bisherige Website betont Kompetenz, Empathie und ein engagiertes Team. Diese Seite schafft dafür eine moderne Bühne und Platz für spätere echte Teamfotos und Porträts."
        primaryAction={{ label: "Kontakt aufnehmen", to: "/kontakt" }}
        secondaryAction={{ label: "Leistungen ansehen", to: "/leistungen" }}
        image={withBase("images/team-placeholder.svg")}
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

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          eyebrow="Wir kümmern uns um Ihre Gesundheit"
          title="Was unsere Praxis auszeichnet."
          description="Klar, persönlich und gut erreichbar: So soll der erste Eindruck unserer Praxis auch online spürbar werden."
        />
        <Grid container spacing={3}>
          {quickFacts.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Box className="icon-chip">{item.icon}</Box>
                  <Typography variant="h5" sx={{ mt: 2.5, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Box className="cta-panel">
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }}>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h3" sx={{ mb: 1.5, color: "#fff" }}>
                Termin vereinbaren oder Rückfrage stellen
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.78)", maxWidth: 620, lineHeight: 1.8 }}>
                Rufen Sie uns direkt unter {practiceInfo.phone} an oder besuchen Sie unsere Kontaktseite für alle wichtigen Informationen auf einen Blick.
              </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", md: "auto" } }}>
              <Button href={`tel:${practiceInfo.phone.replaceAll(" ", "")}`} variant="contained" color="secondary">
                Jetzt anrufen
              </Button>
              <Button component={NavLink} to="/kontakt" variant="outlined" sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
                Kontakt ansehen
              </Button>
            </Stack>
          </Stack>
        </Box>
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
                src={withBase("images/team-placeholder.svg")}
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
