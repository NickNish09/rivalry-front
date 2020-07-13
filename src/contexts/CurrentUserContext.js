import React, { createContext, useState, useContext } from "react";

export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const currentUserObject = {
    user: user,
    setUser: (data) => setUser(data),
  };

  return (
    <CurrentUserContext.Provider value={currentUserObject}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error("userCurrentUser must be used within CurrentUserProvider");
  }

  return context;
};
