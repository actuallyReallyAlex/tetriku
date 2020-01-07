import React from "react";

const Nineteen = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-19"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__11" />
    </div>
  );
};

export default Nineteen;
