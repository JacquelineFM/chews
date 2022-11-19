// @mui
import { Stack } from "@mui/material";

// ----------------------------------------------------------------------

const TextIconLabel = ({ icon, value, sx }) => {
  return (
    <Stack
      direction="row"
      sx={{
        typography: "body2",
        ...sx,
      }}
    >
      {icon}
      {value}
    </Stack>
  );
};

export default TextIconLabel;
