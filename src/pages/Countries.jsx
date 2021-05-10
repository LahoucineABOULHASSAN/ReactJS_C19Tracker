import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import SearchForm from "../components/SearchForm";
import Country from "./countries/Country";

const Countries = ({ countries }) => {
  const { search, setSearch } = useContext(GlobalContext);
  const handleFilter = (elem) => {
    const searchItem = elem.toLowerCase();
    setSearch(searchItem);
  };
  return (
    <section id="countries" className="flex flex-column">
      <h2>Search to filter countries {search}</h2>
      <SearchForm
        countries={countries.filter((country) => {
          return country.Country.toLowerCase().includes(search);
        })}
        handleFilter={handleFilter}
      />
      <div className="countries grid grid-3">
        {countries
          .filter((country) => {
            return country.Country.toLowerCase().includes(search);
          })
          .map((country) => <Country key={country.ID} country={country} />)
          .slice(0, 9)}
      </div>
    </section>
  );
};

export default Countries;
