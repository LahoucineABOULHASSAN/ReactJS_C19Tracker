const Country = ({ country }) => {
  return (
    <div className="country flex flex-column">
      <h3>{country.Country}</h3>
      <div className="grid grid-3">
        <div className="col">
          <h3>Recovers</h3>
          <p>{country.NewRecovered}</p>
          <p>{country.TotalRecovered}</p>
        </div>
        <div className="col">
          <h3>Cases</h3>
          <p>{country.NewConfirmed}</p>
          <p>{country.TotalConfirmed}</p>
        </div>
        <div className="col">
          <h3>Deaths</h3>
          <p>{country.NewDeaths}</p>
          <p>{country.TotalDeaths}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
