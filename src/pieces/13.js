import React from "react";
import PropTypes from "prop-types";

const Thirteen = ({
  pieceNumber,
  selectedPiece,
  setSelectedPiece,
  stageArea
}) => {
  const classList = ["piece-container"];
  if (selectedPiece === pieceNumber)
    classList.push("piece-container__selected");
  return (
    <div
      className={classList.join(" ")}
      id="piece-13"
      onClick={() => {
        setSelectedPiece(pieceNumber);
      }}
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__13" />
      <div className="piece__single piece__single__19" />
      <div className="piece__single piece__single__25" />
    </div>
  );
};

Thirteen.propTypes = {
  pieceNumber: PropTypes.number.isRequired,
  selectedPiece: PropTypes.number,
  setSelectedPiece: PropTypes.func.isRequired,
  stageArea: PropTypes.string
};

export default Thirteen;
