import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { homeHighlights, practiceInfo, reviews, services } from "../data/siteContent";

const highlightIcons = [<SelfImprovementOutlinedIcon />, <LocalHospitalOutlinedIcon />, <PlaceOutlinedIcon />];

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Physiotherapie in München Nord"
        title="Zurück in Bewegung mit moderner, persönlicher Physiotherapie."
        description="Wir gestalten eine helle, vertrauensvolle Praxispräsenz für Menschen, die kompetente Begleitung bei Schmerzen, Bewegungseinschränkungen und Prävention suchen."
        primaryAction={{ label: "Leistungen ansehen", to: "/leistungen" }}
        secondaryAction={{ label: "Kontakt aufnehmen", to: "/kontakt" }}
        image="/images/hero-placeholder.svg"
        imageAlt="Platzhalter für ein zukünftiges Praxisfoto"
      />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3}>
          {homeHighlights.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Box className="icon-chip">{highlightIcons[index]}</Box>
                  <Typography variant="h5" sx={{ mt: 2.5, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <Box className="feature-band">
          <SectionIntro
            eyebrow="Willkommen"
            title="Ein frischer digitaler Auftritt für eine etablierte Praxis."
            description="Die Inhalte basieren auf der bestehenden Website: ganzheitliche Physiotherapie, persönliche Betreuung, moderne Behandlungsmethoden und eine klare Ausrichtung auf Lebensqualität und Beweglichkeit."
          />
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 2 }}>
                Die Praxis positioniert sich als verlässliche Anlaufstelle im Ärztehaus Nordheide. Im neuen Design übersetzen wir dieses Vertrauen in eine ruhigere, hochwertigere Bildsprache, klare Inhalte und deutliche Handlungsaufforderungen.
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                Für den Livegang können die Platzhalterbilder später einfach durch echte Praxis-, Team- und Behandlungsfotos ersetzt werden.
              </Typography>
            </Box>
            <Box
              component="img"
              src="/images/treatment-placeholder.svg"
              alt="Platzhalter für ein Behandlungsfoto"
              sx={{ flex: 1, width: "100%", borderRadius: 8 }}
            />
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          eyebrow="Leistungsauszug"
          title="Wichtige Behandlungen auf einen Blick."
          description="Die Startseite führt in die Kernleistungen ein und macht sofort sichtbar, dass sowohl klassische Physiotherapie als auch ergänzende physikalische Anwendungen angeboten werden."
        />
        <Grid container spacing={3}>
          {services.slice(0, 4).map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 1.5 }}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Button component={NavLink} to="/leistungen" color="primary" endIcon={<ArrowForwardRoundedIcon />}>
                    Mehr erfahren
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid key={review.quote} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", bgcolor: "background.paper" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    “
                  </Typography>
                  <Typography sx={{ lineHeight: 1.9, color: "text.secondary", mb: 2 }}>
                    {review.quote}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
                    {review.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box className="cta-panel">
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }}>
            <Box>
              <Typography variant="h3" sx={{ mb: 1.5, color: "#fff" }}>
                Terminwunsch oder Rückfrage?
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.78)", maxWidth: 620, lineHeight: 1.8 }}>
                Telefonisch unter {practiceInfo.phone} oder per E-Mail an {practiceInfo.email}.
              </Typography>
            </Box>
            <Button component={NavLink} to="/kontakt" variant="contained" color="secondary">
              Zur Kontaktseite
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
