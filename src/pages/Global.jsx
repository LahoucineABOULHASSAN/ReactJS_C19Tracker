import Result from "../components/Result";

const Global = () => {
  return (
    <section className="flex flex-column">
      <h2>Global Results</h2>
      <p>{new Date().toDateString()}</p>
      <div className="boxs flex flex-row">
        <Result result={{ title: "Cases", numbers: 33333, global: 1000000 }} />
        <Result result={{ title: "Deaths", numbers: 22222, global: 300000 }} />
      </div>
    </section>
  );
};

export default Global;
