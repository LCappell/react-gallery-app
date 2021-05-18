import React from "react";

const Featured = ({ match }) => {
  let item = match.params.name;
  return (
    <div>
      <p>{item}</p>
    </div>
  );
};

export default Featured;
