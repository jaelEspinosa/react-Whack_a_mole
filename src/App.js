
import './App.css';
import Tablero from './components/Tablero';
import Marcador from './components/Marcador';
import { VariablesContext } from './Context/VariablesContext';
import { useState } from 'react';
import GameOver from './components/GameOver';

function App() {
  let [timeLeft, setTimeLeft]= useState(30)
  let [score, setScore]=useState(0)
  let [target, setTarget]=useState(0)

  
  return (
    <div className="App">
    <VariablesContext.Provider value={{timeLeft,setTimeLeft,score,setScore,target,setTarget}}>
      
      
      <Marcador/>
      <Tablero/>
      
      </VariablesContext.Provider>
    </div>
  );
}

export default App;
