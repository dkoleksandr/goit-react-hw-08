import { Outlet, Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import ContactList from "../ContactList/ContactList";

const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
