import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<AA />} /> */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/dashboard/user/new"
          element={
            <Layout>
              <AddUser />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
