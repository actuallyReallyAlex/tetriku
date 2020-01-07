import React from "react";

const ThirtyFour = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-34"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__8" />
      <div className="piece__single piece__single__12" />
    </div>
  );
};

export default ThirtyFour;
