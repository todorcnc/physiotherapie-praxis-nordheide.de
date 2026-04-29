import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { withBase } from "../config/runtime";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { services } from "../data/siteContent";

function ServicesPage() {
  return (
    <>
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          eyebrow="Leistungen"
          title="Die passende Therapie für Ihre Bedürfnisse"
          description="Unsere Praxis bietet Ihnen ein vielseitiges Spektrum an physiotherapeutischen Behandlungen auf höchstem fachlichen Niveau."
        />

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", overflow: "hidden" }}>
                <Box
                  component="img"
                  src={withBase(service.image)}
                  alt={service.imageAlt}
                  sx={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box className="icon-chip">
                      <MedicalServicesOutlinedIcon />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="h5" sx={{ mb: 1.5 }}>
                        {service.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        {service.description}
                      </Typography>
                    </Box>
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
