// @mui
import { Box, CircularProgress } from "@mui/material";

// ----------------------------------------------------------------------

const Loader = () => {
  return (
    <Box sx={{ overflow: "hidden", my: 10 }} textAlign="center">
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loader;
