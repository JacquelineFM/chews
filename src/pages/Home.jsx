// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Box, AppBar } from "@mui/material";
// hooks
import useNews from "../hooks/useNews";
// components
import Header from "../components/Header";
import Form from "../components/Form";
import ListNews from "../components/ListNews";

// ----------------------------------------------------------------------

const Home = () => {
  const theme = useTheme();
  const { loading, weather } = useNews();

  return (
    <Container maxWidth="xl">
      {!loading && weather?.name && (
        <>
          <Box
            sx={{
              py: 1,
              borderBottom: `2px dotted ${theme.palette.grey[400]}`,
            }}
          >
            <Header weather={weather} />
          </Box>
          <AppBar position="static" color="primary" sx={{ my: 0.5 }}>
            <Form />
          </AppBar>
          <ListNews />
        </>
      )}
    </Container>
  );
};

export default Home;
