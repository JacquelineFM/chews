import { Container, Box, AppBar } from "@mui/material";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <Container maxWidth>
      <Box sx={{ py: 1, borderBottom: "2px dotted #C4CDD5" }}>
        <Header />
      </Box>
      <AppBar position="static" color="primary" sx={{ my: 0.5 }}>
        <Form />
      </AppBar>
    </Container>
  );
};

export default App;
