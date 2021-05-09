import Result from "../components/Result";
const Global = ({ global }) => {
  return (
    <section className="flex flex-column">
      <h2>World Covid 19 today results</h2>
      <div className="boxs flex flex-row">
        <Result
          result={{
            title: "Recovers",
            numbers: global.NewRecovered,
            global: global.TotalRecovered,
          }}
        />
        <Result
          result={{
            title: "Cases",
            numbers: global.NewConfirmed,
            global: global.TotalConfirmed,
          }}
        />
        <Result
          result={{
            title: "Deaths",
            numbers: global.NewDeaths,
            global: global.TotalDeaths,
          }}
        />
      </div>
    </section>
  );
};

export default Global;
