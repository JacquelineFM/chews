import axios from "axios";
import { useState, useEffect, createContext } from "react";

// ----------------------------------------------------------------------

const NewsContext = createContext();

// ----------------------------------------------------------------------

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const checkNews = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${apiKey}`;
      const { data } = await axios(url);

      setNews(data.articles);
    };

    checkNews();
  }, [category]);

  const handleChangeCategory = (e, newValue) => setCategory(newValue);

  return (
    <NewsContext.Provider value={{ category, handleChangeCategory, news }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
