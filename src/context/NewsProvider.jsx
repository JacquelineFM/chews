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
    /**
     * The function checkWeather() is an async function that sets the loading state to true, then tries
     * to get the weather data from the OpenWeatherMap API, and finally sets the loading state to
     * false.
     */
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

    /**
     * CheckNews is a function that fetches news from the API and sets the state of the news variable
     * to the articles returned from the API.
     */
    const checkNews = async () => {
      const articles = await fetchNews(1);

      setNews(articles);
    };

    checkNews();
  }, [category]);

  /**
   * This function fetches news from the News API and returns the articles.
   * @returns An array of objects.
   */
  const fetchNews = async (page) => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}&category=${category}&apiKey=${apiKey}`;
    const { data } = await axios(url);

    return data.articles;
  };

  /**
   * When the user scrolls to the bottom of the page, fetch more news articles and add them to the
   * existing list of news articles.
   */
  const fetchMoreNews = async () => {
    const articles = await fetchNews(page);
    setNews([...news, ...articles]);

    if (articles.length === 0 || articles.length < 20) setHasMore(false);

    setPage(page + 1);
  };

  /**
   * It takes an event and a new value, and sets the category to the new value
   */
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
