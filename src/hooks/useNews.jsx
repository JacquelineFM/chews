import { useContext } from "react";
// contexts
import NewsContext from "../context/NewsProvider";

// ----------------------------------------------------------------------

const useNews = () => useContext(NewsContext);

export default useNews;
