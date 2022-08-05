import React from "react";
import style from "./userInfo.css";

const userInfo = (props) => {
  const { userInfo } = props;
  const { name, username, email, phone, website, company, address } = userInfo;
  return (
    <div className="userInfo">
      <h3>Name : {name}</h3>
      <h3>username :{username}</h3>
      <h3>email : {email}</h3>
      <h3>address : {address.street}</h3>
      <h3>phone : {phone}</h3>
      <h3>website : {website}</h3>
      <h3>company : {company.name}</h3>
    </div>
  );
};

export default userInfo;
