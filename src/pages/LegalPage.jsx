import { Box, Container, Stack, Typography } from "@mui/material";
import SectionIntro from "../components/SectionIntro";
import Seo from "../components/Seo";
import { legalPages } from "../data/legalContent";
import { breadcrumbJsonLd, localBusinessJsonLd, pageSeo } from "../data/seo";

const pageKeyToSeo = {
  impressum: pageSeo.impressum,
  datenschutz: pageSeo.datenschutz,
  agb: pageSeo.agb,
};

function LegalPage({ pageKey }) {
  const page = legalPages[pageKey];
  const seo = pageKeyToSeo[pageKey];
  const structuredData = [
    localBusinessJsonLd(),
    breadcrumbJsonLd([
      { name: "Start", path: pageSeo.home.path },
      { name: page.title, path: seo.path },
    ]),
  ];

  return (
    <>
      <Seo {...seo} jsonLd={structuredData} />

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Box className="feature-band">
          <SectionIntro titleComponent="h1" eyebrow={page.eyebrow} title={page.title} description={page.intro} />

          <Stack spacing={4.5} sx={{ maxWidth: 980 }}>
            {page.sections.map((section) => (
              <Box component="section" key={section.title}>
                <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
                  {section.title}
                </Typography>
                <Stack spacing={1.5}>
                  {section.paragraphs.map((paragraph) => (
                    <Typography key={paragraph} color="text.secondary" sx={{ lineHeight: 1.85 }}>
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default LegalPage;
