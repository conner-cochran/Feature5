import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";

import Main from "./Main/Main";
import About from "./About/About";
import Account from "./Account/Account";
import Footer from "./Footer/Footer";

//this is a function which displays main headings on the page
//rout used to directly load the linked page
export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/" element={<ProtectedRoute path="/" element={Main} />} />
        <Route
          path="/Main"
          element={<ProtectedRoute path="/" element={Main} />}
        />

        <Route path="*" element={<Navigate to="/auth" replace />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/About" element={<About />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}
