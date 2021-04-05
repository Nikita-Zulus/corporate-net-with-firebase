import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  setCurrPath,
  registrate,
  changeFirstname,
  changeSecondname,
} from "../redux/actions";

function Registration_({
  setCurrPath,
  registrate,
  changeFirstname,
  changeSecondname,
  registration,
}) {
  const [show, setShow] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
  };
  setCurrPath("/registration");
  let timerId;
  const handleRegistration = () => {
    if (!firstname.length || !secondname.length) {
      console.log("haha");
      return;
    }
    registrate(true);
    changeFirstname(firstname);
    changeSecondname(secondname);
    if (!registration) {
      setShow(true);
      timerId = setTimeout(() => {
        setShow(false);
      }, 3000);
      return;
    }
  };
  const [firstname, setfirstname] = useState("");
  const [secondname, setsecondname] = useState("");
  useEffect(() => {
    clearTimeout(timerId);
  }, [show, timerId]);
  return (
    <div className="registration title title_xl">
      <form onSubmit={submitHandler}>
        <label className="registration__form-vert">
          Введите Ваше имя
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            required
          />
        </label>
        <label className="registration__form-vert">
          Введите Вашу фамилию
          <input
            type="text"
            name="secondname"
            value={secondname}
            onChange={(e) => setsecondname(e.target.value)}
            required
          />
        </label>
        <button
          className="button button_registration"
          onClick={handleRegistration}
        >
          Зарегистрироваться
        </button>
      </form>
      {show && (
        <div className="alert">
          Регистрация прошла успешно!
          <br />
          Теперь можете редактировать, публиковать или удалять свои посты
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  setCurrPath,
  registrate,
  changeFirstname,
  changeSecondname,
};
const mapStateToProps = (state) => {
  return {
    registration: state.geristration,
  };
};
export const Registration = connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration_);
