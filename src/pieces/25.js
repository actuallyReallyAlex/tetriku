import React from "react";

const TwentyFive = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-25"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__11" />
    </div>
  );
};

export default TwentyFive;
