// lazy image
import { LazyLoadImage } from "react-lazy-load-image-component";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Image = ({ effect = "blur", sx, ...other }) => {
  return (
    <Box
      component="span"
      sx={{
        lineHeight: 0,
        display: "block",
        overflow: "hidden",
        "& .wrapper": {
          width: 1,
          height: 1,
          backgroundSize: "cover !important",
        },
        ...sx,
      }}
    >
      <Box
        component={LazyLoadImage}
        wrapperClassName="wrapper"
        effect={effect}
        placeholderSrc="https://zone-assets-api.vercel.app/assets/img_placeholder.svg"
        sx={{ width: 1, height: 1, objectFit: "cover" }}
        {...other}
      />
    </Box>
  );
};

export default Image;
