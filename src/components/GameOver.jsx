import { useContext } from "react"
import { VariablesContext } from "../Context/VariablesContext"
import './GameOver.css'




const GameOver = ()=>{
    const {score}=useContext(VariablesContext)
    return <div className="gameover">       
        <h2>Juego Terminado</h2>
        <h2>ACIERTOS: {score}</h2>
    </div>
} 

export default GameOver