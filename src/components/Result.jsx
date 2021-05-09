const Result = ({ result }) => {
  return (
    <div className="box flex flex-column">
      <h3>{result.title}</h3>
      <div>
        <span>new:</span> {result.numbers}
      </div>
      <div>
        <span>total:</span> {result.global}
      </div>
    </div>
  );
};

export default Result;
