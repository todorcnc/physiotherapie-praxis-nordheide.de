import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import ConsentAwareEmbed from "../components/ConsentAwareEmbed";
import { withBase } from "../config/runtime";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { practiceInfo } from "../data/siteContent";

const contactItems = [
  { icon: <CallRoundedIcon />, title: "Telefon", content: practiceInfo.phone },
  { icon: <AlternateEmailRoundedIcon />, title: "E-Mail", content: practiceInfo.email },
  { icon: <LocationOnRoundedIcon />, title: "Adresse", content: `${practiceInfo.addressLine1}, ${practiceInfo.addressLine2}` },
  { icon: <AccessTimeRoundedIcon />, title: "Öffnungszeiten", content: practiceInfo.hours.join(" | ") },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Schnell erreichbar für Terminwünsche und Rückfragen."
        description="Die Kontaktdaten stammen aus der bisherigen Website und sind hier in eine klarere, conversion-orientierte Struktur übersetzt."
        primaryAction={{ label: "Jetzt anrufen", href: `tel:${practiceInfo.phone.replaceAll(" ", "")}` }}
        secondaryAction={{ label: "Leistungen ansehen", to: "/leistungen" }}
        image={withBase("images/hero-placeholder.svg")}
        imageAlt="Platzhalter für Empfang oder Praxisansicht"
      />

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          eyebrow="Kontaktinfos"
          title="Alle wichtigen Angaben an einem Ort."
          description="Für die finale Version kann hier zusätzlich eine eingebettete Karte, ein Kontaktformular oder eine Terminbuchung ergänzt werden."
        />
        <Grid container spacing={3}>
          {contactItems.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Box className="icon-chip">{item.icon}</Box>
                  <Typography variant="h5" sx={{ mt: 2.5, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ pb: { xs: 4, md: 6 } }}>
        <SectionIntro
          eyebrow="External content"
          title="Maps and third-party embeds stay blocked until they are allowed."
          description="This is the practical effect of the consent logic: external content is withheld first and only becomes available after explicit opt-in."
        />
        <ConsentAwareEmbed />
      </Container>

      <Container sx={{ pb: { xs: 8, md: 10 } }}>
        <Card>
          <CardContent sx={{ p: { xs: 4, md: 5 } }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Nächste sinnvolle Ausbaustufen
            </Typography>
            <Stack spacing={1.5}>
              <Typography color="text.secondary">Kontaktformular mit DSGVO-Hinweis und Erfolgsmeldung.</Typography>
              <Typography color="text.secondary">Google-Maps- oder OpenStreetMap-Einbindung für die Anfahrt.</Typography>
              <Typography color="text.secondary">Deutlich sichtbare Termin-CTA für mobile Besucherinnen und Besucher.</Typography>
            </Stack>
            <Button href={`mailto:${practiceInfo.email}`} variant="contained" color="primary" sx={{ mt: 3 }}>
              E-Mail senden
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default ContactPage;
