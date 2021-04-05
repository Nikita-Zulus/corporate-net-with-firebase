import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrPath, addFetchPost, setAlert } from "../redux/actions";
import { withRouter } from "react-router-dom";

function Form_(props) {
  const { addFetchPost } = props;
  const { setAlert } = props;
  const { alert } = props;
  const registration = props.registration;
  const setCurrPath = props.setCurrPath;
  const [value, setValue] = useState("");
  let currpath = props.match.path;
  useEffect(() => {
    setCurrPath(currpath);
    // eslint-disable-next-line
  }, []);
  console.log(currpath);
  let timerId;
  const submitHandler = (event) => {
    event.preventDefault();
    if (!registration) {
      setAlert(true);
      timerId = setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }
    if (value.trim()) {
      addFetchPost({ post: value, id: new Date().toJSON(), path: currpath });
      setValue("");
    }
  };
  useEffect(() => {
    clearTimeout(timerId);
  }, [timerId]);
  return (
    <form onSubmit={submitHandler} className="form">
      {alert && (
        <div className="alert_main-form">
          Незарегистрированный пользователь не может оставлять, редактировать
          или удалять посты!
        </div>
      )}
      <div className="form__group">
        <input
          type="text"
          className="form__control"
          placeholder="Введите Ваш пост и нажмите Enter"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}
const mapDispatchToProps = {
  setCurrPath,
  addFetchPost,
  setAlert,
};
const mapStateToPrors = (state) => {
  return {
    registration: state.registration,
    alert: state.alert,
  };
};

export const Form = withRouter(
  connect(mapStateToPrors, mapDispatchToProps)(Form_)
);
