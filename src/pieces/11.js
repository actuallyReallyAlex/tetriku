import React from "react";

const Eleven = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-11"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__13" />
    </div>
  );
};

export default Eleven;
