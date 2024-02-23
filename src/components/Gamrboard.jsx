export default function GameBoard({ onselectSquare, board }) {
  //const [gameboard, setGameBoard] = useState(initialGameboard);

  //  function handleSelectSqure(rowIndex, colIndex) {
  //  setGameBoard((prevGameBoard) => {
  //   const updatedBoard = [...prevGameBoard.map(innerArrAY=>[...innerArrAY])];
  //  updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  // return updatedBoard;
  //});

  // onselectSquare();
  //}

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onselectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
