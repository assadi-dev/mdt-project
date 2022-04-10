import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./Layout";
import Page from "./Routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/connexion" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Page.Home />} />
          <Route path="services" element={<Page.Service />} />
          <Route path="effectifs" element={<Page.Effectif />} />
          <Route path="documents" element={<Page.Document />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
