import { useState } from "react";

const initialBoard = new Array(9).fill(null);
const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(false);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (curr) => {
    for (let [a, b, c] of winningPatterns) {
      console.log("a", a, b, c);
      if (curr[a] && curr[a] === curr[b] && curr[a] === curr[c]) {
        return curr[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins`;
    if (!board.includes(null)) return "Its a draw";
    return `Player ${isXNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard);
  };

  return {
    board,
    setBoard,
    isXNext,
    setIsXNext,
    winningPatterns,
    calculateWinner,
    handleClick,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
