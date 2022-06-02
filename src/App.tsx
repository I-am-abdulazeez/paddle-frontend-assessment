import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages import
import Home from "./pages";
import About from "./pages/about";
import Blog from "./pages/blog";
import ComingSoon from "./pages/comingsoon";
import Github from "./pages/github";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
