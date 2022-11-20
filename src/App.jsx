// contexts
import { NewsProvider } from "./context/NewsProvider";
// pages
import Home from "./pages/Home";

// ----------------------------------------------------------------------

const App = () => {
  return (
    <NewsProvider>
      <Home />
    </NewsProvider>
  );
};

export default App;
