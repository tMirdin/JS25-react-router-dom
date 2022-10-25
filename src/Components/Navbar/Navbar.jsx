import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// todo прочитать про event.PreventDefault()
const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* С помощью тегов <a> страничка перезагружается */}
        {/* <a href="/">
          <li>Главная</li>
        </a>
        <a href="/about">
          <li>О нас</li>
        </a>
        <a href="/users">
          <li>Участники</li>
        </a> */}

        {/* Тег <Link> от react-roter-dom */}
        {/* <Link to="/">
          <li>Главная</li>
        </Link>
        <Link to="/about">
          <li>О нас</li>
        </Link>
        <Link to="/users">
          <li>Участники</li>
        </Link> */}

        {/* <NavLink> от react-router-dom. С добавлением класса active */}
        <NavLink to="/">
          <li>Главная</li>
        </NavLink>
        <NavLink to="/about">
          <li>О нас</li>
        </NavLink>
        <NavLink to="/users">
          <li>Участники</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
