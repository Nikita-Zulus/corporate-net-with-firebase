import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrPath } from "../redux/actions";

function Navbar_(props) {
  const setCurrPath = props.setCurrPath;
  const currPath = props.currPath;
  console.log(currPath);
  return (
    <nav className="navbar">
      <div className="navbar__brand">Темы для обсуждения:</div>
      <ul className="navbar__nav">
        <NavLink
          className="nav__link"
          to="/work"
          onClick={() => setCurrPath("/work")}
        >
          <li
            className={
              currPath === "/work" ? "nav__item nav__item_chosen" : "nav__item"
            }
          >
            Рабочие моменты
          </li>
        </NavLink>

        <NavLink
          className="nav__link"
          to="/informal"
          onClick={() => setCurrPath("/informal")}
        >
          <li
            className={
              currPath === "/informal"
                ? "nav__item nav__item_chosen"
                : "nav__item"
            }
          >
            Неформальное общение
          </li>
        </NavLink>
        <NavLink className="nav__link" to="/" onClick={() => setCurrPath("/")}>
          <li
            className={
              currPath === "/" ? "nav__item nav__item_chosen" : "nav__item"
            }
          >
            Информация
          </li>
        </NavLink>
        <NavLink
          className="nav__link"
          to="/registration"
          onClick={() => setCurrPath("/registration")}
        >
          <li
            className={
              currPath === "/registration"
                ? "nav__item nav__item_chosen"
                : "nav__item"
            }
          >
            Регистрация
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

const mapDispatchToProps = {
  setCurrPath,
};
const mapStateToProps = (state) => {
  return {
    currPath: state.currPath,
  };
};
export const Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar_);
