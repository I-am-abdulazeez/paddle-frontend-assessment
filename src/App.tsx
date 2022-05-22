import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages import
import Home from "./pages";
import TaskOne from "./pages/task-one";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="task-one" element={<TaskOne />} />
      </Routes>
    </Router>
  );
};

export default App;
