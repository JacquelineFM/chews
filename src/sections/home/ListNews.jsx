// infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
// @mui
import { Masonry } from "@mui/lab";
import { Typography } from "@mui/material";
// hooks
import useNews from "../../hooks/useNews";
// components
import Loader from "../../components/Loader";
//sections
import NewsItem from "./NewsItem";

// ----------------------------------------------------------------------

const ListNews = () => {
  const { news, hasMore, fetchMoreNews } = useNews();

  return (
    <InfiniteScroll
      next={fetchMoreNews}
      hasMore={hasMore}
      dataLength={news.length}
      loader={<Loader />}
      endMessage={
        <Typography variant="h5" align="center" sx={{ mb: 5 }}>
          ¡Yay! ¡Estás al día con estas noticias!
        </Typography>
      }
    >
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 5 }}
        spacing={3}
        sx={{ my: 5, mx: 0 }}
      >
        {news.map((newsItem) => (
          <NewsItem key={newsItem.url} newsItem={newsItem} />
        ))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default ListNews;
