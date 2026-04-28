import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Button } from "@mui/material";
import { useConsent } from "../context/ConsentContext";

function CookieSettingsButton() {
  const { openSettings } = useConsent();

  return (
    <Button
      variant="text"
      color="primary"
      startIcon={<SettingsRoundedIcon />}
      onClick={openSettings}
      sx={{ px: 0, minWidth: "auto", justifyContent: "flex-start" }}
    >
      Cookie settings
    </Button>
  );
}

export default CookieSettingsButton;
