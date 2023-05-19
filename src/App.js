import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import HeaderApp from "./layout/header/header";
import Footer from "./layout/footer/footer";
import { useMemo } from "react";
import axios from "axios";

function App() {
  useMemo(() => {
    // set axios
    axios.defaults.baseURL = "https://api.spoonacular.com/recipes/random";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderApp />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
