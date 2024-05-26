import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUS from "./pages/AboutUS";
import FAq from "./pages/FAq";
import Reviews from "./pages/Reviews";
import ContactUs from "./pages/ContactUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/reviews":
        title = "";
        metaDescription = "";
        break;
      case "/contactus":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUS />} />
      <Route path="/faq" element={<FAq />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}
export default App;
