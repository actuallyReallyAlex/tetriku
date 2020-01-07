import React from "react";

const ThirtyThree = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-32"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__8" />
    </div>
  );
};

export default ThirtyThree;
