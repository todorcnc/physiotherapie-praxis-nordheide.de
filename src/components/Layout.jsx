import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Container, Drawer, IconButton, Link, List, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useConsent } from "../context/ConsentContext";
import { withBase } from "../config/runtime";
import { legalNavigationItems, navigationItems, practiceInfo } from "../data/siteContent";
import CookieBanner from "./CookieBanner";
import CookieSettingsButton from "./CookieSettingsButton";
import CookieSettingsDialog from "./CookieSettingsDialog";

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resetConsent } = useConsent();

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#0d6e6e" : "#274042",
    textDecoration: "none",
    fontWeight: isActive ? 800 : 600,
  });

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(180deg, #f6f4ef 0%, #fcfbf8 100%)" }}>
      <AppBar
        component="header"
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(13, 110, 110, 0.08)",
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: 84 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1 }}>
              <Box
                component="img"
                src={withBase(practiceInfo.logo)}
                alt={`${practiceInfo.name} Logo`}
                sx={{ width: "130px", borderRadius: "var(--app-radius-lg)" }}
              />
              {/* <Box>
                <Typography variant="subtitle2" sx={{ letterSpacing: "0.16em", textTransform: "uppercase", color: "primary.main" }}>
                  München Nordheide
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: '"Fraunces", Georgia, serif' }}>
                  {practiceInfo.name}
                </Typography>
              </Box> */}
            </Stack>

            <Stack component="nav" aria-label="Hauptnavigation" direction="row" spacing={4} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
              {navigationItems.map((item) => (
                <NavLink key={item.path} to={item.path} style={navLinkStyle}>
                  {item.label}
                </NavLink>
              ))}
              {/* <Button component={NavLink} to="/kontakt" variant="contained" color="primary" startIcon={<PhoneInTalkRoundedIcon />}>
                Termin anfragen
              </Button> */}
            </Stack>

            <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }} onClick={() => setMobileOpen(true)} aria-label="Menü öffnen">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, p: 3 }}>
          <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
            Navigation
          </Typography>
          <List component="nav" aria-label="Mobile Hauptnavigation">
            {navigationItems.map((item) => (
              <ListItemButton key={item.path} component={NavLink} to={item.path} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main">
        <Outlet />
      </Box>

      <Box component="footer" sx={{ py: 5, mt: 8, borderTop: "1px solid rgba(13, 110, 110, 0.08)" }}>
        <Container>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }}>
            <Box>
              <Typography component="p" variant="h6" sx={{ mb: 1 }}>
                {practiceInfo.name}
              </Typography>
              <Typography color="text.secondary">
                {practiceInfo.addressLine1}, {practiceInfo.addressLine2}
              </Typography>
            </Box>

            <Stack spacing={1.5} alignItems={{ xs: "flex-start", md: "flex-end" }}>
              <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Typography color="text.secondary">Tel. {practiceInfo.phone}</Typography>
                <Link href={`mailto:${practiceInfo.email}`} color="text.secondary" underline="hover">
                  {practiceInfo.email}
                </Link>
              </Box>
              <Stack
                component="nav"
                aria-label="Footer Links"
                direction="row"
                spacing={1}
                alignItems="center"
                useFlexGap
                sx={{
                  flexWrap: "wrap",
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                  "& > *:not(:last-child)::after": {
                    content: '"|"',
                    color: "text.disabled",
                    ml: 1,
                  },
                }}
              >
                <CookieSettingsButton />
                <Link
                  component="button"
                  type="button"
                  color="text.secondary"
                  underline="hover"
                  variant="body2"
                  onClick={resetConsent}
                  sx={{ border: 0, background: "transparent", cursor: "pointer", p: 0, font: "inherit" }}
                >
                  Reset consent
                </Link>
                {legalNavigationItems.map((item) => (
                  <Link key={item.path} component={NavLink} to={item.path} color="text.secondary" underline="hover" variant="body2">
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <CookieSettingsDialog />
      <CookieBanner />
    </Box>
  );
}

export default Layout;
