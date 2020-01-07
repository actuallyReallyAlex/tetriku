import React from "react";

const Fifteen = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-15"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__21" />
      <div className="piece__single piece__single__17" />
      <div className="piece__single piece__single__13" />
    </div>
  );
};

export default Fifteen;
