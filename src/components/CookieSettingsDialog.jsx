import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useConsent } from "../context/ConsentContext";
import { consentCategories } from "../lib/cookieConsent";

function CookieSettingsDialog() {
  const { consent, isSettingsOpen, closeSettings, savePreferences, acceptAll, rejectAll } = useConsent();
  const [draft, setDraft] = useState(consent);

  useEffect(() => {
    if (isSettingsOpen) {
      setDraft(consent);
    }
  }, [consent, isSettingsOpen]);

  const handleToggle = (key) => (_, checked) => {
    setDraft((current) => ({
      ...current,
      [key]: checked,
    }));
  };

  return (
    <Dialog open={isSettingsOpen} onClose={closeSettings} fullWidth maxWidth="sm">
      <DialogTitle>Cookie preferences</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2.5}>
          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
            Optional categories stay off until the visitor clearly opts in. Essential storage cannot be
            disabled because it keeps the site working and remembers the consent choice itself.
          </Typography>

          {consentCategories.map((category, index) => (
            <Box key={category.key}>
              {index > 0 ? <Divider sx={{ mb: 2.5 }} /> : null}
              <FormControlLabel
                control={
                  <Switch
                    checked={draft[category.key]}
                    disabled={category.required}
                    onChange={handleToggle(category.key)}
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {category.label}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {category.description}
                    </Typography>
                  </Box>
                }
                sx={{ m: 0, alignItems: "flex-start", gap: 2 }}
              />
            </Box>
          ))}
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 2, justifyContent: "space-between", flexWrap: "wrap", gap: 1.5 }}>
        <Stack direction="row" spacing={1.5}>
          <Button onClick={rejectAll} color="primary" variant="outlined">
            Reject all
          </Button>
          <Button onClick={acceptAll} color="primary" variant="contained">
            Accept all
          </Button>
        </Stack>
        <Button
          onClick={() =>
            savePreferences({
              analytics: draft.analytics,
              embeds: draft.embeds,
              marketing: draft.marketing,
            })
          }
          color="primary"
          variant="contained"
        >
          Save selection
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CookieSettingsDialog;
