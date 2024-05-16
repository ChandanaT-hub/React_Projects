import { useState } from "react";

const GamePlay = () => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [rollsLeft, setRollsLeft] = useState(20);
  const [winner, setWinner] = useState(null);

  const handleClick = (value) => {
    const rolledNumber = parseInt(value);
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score + rolledNumber);
    } else {
      setPlayer2Score(player2Score + rolledNumber);
    }
    setRollsLeft(rollsLeft - 1);
    if (rollsLeft === 1) {
      declareWinner();
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const declareWinner = () => {
    if (player1Score > player2Score) {
      setWinner("Player 1");
    } else if (player2Score > player1Score) {
      setWinner("Player 2");
    } else {
      setWinner("It's a tie!");
    }
  };

  const resetGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentPlayer(1);
    setRollsLeft(20);
    setWinner(null);
  };

  return (
    <>
    
      <div className="heading">
        <h1>Dice Game</h1>
        <h2>{rollsLeft} rolls left</h2>
        {winner ? (
          <h3>{winner} wins!</h3>
        ) : (
          <h3>Current Turn: Player {currentPlayer}</h3>
        )}
        <div className="buttons">
          <button onClick={() => handleClick(1)} className="no" disabled={rollsLeft === 0 || winner}>1</button>
          <button onClick={() => handleClick(2)} className="no" disabled={rollsLeft === 0 || winner}>2</button>
          <button onClick={() => handleClick(3)} className="no" disabled={rollsLeft === 0 || winner}>3</button>
          <button onClick={() => handleClick(4)} className="no" disabled={rollsLeft === 0 || winner}>4</button>
          <button onClick={() => handleClick(5)} className="no" disabled={rollsLeft === 0 || winner}>5</button>
          <button onClick={() => handleClick(6)} className="no" disabled={rollsLeft === 0 || winner}>6</button> 
        </div>
        <div className="scores">
          <p>Player 1  </p>
          <p>Score: {player1Score}</p>
          <p>Player 2 </p>
          <p>Score: {player2Score}</p>
        </div>
        <div className="buttons">
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    </>
  );
};

export default GamePlay;
