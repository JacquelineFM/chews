// @mui
import { Typography } from "@mui/material";

// ----------------------------------------------------------------------

const TextMaxLine = ({
  variant = "body1",
  line = 2,
  children,
  sx,
  ...other
}) => {
  const style = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: line,
    WebkitBoxOrient: "vertical",
    ...sx,
  };

  return (
    <Typography variant={variant} sx={{ ...style }} {...other}>
      {children}
    </Typography>
  );
};

export default TextMaxLine;
