// @mui
import { Masonry } from "@mui/lab";
// hooks
import useNews from "../hooks/useNews";
// components
import NewsItem from "./NewsItem";

// ----------------------------------------------------------------------

const ListNews = () => {
  const { news } = useNews();

  return (
    <Masonry
      columns={{ xs: 1, sm: 2, md: 3, lg: 5 }}
      spacing={3}
      sx={{ my: 5, mx: 0 }}
    >
      {news.map((newsItem) => (
        <NewsItem key={newsItem.url} newsItem={newsItem} />
      ))}
    </Masonry>
  );
};

export default ListNews;
