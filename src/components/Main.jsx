import { useEffect, useCallback, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { ErrorsContext } from "../contexts/ErrorsContext";
import Global from "../pages/Global";
import Countries from "../pages/Countries";
import Axios from "axios";
const Main = () => {
  const { global, setGlobal, countries, setCountries } = useContext(
    GlobalContext
  );
  const { setErrors } = useContext(ErrorsContext);
  const fetchResults = useCallback(() => {
    const url = "https://api.covid19api.com/summary";
    const fetchData = async () => {
      try {
        const res = await Axios.get(url);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        setGlobal(res.data.Global);
        setCountries(res.data.Countries);
      } catch (err) {
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setErrors(error);
      }
    };
    fetchData();
  }, [setGlobal, setCountries, setErrors]);
  useEffect(
    () => {
      fetchResults();
    }, // eslint-disable-next-line
    []
  );
  return (
    <>
      {global.Date && <Global global={global} />}
      {countries.length && <Countries countries={countries.slice(0, 10)} />}
    </>
  );
};

export default Main;
