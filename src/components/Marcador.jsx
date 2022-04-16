import { useContext, useState } from "react"
import { VariablesContext } from "../Context/VariablesContext"
import GameOver from "./GameOver"

const Marcador = ()=>{
  let {timeLeft, setTimeLeft}=useContext(VariablesContext)
  let {score, setScore}= useContext(VariablesContext)
  let {target, setTarget}= useContext(VariablesContext)
  let [gameStatus, setGameStatus]=useState('Comenzar Juego')
  const startGame= ()=>{
    setTimeLeft(timeLeft = 30)  
    setScore(score = 0)  
    const getTarget= setInterval(() => {       
       let aleatorio = Math.floor(Math.random()*(9-1+1)+1)
       setTarget(target = aleatorio)
       console.log('el aleatorio target es..', target)
       if (timeLeft <= 0 ){clearInterval(getTarget)}
    }, 500);

    const intervalo = setInterval(() => {
      if (timeLeft>=0){
        setTimeLeft(timeLeft--)}else{
          setGameStatus('Jugar otra vez?')
          console.log('el juago ha terminado')
          clearInterval(intervalo)
        }
    }, 1000);
  }

    return <div> 
    <div className="marcador">
     
    
    <div>
      <div className ="puntos">
      <h2>Your score:</h2>
      <h2 data-function="score">{score}</h2>
    </div>
    <div className="time">
      <h2>Seconds left:</h2>
      <h2 data-function="time-left">{timeLeft}</h2>
    </div>
    </div>
    <div className = "button">
      <button onClick={startGame} data-function="start">{gameStatus}</button>
      <h2>Whack a mole!</h2>
      <h3>Atrapa al 'bicho'</h3>
    </div>
    
     
    
  </div>
  {timeLeft<= 0 && <GameOver/>} 
        
    </div>
}
export default Marcador