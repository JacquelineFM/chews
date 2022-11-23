// @mui
import { Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

// ----------------------------------------------------------------------

const SocialMediaIcons = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="end">
      <IconButton
        color="primary"
        href="https://www.linkedin.com/in/jacqueline-flores-méndez-7521ab177/"
        target="_blank"
        sx={{
          border: 1,
          borderRadius: 0,
        }}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="primary"
        href="mailto:jfloresm.dev@gmail.com"
        target="_blank"
        sx={{
          border: 1,
          borderRadius: 0,
        }}
      >
        <EmailIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="primary"
        href="https://github.com/JacquelineFM"
        target="_blank"
        sx={{
          border: 1,
          borderRadius: 0,
        }}
      >
        <GitHubIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default SocialMediaIcons;
