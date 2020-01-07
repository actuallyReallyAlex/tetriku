import React from "react";

const Eighteen = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-18"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__7" />
    </div>
  );
};

export default Eighteen;
