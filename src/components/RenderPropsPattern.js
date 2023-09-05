import React from "react";

const RenderPropsPattern = ({ render }) => {
  return (
    <div>
      <h1>Wellcone {render(true)}</h1>
    </div>
  );
};

export default RenderPropsPattern;
