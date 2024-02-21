import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Gamrboard";

function App() {
  
  const [activePlayer,setActivePlayer]=useState('X');

  function handleSelectSquare(){

    setActivePlayer((curActivePlayer)=>curActivePlayer=== 'X'? 'O':'X');

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">   
        <Player initialName ="Player 1" symbol="O" isActive={activePlayer === 'X'}/>
        <Player initialName ="Player 2" symbol="X" isActive={activePlayer==='O'}/>        
        </ol>
        <GameBoard onselectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>

      </div>


      Log
    </main>

  )
}

export default App
