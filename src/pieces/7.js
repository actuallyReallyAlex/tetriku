import React from "react";

const Seven = ({ stageArea }) => {
  return (
    <div
      className="piece-container piece-container__column"
      id="piece-7"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

export default Seven;
