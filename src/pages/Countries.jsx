import Country from "./countries/Country";

const Countries = ({ countries }) => {
  return (
    <section className="flex flex-column">
      <h2>Search to filter countries</h2>
      <div className="boxs flex flex-row">
        {countries.map((country) => {
          return <Country key={country.id} country={country} />;
        })}
      </div>
    </section>
  );
};

export default Countries;
