const Country = ({ country }) => {
  return (
    <table className="country">
      <thead>
        <h3> {country.Country} </h3>
      </thead>
      <tbody>
        <tr className="flex flex-row">
          <td className="flex">Recovers</td>
          <td className="flex">Cases</td>
          <td className="flex">Deaths</td>
        </tr>
        <tr className="flex flex-row">
          <td className="flex">
            <span>New:</span> <span>{country.NewConfirmed}</span>{" "}
          </td>
          <td className="flex">
            <span>New:</span> <span>{country.NewRecovered}</span>{" "}
          </td>
          <td className="flex">
            <span>New:</span> <span>{country.NewDeaths}</span>{" "}
          </td>
        </tr>
        <tr className="flex flex-row">
          <td className="flex">
            <span>Global:</span> <span>{country.TotalConfirmed}</span>{" "}
          </td>
          <td className="flex">
            <span>Global:</span> <span>{country.TotalRecovered}</span>{" "}
          </td>
          <td className="flex">
            <span>Global:</span> <span>{country.TotalDeaths}</span>{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Country;
