import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages import
import Home from "./pages";
import About from "./pages/about";
import Blog from "./pages/blog";
import ComingSoon from "./pages/comingsoon";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
