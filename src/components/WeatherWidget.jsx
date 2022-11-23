// @mui
import { Stack, Box, Typography } from "@mui/material";

// ----------------------------------------------------------------------

const WeatherWidget = ({ icon, temp }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="start"
      alignItems="center"
    >
      <img
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`}
        width={45}
        height={45}
      />
      <Box direction="column" align="start">
        <Typography variant="subtitle2">{parseInt(temp)}°</Typography>
        <Typography variant="body2">Ciudad de México</Typography>
      </Box>
    </Stack>
  );
};

export default WeatherWidget;
