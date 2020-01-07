import React from "react";

const Two = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-2"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

export default Two;
