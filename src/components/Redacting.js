import React, { useState, Fragment, useEffect } from "react";

export function Redacting({
  post,
  setRedact,
  getPosts,
  registration,
  setAlert,
}) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  let timerId;
  const handleRedact = () => {
    if (!registration) {
      setAlert(true);
      timerId = setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }
    setShow((prev) => !prev);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      setRedact({ post: value, id: post.id, path: post.path });
      getPosts();
      setValue("");
      setShow(false);
    }
  };
  useEffect(() => {
    clearTimeout(timerId);
  }, [timerId]);
  return (
    <Fragment>
      <button className="red" onClick={handleRedact}>
        Редактировать
      </button>
      {show && (
        <form onSubmit={submitHandler} className="form form_reduct">
          <div className="form__group">
            <input
              type="text"
              className="form__control"
              placeholder="Отредактируйте Ваш пост и нажмите Enter"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </form>
      )}
    </Fragment>
  );
}
