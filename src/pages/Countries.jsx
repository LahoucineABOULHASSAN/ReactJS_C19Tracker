import Country from "./countries/Country";

const Countries = ({ countries }) => {
  return (
    <section className="flex flex-column">
      <h2>Search to filter countries</h2>
      <div className="countries grid grid-3">
        {countries.map((country) => {
          return <Country key={country.ID} country={country} />;
        })}
      </div>
    </section>
  );
};

export default Countries;
