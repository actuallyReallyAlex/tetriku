import React from "react";

const Eight = ({ stageArea }) => {
  return (
    <div
      className="piece-container piece-container__column"
      id="piece-8"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

export default Eight;
