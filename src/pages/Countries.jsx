import { useContext } from "react";
import { useStyles } from "../hooks/useStyles";
import { GlobalContext } from "../contexts/GlobalContext";
import SearchForm from "../components/SearchForm";
import Country from "./countries/Country";
import { Container, Typography } from "@material-ui/core";

const Countries = ({ countries }) => {
  const { search, setSearch } = useContext(GlobalContext);
  const classes = useStyles();

  const handleFilter = (elem) => {
    const searchItem = elem.toLowerCase();
    setSearch(searchItem);
  };

  return (
    <Container>
      <Typography
        className={classes.spacing + " heading"}
        variant="h5"
        component="h2"
        color="primary"
        align="center"
      >
        <strong>Search to filter results</strong>
      </Typography>
      <SearchForm
        countries={countries.filter((country) => {
          return country.Country.toLowerCase().includes(search);
        })}
        handleFilter={handleFilter}
      />
      <div className={classes.countries}>
        {countries
          .filter((country) => {
            return country.Country.toLowerCase().includes(search);
          })
          .map((country) => (
            <Country key={country.ID} country={country} />
          ))}
      </div>
    </Container>
  );
};

export default Countries;
