import React from "react";

const Five = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-5"
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

export default Five;
