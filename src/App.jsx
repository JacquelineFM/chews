// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Box, AppBar } from "@mui/material";
// contexts
import { NewsProvider } from "./context/NewsProvider";
// components
import Header from "./components/Header";
import Form from "./components/Form";
import ListNews from "./components/ListNews";

// ----------------------------------------------------------------------

const App = () => {
  const theme = useTheme();

  return (
    <NewsProvider>
      <Container maxWidth="xl">
        <Box
          sx={{ py: 1, borderBottom: `2px dotted ${theme.palette.grey[400]}` }}
        >
          <Header />
        </Box>
        <AppBar position="static" color="primary" sx={{ my: 0.5 }}>
          <Form />
        </AppBar>
        <ListNews />
      </Container>
    </NewsProvider>
  );
};

export default App;
