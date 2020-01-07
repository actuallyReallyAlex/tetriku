import React from "react";

const Nine = ({ stageArea }) => {
  return (
    <div
      className="piece-container piece-container__column"
      id="piece-9"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

export default Nine;
