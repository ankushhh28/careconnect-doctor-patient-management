import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const details = { doctors };
  //   console.log(details)
  return(<AppContext.Provider value={details}>{children}</AppContext.Provider>)
  
};
export default AppContextProvider;
