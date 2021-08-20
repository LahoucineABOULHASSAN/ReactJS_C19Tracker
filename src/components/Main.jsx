import { useEffect, useCallback, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { ErrorsContext } from "../contexts/ErrorsContext";
import { Global, Countries } from "../pages";
import Axios from "axios";
import Nav from "./Nav";
import Error from "./Error";
import Loading from "./Loading";
const Main = () => {
  const { global, setGlobal, countries, setCountries } =
    useContext(GlobalContext);
  const { errors, setErrors } = useContext(ErrorsContext);
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

  const renderGlobal = () => {
    if (global.Date) {
      return (
        <Route exact path="/">
          <Global global={global} />
        </Route>
      );
    } else if (!errors) {
      return <Loading />;
    }
    if (errors) return <Error error={errors} />;
  };
  const renderCountries = () => {
    if (countries.length) {
      return (
        <Route path="/countries">
          <Countries
            countries={countries.sort(
              (a, b) => b.NewConfirmed - a.NewConfirmed
            )}
          />
        </Route>
      );
    } else if (!errors) {
      return <Loading />;
    }
    if (errors) return <Error error={errors} />;
  };
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
          {renderGlobal()}
          {renderCountries()}
        </Switch>
      </main>
    </Router>
  );
};

export default Main;
