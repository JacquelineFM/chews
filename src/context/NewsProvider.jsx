import axios from "axios";
import { useState, useEffect, createContext } from "react";

// ----------------------------------------------------------------------

const NewsContext = createContext();

// ----------------------------------------------------------------------

const NewsProvider = ({ children }) => {
  const [page, setPage] = useState(2);
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const checkWeather = async () => {
      setLoading(true);

      try {
        const appId = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=cdmx,MX&limit=1&appid=${appId}&units=metric&lang=es`;

        const { data } = await axios(url);
        const { lat, lon } = data[0];
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric&lang=es`;

        const { data: weatherData } = await axios(urlWeather);

        setWeather(weatherData);
      } finally {
        setLoading(false);
      }
    };

    checkWeather();
  }, []);

  useEffect(() => {
    setPage(2);
    setHasMore(true);

    const checkNews = async () => {
      const articles = await fetchNews(1);

      setNews(articles);
    };

    checkNews();
  }, [category]);

  const fetchNews = async (page) => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}&category=${category}&apiKey=${apiKey}`;
    const { data } = await axios(url);

    return data.articles;
  };

  const fetchMoreNews = async () => {
    const articles = await fetchNews(page);
    setNews([...news, ...articles]);

    if (articles.length === 0 || articles.length < 20) setHasMore(false);

    setPage(page + 1);
  };

  const handleChangeCategory = (e, newValue) => setCategory(newValue);

  return (
    <NewsContext.Provider
      value={{
        news,
        weather,
        hasMore,
        loading,
        category,
        fetchMoreNews,
        handleChangeCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
