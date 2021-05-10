const Country = ({ country }) => {
  return (
    <div className="country flex flex-column">
      <h3>{country.Country}</h3>
      <div className="grid grid-4">
        <div className="col hide">
          <h3> ## </h3>
          <p>New:</p>
          <p>Global:</p>
        </div>
        <div className="col">
          <h3>Recovers</h3>
          <p>
            <span className="unhide">New: </span>
            {country.NewRecovered.toLocaleString()}
          </p>
          <p>
            <span className="unhide">Global: </span>
            {country.TotalRecovered.toLocaleString()}
          </p>
        </div>
        <div className="col">
          <h3>Cases</h3>
          <p>
            <span className="unhide">New: </span>
            {country.NewConfirmed.toLocaleString()}
          </p>
          <p>
            <span className="unhide">Global: </span>
            {country.TotalConfirmed.toLocaleString()}
          </p>
        </div>
        <div className="col">
          <h3>Deaths</h3>
          <p>
            <span className="unhide">New: </span>
            {country.NewDeaths.toLocaleString()}
          </p>
          <p>
            <span className="unhide">Global: </span>
            {country.TotalDeaths.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
