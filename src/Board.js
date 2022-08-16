import "./Board.css";
import { useState } from "react";

const winningCombinations = [
  ["00", "01", "02"],
  ["10", "11", "12"],
  ["20", "21", "22"],
  ["00", "10", "20"],
  ["01", "11", "21"],
  ["02", "12", "22"],
  ["00", "11", "22"],
  ["02", "11", "20"],
];

const Board = () => {
  const [winner, setWinner] = useState(null);
  let [isFirstPlayer, setIsFirstPlayer] = useState(true);

  const [XO, setXO] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  // const XO =  [
  //   ["X", "O", ""],
  //   ["O", "", ""],
  //   ["", "O", ""],
  // ];

  const whoWon = () => {
    let winner = null;
    winningCombinations.forEach((wc) => {
      const combination = [];

      wc.forEach((index) => {
        const i = index[0];
        const j = index[1];
        combination.push(XO[i][j]);
      });

      if (
        combination[0] !== "" &&
        combination[0] === combination[1] &&
        combination[1] === combination[2]
      ) {
        winner = combination[0];
      }
    });
    return winner;
  };

  const makeMove = (i, j) => {
    if (!winner) {
      if (XO[i][j] === "") {
        if (isFirstPlayer) {
          const xoCopy = [...XO];
          xoCopy[i][j] = "X";
          setXO(xoCopy);
        } else {
          const xoCopy = [...XO];
          xoCopy[i][j] = "O";
          setXO(xoCopy);
        }
        setIsFirstPlayer(!isFirstPlayer);

        const playerWon = whoWon();
        setWinner(playerWon);
      }
    }
  };

  return (
    <div>
      {winner ? <h1>{winner} is a winner</h1> : ""}
      {XO.map((element, i) => {
        return (
          <div key={element + i.toString()} className="row">
            {element.map((square, j) => {
              return (
                <div
                  key={square + j.toString()}
                  className="square"
                  onClick={() => makeMove(i, j)}
                >
                  {square}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>

    // <div>
    //   <div className="row">
    //     <div className="square">X</div>
    //     <div className="square">{nekaVariabla}</div>
    //     <div className="square">X</div>
    //   </div>
    //   <div className="row">
    //     <div className="square">O</div>
    //     <div className="square">X</div>
    //     <div className="square">O</div>
    //   </div>
    //   <div className="row">
    //     <div className="square"></div>
    //     <div className="square">O</div>
    //     <div className="square"></div>
    //   </div>
    // </div>
  );
};

export default Board;
