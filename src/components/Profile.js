import React from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  const firstname = useSelector((state) => state.firstname);
  const secondname = useSelector((state) => state.secondname);
  return (
    <div className="profile">
      <img
        className="icon"
        src={require("../images/Bender.jpg")}
        alt="profile-icon"
      />
      <div className="title title_ml">{`${firstname} ${secondname}`}</div>
    </div>
  );
};
