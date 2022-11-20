import axios from "axios";
import { useState, useEffect, createContext } from "react";

// ----------------------------------------------------------------------

const NewsContext = createContext();

// ----------------------------------------------------------------------

const NewsProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const checkNews = async () => {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${apiKey}`;
      const { data } = await axios(url);

      setNews(data.articles);
    };

    checkNews();
  }, [category]);

  const handleChangeCategory = (e, newValue) => setCategory(newValue);

  return (
    <NewsContext.Provider
      value={{ category, handleChangeCategory, weather, news, loading }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
