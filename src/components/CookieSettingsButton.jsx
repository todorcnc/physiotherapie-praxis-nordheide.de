import { Link } from "@mui/material";
import { useConsent } from "../context/ConsentContext";

function CookieSettingsButton() {
  const { openSettings } = useConsent();

  return (
    <Link
      component="button"
      type="button"
      color="text.secondary"
      underline="hover"
      variant="body2"
      onClick={openSettings}
      sx={{ border: 0, background: "transparent", cursor: "pointer", p: 0, font: "inherit" }}
    >
      Cookie settings
    </Link>
  );
}

export default CookieSettingsButton;
