import React from "react";
const Error = ({ error }) => {
  return (
    <div id="error">
      <h1>Error :(</h1>
      <p className="error">{error}</p>
    </div>
  );
};

export default Error;
