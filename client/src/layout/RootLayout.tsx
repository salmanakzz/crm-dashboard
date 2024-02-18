import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../pages/AddUser";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";
import CreateRoles from "../pages/CreateRoles";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import AddProfile from "../pages/AddProfile";
const RootLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
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
        <Route
          path="/dashboard/user/role"
          element={
            <Layout>
              <CreateRoles />
            </Layout>
          }
        />
        <Route
          path="/dashboard/user/profile"
          element={
            <Layout>
              <AddProfile />
            </Layout>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RootLayout;
