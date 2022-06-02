import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages import
import Home from "./pages";
import ComingSoon from "./pages/comingsoon";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
};

export default App;
