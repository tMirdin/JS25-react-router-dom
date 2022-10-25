import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import HomePage from "./Components/HomePage/HomePage";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import UserDetails from "./Components/UserDetails/UserDetails";
import UsersPage from "./Components/UsersPage/UsersPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/userDetails/:pokemon" element={<UserDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
