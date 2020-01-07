import React from "react";

const TwentyThree = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-23"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__12" />
    </div>
  );
};

export default TwentyThree;
