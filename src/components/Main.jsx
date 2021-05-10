import { useEffect, useCallback, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { ErrorsContext } from "../contexts/ErrorsContext";
import Global from "../pages/Global";
import Countries from "../pages/Countries";
import Axios from "axios";
import Nav from "./Nav";
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
    <Router>
      <main>
        <Nav />
        <Switch>
          {global.Date && (
            <Route exact path="/" component={Global}>
              <Global global={global} />
            </Route>
          )}
          {countries.length && (
            <Route path="/countries" component={Countries}>
              <Countries
                countries={countries.sort(
                  (a, b) => b.NewConfirmed - a.NewConfirmed
                )}
              />
            </Route>
          )}
        </Switch>
      </main>
    </Router>
  );
};

export default Main;
