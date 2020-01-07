import React from "react";

const Ten = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-10"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single piece__single__7" />
    </div>
  );
};

export default Ten;
