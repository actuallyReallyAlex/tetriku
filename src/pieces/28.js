import React from "react";

const TwentyEight = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-28"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__8" />
      <div className="piece__single piece__single__13" />
    </div>
  );
};

export default TwentyEight;
