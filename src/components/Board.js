import React, { useEffect, useState } from "react";

const Board = () => {
  const [puzzle, setPuzzle] = useState([]);

  useEffect(() => {
    const squares = Array.from(Array(81).keys()).map(i => ({ id: i }));
    setPuzzle(squares);
  }, []);

  const borderRightSquares = [
    2,
    5,
    11,
    14,
    20,
    23,
    29,
    32,
    38,
    41,
    47,
    50,
    56,
    59,
    65,
    68,
    74,
    77
  ];

  const borderBottomSquares = [
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53
  ];

  const borderRightThinSquares = [
    0,
    1,
    3,
    4,
    6,
    7,
    9,
    10,
    12,
    13,
    15,
    16,
    18,
    19,
    21,
    22,
    24,
    25,
    27,
    28,
    30,
    31,
    33,
    34,
    36,
    37,
    39,
    40,
    42,
    43,
    45,
    46,
    48,
    49,
    51,
    52,
    54,
    55,
    57,
    58,
    60,
    61,
    63,
    64,
    66,
    67,
    69,
    70,
    72,
    73,
    75,
    76,
    78,
    79
  ];

  const borderBottomThinSquares = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71
  ];

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
