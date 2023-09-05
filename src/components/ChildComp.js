import React from "react";

const ChildComp = ({ firstName, age }) => {
  return (
    <div>
      <h1>{firstName.toUpperCase()}</h1>
      <p>{age}</p>
    </div>
  );
};

export default ChildComp;
