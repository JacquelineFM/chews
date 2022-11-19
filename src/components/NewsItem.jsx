// @mui
import { createTheme } from "@mui/material/styles";
import {
  Card,
  Box,
  Tooltip,
  Avatar,
  CardContent,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
// utils
import { fDateTimeSuffix } from "../utils/formatTime";
import { getNumRandom } from "../utils/getNumRandom";
// components
import Image from "./Image";
import SvgIconStyle from "./SvgIconStyle";
import TextIconLabel from "./TextIconLabel";
import TextMaxLine from "./TextMaxLine";

// ----------------------------------------------------------------------

const NewsItem = ({ newsItem }) => {
  const theme = createTheme();
  const { author, description, publishedAt, source, title, url, urlToImage } =
    newsItem;

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 4,
        boxShadow:
          "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 24px -4px rgb(145 158 171 / 12%)",
      }}
    >
      {(author || urlToImage) && (
        <Box
          sx={{
            position: "relative",
            paddingTop: urlToImage ? "calc(100% * 3 / 4)" : author ? 5 : 0,
          }}
        >
          {author && (
            <>
              <SvgIconStyle
                src="https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg"
                sx={{
                  width: 80,
                  height: 36,
                  zIndex: 9,
                  bottom: -15,
                  position: "absolute",
                  color: "background.paper",
                }}
              />
              <Tooltip
                arrow
                title={author}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "common.black",
                      "& .MuiTooltip-arrow": {
                        color: "common.black",
                      },
                    },
                  },
                }}
              >
                <Avatar
                  alt={author}
                  src={`https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_${getNumRandom()}.jpg`}
                  sx={{
                    zIndex: 9,
                    width: 32,
                    height: 32,
                    left: 24,
                    bottom: -16,
                    position: "absolute",
                  }}
                />
              </Tooltip>
            </>
          )}
          {urlToImage && (
            <Image
              alt={title}
              src={urlToImage}
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            />
          )}
        </Box>
      )}
      <CardContent
        sx={{
          padding: theme.spacing(3),
          pt: 4,
        }}
      >
        {publishedAt && (
          <Typography
            variant="caption"
            component="div"
            color="secondary"
            gutterBottom
          >
            {fDateTimeSuffix(publishedAt)}
          </Typography>
        )}
        {title && (
          <Link href={url} target="_blank" color="inherit" underline="hover">
            <TextMaxLine variant="subtitle2" line={2}>
              {title}
            </TextMaxLine>
          </Link>
        )}
        {description && (
          <TextMaxLine
            variant="body2"
            color="text.secondary"
            line={3}
            sx={{ mt: 1 }}
          >
            {description}
          </TextMaxLine>
        )}
        {source.name && (
          <Stack
            spacing={1}
            direction="row"
            justifyContent="flex-end"
            sx={{
              mt: 3,
              color: "primary",
            }}
          >
            <TextIconLabel
              icon={
                <NewspaperIcon
                  color="secondary"
                  sx={{ width: 16, height: 16, mr: 0.5 }}
                />
              }
              value={source.name}
              sx={{ typography: "caption" }}
            />
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsItem;
