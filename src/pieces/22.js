import React from "react";

const TwentyTwo = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-22"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__12" />
      <div className="piece__single piece__single__11" />
    </div>
  );
};

export default TwentyTwo;
