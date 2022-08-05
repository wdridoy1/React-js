import React, { useEffect, useState } from "react";
import UserInfos from "./userInfos";
import Search from "./Search";

const url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInfos, setUserInfo] = useState([]);
  const [fillterUserInfos, setfillterUserInfos] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const responsive = await fetch(url);
      const data = await responsive.json();
      setUserInfo(data);
      setfillterUserInfos(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  const SearchData = (searchValue) => {
    const value = searchValue.toLowerCase();
    const userInfoNew = userInfos.filter((userInfo) => {
      const userNew = userInfo.name.toLowerCase();
      return userNew.startsWith(value);
    });
    setfillterUserInfos(userInfoNew);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Information</h1>
      <Search onSearchData={SearchData} />
      {isLoading && <h2>Please wait data is Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {userInfos && <UserInfos userInfos={fillterUserInfos} />}
    </div>
  );
};

export default App;
