import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashbord />} />
      </Routes>
    </Router>
  );
}

export default App;
