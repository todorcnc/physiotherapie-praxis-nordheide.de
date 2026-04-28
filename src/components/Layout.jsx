import MenuIcon from "@mui/icons-material/Menu";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navigationItems, practiceInfo } from "../data/siteContent";

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#0d6e6e" : "#274042",
    textDecoration: "none",
    fontWeight: isActive ? 800 : 600,
  });

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(180deg, #f6f4ef 0%, #fcfbf8 100%)" }}>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(13, 110, 110, 0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 84 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1 }}>
              <Box className="brand-mark" />
              <Box>
                <Typography variant="subtitle2" sx={{ letterSpacing: "0.16em", textTransform: "uppercase", color: "primary.main" }}>
                  München Nordheide
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: '"Fraunces", Georgia, serif' }}>
                  {practiceInfo.name}
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
              {navigationItems.map((item) => (
                <NavLink key={item.path} to={item.path} style={navLinkStyle}>
                  {item.label}
                </NavLink>
              ))}
              <Button
                component={NavLink}
                to="/kontakt"
                variant="contained"
                color="primary"
                startIcon={<PhoneInTalkRoundedIcon />}
              >
                Termin anfragen
              </Button>
            </Stack>

            <IconButton
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Navigation
          </Typography>
          <List>
            {navigationItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Outlet />

      <Box component="footer" sx={{ py: 5, mt: 8, borderTop: "1px solid rgba(13, 110, 110, 0.08)" }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Fraunces", Georgia, serif' }}>
                {practiceInfo.name}
              </Typography>
              <Typography color="text.secondary">
                {practiceInfo.addressLine1}, {practiceInfo.addressLine2}
              </Typography>
            </Box>
            <Box>
              <Typography color="text.secondary">Tel. {practiceInfo.phone}</Typography>
              <Typography color="text.secondary">{practiceInfo.email}</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
