import React, { createContext, useState } from "react";
// import useUserInfo from "../hooks/useUserInfo";

export const UserInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
  //   const {} = useUserInfo();
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserInfoContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
