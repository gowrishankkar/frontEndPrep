import "./ticTacToe.css";

import useTicTacToe from "./useTicTacToe";

const TicTacToe = () => {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          {" "}
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((_, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={_ !== null}
            >
              {_}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
