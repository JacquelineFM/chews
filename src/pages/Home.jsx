// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Box, AppBar } from "@mui/material";
// hooks
import useNews from "../hooks/useNews";
// components
import Loader from "../components/Loader";
// sections
import Form from "../sections/home/Form";
import Header from "../sections/home/Header";
import ListNews from "../sections/home/ListNews";

// ----------------------------------------------------------------------

const Home = () => {
  const theme = useTheme();
  const { loading, weather } = useNews();

  return (
    <Container
      maxWidth="xl"
      sx={{
        ...(loading && {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }),
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        weather?.name && (
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
        )
      )}
    </Container>
  );
};

export default Home;
