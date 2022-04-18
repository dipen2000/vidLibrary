import { createContext, useContext } from "react";
import { useUserData } from "../custom-hooks/useUserData";

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const UserProvider = (props) => {
  const userObj = useUserData();
  return (
    <UserContext.Provider value={{ ...userObj }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
