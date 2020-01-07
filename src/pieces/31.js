import React from "react";

const ThirtyOne = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-31"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__8" />
      <div className="piece__single piece__single__13" />
    </div>
  );
};

export default ThirtyOne;
