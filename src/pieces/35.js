import React from "react";

const ThirtyFive = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-35"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__7" />
    </div>
  );
};

export default ThirtyFive;
