import React from "react";

const Six = ({ stageArea }) => {
  return (
    <div
      className="piece-container piece-container__column"
      id="piece-6"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

export default Six;
