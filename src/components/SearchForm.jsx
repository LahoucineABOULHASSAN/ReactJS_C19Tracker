const SearchForm = ({ handleFilter, countries }) => {
  const options = (country, id) => {
    return <option value={country} key={id} />;
  };
  return (
    <form className="search" onSubmit={(event) => event.preventDefault()}>
      <input
        list="datalistOptions"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => handleFilter(event.target.value)}
      />
      <datalist id="datalistOptions">
        {countries
          .slice(0, 4)
          .map((country) => options(country.Country, country.ID))}
      </datalist>
    </form>
  );
};

export default SearchForm;
