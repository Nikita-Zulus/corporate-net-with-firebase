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
          to="/corporate-net-with-firebase/work"
          onClick={() => setCurrPath("/corporate-net-with-firebase/work")}
        >
          <li
            className={
              currPath === "/corporate-net-with-firebase/work" ? "nav__item nav__item_chosen" : "nav__item"
            }
          >
            Рабочие моменты
          </li>
        </NavLink>

        <NavLink
          className="nav__link"
          to="/corporate-net-with-firebase/informal"
          onClick={() => setCurrPath("/corporate-net-with-firebase/informal")}
        >
          <li
            className={
              currPath === "/corporate-net-with-firebase/informal"
                ? "nav__item nav__item_chosen"
                : "nav__item"
            }
          >
            Неформальное общение
          </li>
        </NavLink>
        <NavLink className="nav__link" to="/corporate-net-with-firebase/" onClick={() => setCurrPath("/corporate-net-with-firebase/")}>
          <li
            className={
              currPath === "/corporate-net-with-firebase/" ? "nav__item nav__item_chosen" : "nav__item"
            }
          >
            Информация
          </li>
        </NavLink>
        <NavLink
          className="nav__link"
          to="/corporate-net-with-firebase/registration"
          onClick={() => setCurrPath("/corporate-net-with-firebase/registration")}
        >
          <li
            className={
              currPath === "/corporate-net-with-firebase/registration"
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
