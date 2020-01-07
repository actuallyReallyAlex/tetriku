import React from "react";

const Twelve = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-12"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__13" />
      <div className="piece__single piece__single__19" />
    </div>
  );
};

export default Twelve;
