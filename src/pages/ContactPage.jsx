import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Container, Grid, Typography } from "@mui/material";
import ConsentAwareEmbed from "../components/ConsentAwareEmbed";
import IconInfoCard from "../components/IconInfoCard";
import OpeningHoursAndCallGrid from "../components/OpeningHoursAndCallGrid";
import SectionIntro from "../components/SectionIntro";
import { practiceInfo } from "../data/siteContent";

const practiceAddress = `${practiceInfo.addressLine1}, ${practiceInfo.addressLine2}`;
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(practiceAddress)}&z=16&output=embed`;

const contactItems = [
  { icon: <AlternateEmailRoundedIcon />, title: "E-Mail", content: practiceInfo.email },
  { icon: <LocationOnRoundedIcon />, title: "Adresse", content: practiceAddress },
];

function ContactPage() {
  return (
    <>
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <SectionIntro
          eyebrow="Kontaktinfos"
          title="Alle wichtigen Angaben an einem Ort."
          description="So erreichen Sie unsere Praxis schnell und unkompliziert - telefonisch, per E-Mail oder direkt vor Ort."
        />
        <Grid container spacing={3}>
          {contactItems.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 6 }}>
              <IconInfoCard icon={item.icon} title={item.title} titleVariant="h5">
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.content}
                </Typography>
              </IconInfoCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ pb: { xs: 8, md: 10 } }}>
        <OpeningHoursAndCallGrid />
      </Container>

      <Container sx={{ pb: { xs: 4, md: 6 } }}>
        <SectionIntro
          eyebrow="Anfahrt"
          title="So finden Sie unsere Praxis."
          description="Die Karte zeigt den Standort unserer Praxis in der Neuherbergstraße 100 in 80937 München. Aus Datenschutzgründen wird sie erst nach Freigabe externer Medien geladen."
        />
        <ConsentAwareEmbed embedUrl={googleMapsEmbedUrl} title={`Google Maps: ${practiceAddress}`} height={600} />
      </Container>
    </>
  );
}

export default ContactPage;
