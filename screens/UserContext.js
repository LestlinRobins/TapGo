import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const logout = () => {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    setUserInfo(null);
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, logout }}>
      {children}
    </UserContext.Provider>
  );
};
