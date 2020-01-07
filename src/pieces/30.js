import React from "react";

const Thirty = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-30"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__12" />
    </div>
  );
};

export default Thirty;
