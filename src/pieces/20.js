import React from "react";

const Twenty = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-20"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__12" />
    </div>
  );
};

export default Twenty;
