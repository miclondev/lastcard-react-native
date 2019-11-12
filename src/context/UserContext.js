import React, { createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  return (
    <UserContext.Provider value={{ userId: "0768853979", loggedIn: true }}>
      {props.children}
    </UserContext.Provider>
  );
}
