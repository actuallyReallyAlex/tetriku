import React from "react";

const Four = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-4"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

export default Four;
