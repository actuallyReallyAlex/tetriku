import React from "react";

const Three = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-3"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

export default Three;
