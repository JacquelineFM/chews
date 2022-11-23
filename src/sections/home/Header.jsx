// @mui
import { Grid, Typography } from "@mui/material";
// components
import WeatherWidget from "../../components/WeatherWidget";
import SocialMediaIcons from "../../components/SocialMediaIcons";

// ----------------------------------------------------------------------

const Header = ({ weather }) => {
  const { main, weather: photoWeather } = weather;
  const { temp } = main;
  const { icon } = photoWeather[0];

  return (
    <header>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 12 }}
        alignItems="center"
      >
        <Grid item xs={1} sm={1} md={4}>
          <WeatherWidget icon={icon} temp={temp} />
        </Grid>
        <Grid item xs={2} sm={2} md={4} order={{ xs: 3, md: 2 }}>
          <Typography variant="h4" component="h1" align="center">
            Newsify
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={4} order={{ xs: 2, md: 3 }}>
          <SocialMediaIcons />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
