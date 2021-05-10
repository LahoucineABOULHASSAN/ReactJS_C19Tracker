import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  const [global, setGlobal] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        global,
        setGlobal,
        countries,
        setCountries,
        search,
        setSearch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
