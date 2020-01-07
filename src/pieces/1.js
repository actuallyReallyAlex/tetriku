import React from "react";

const One = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-1"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
    </div>
  );
};

export default One;
