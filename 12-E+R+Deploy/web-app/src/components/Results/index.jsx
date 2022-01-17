import React from "react";

const Results = ({ forecast, location }) => {
  return (
    <div className="results">
      <h1>Hi!</h1>
      <h4>{forecast}</h4>
      <h4>{location}</h4>
    </div>
  );
};

export default Results;
