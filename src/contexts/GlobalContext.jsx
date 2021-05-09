import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  const [global, setGlobal] = useState([]);
  const [countries, setCountries] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        global,
        setGlobal,
        countries,
        setCountries,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
