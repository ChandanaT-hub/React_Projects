// import Pagination from './components/P1';
import './App.css';
import Counter from './components/Counter/Counter';
import { useState } from 'react';
// 


//  simport PaginationTest from './components/P1/PaginationTest';
import Todo from './components/ToDo/Todo';
import Stopwatch from './components/Stopwatch/Stopwatch';
import GamePlay from './components/DiceGame/GamePlay';
import Startgame from './components/DiceGame/Startgame';
import Weather from './components/Weather/Weather';
import Calculator from './components/Calculator/Calculator';


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted ((prev)=>!prev)
  };
  return (
    <>

   <Todo/>
   <Counter/>
   <Stopwatch/>
   {isGameStarted ?<GamePlay/>:<Startgame toggle={toggleGamePlay}/>}
  <Weather/>
  <Calculator/>
 
    </>
  );
}

export default App;
