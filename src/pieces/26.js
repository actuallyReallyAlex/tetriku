import React from "react";

const TwentySix = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-26"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__8" />
      <div className="piece__single piece__single__13" />
      <div className="piece__single piece__single__12" />
      <div className="piece__single piece__single__11" />
    </div>
  );
};

export default TwentySix;
