// @mui
import { Box, Grid, Stack, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

// ----------------------------------------------------------------------

const Header = () => {
  return (
    <header>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 12 }}
        alignItems="center"
      >
        <Grid item xs={1} sm={1} md={4}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="start"
            alignItems="center"
          >
            <img
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/10d.svg`}
              width={45}
              height={45}
            />
            <Box direction="column" align="start">
              <Typography variant="subtitle2">30°</Typography>
              <Typography variant="body2">Ciudad de México</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={2} sm={2} md={4} order={{ xs: 3, md: 2 }}>
          <Typography variant="h4" component="h1" align="center">
            Newsify
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={4} order={{ xs: 2, md: 3 }}>
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
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
