import React, { useEffect, useState } from "react";
import {
  borderRightSquares,
  borderBottomSquares,
  borderRightThinSquares,
  borderBottomThinSquares
} from "../constants";

const Board = () => {
  const [puzzle, setPuzzle] = useState([]);

  useEffect(() => {
    const squares = Array.from(Array(81).keys()).map(i => ({ id: i }));
    setPuzzle(squares);
  }, []);

  return (
    <div id="board">
      {puzzle.map(({ id }) => {
        const classNameArr = ["square"];

        const isBorderRightSquare = borderRightSquares.includes(id);
        const isBorderBottomSquare = borderBottomSquares.includes(id);
        const isBorderRightThinSquare = borderRightThinSquares.includes(id);
        const isBorderBottomThinSquare = borderBottomThinSquares.includes(id);

        if (isBorderRightSquare) classNameArr.push("square__border-right");
        if (isBorderBottomSquare) classNameArr.push("square__border-bottom");
        if (isBorderRightThinSquare)
          classNameArr.push("square__border-right__thin");
        if (isBorderBottomThinSquare)
          classNameArr.push("square__border-bottom__thin");

        return (
          <div className={classNameArr.join(" ")} key={id}>
            <span>{id}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
