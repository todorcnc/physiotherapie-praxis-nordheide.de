import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { withBase } from "../config/runtime";
import SectionIntro from "../components/SectionIntro";
import Seo from "../components/Seo";
import { services } from "../data/siteContent";
import { breadcrumbJsonLd, localBusinessJsonLd, pageSeo, servicesJsonLd } from "../data/seo";

const servicesStructuredData = [
  localBusinessJsonLd(),
  servicesJsonLd(),
  breadcrumbJsonLd([
    { name: "Start", path: pageSeo.home.path },
    { name: "Leistungen", path: pageSeo.services.path },
  ]),
];

function ServicesPage() {
  return (
    <>
      <Seo {...pageSeo.services} jsonLd={servicesStructuredData} />

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          titleComponent="h1"
          eyebrow="Leistungen"
          title="Behandlungsangebot"
          description="Hier finden Sie unser gesamtes physiotherapeutisches Behandlungsangebot in einer klaren Übersicht."
        />

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, md: 6 }}>
              <Card component="article" sx={{ height: "100%", overflow: "hidden" }}>
                <Box sx={{ width: "100%", aspectRatio: "16 / 9", bgcolor: "background.paper" }}>
                  {service.image && (
                    <Box
                      component="img"
                      src={withBase(service.image)}
                      alt={service.imageAlt}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box className="icon-chip">
                      <MedicalServicesOutlinedIcon />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography component="h2" variant="h5" sx={{ mb: 1.5 }}>
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
