import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import { Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { services } from "../data/siteContent";

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Therapieangebote, klar gegliedert und modern präsentiert."
        description="Die Inhalte auf dieser Seite basieren auf den Leistungen der bestehenden Website und sind so verdichtet, dass sie verständlich, hochwertig und vertrauenswürdig wirken."
        primaryAction={{ label: "Termin anfragen", to: "/kontakt" }}
        secondaryAction={{ label: "Über uns", to: "/ueber-uns" }}
        image="/images/treatment-placeholder.svg"
        imageAlt="Platzhalter für eine Therapieszene"
      />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          eyebrow="Angebot"
          title="Von klassischer Physiotherapie bis zu ergänzenden Anwendungen."
          description="Die neue Struktur eignet sich gut, um später einzelne Leistungen weiter auszubauen, zum Beispiel mit Indikationen, Behandlungsdauer oder häufigen Fragen."
        />
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <span className="icon-chip">
                      <MedicalServicesOutlinedIcon />
                    </span>
                    <div>
                      <Typography variant="h5" sx={{ mb: 1.5 }}>
                        {service.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        {service.description}
                      </Typography>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ServicesPage;
