import React from "react";
import { v4 as uuidv4 } from "uuid";
import UserInfo from "./userInfo";
import style from "./userInfos.css";
const userInfos = (props) => {
  const { userInfos } = props;
  return (
    <section className="userInfos">
      {userInfos.map((userInfo) => {
        const userInfoData = { userInfo, id: uuidv4() };
        return <UserInfo {...userInfoData} key={userInfoData.id} />;
      })}
    </section>
  );
};

export default userInfos;
