import { useContext } from "react"
import { VariablesContext } from "../Context/VariablesContext"

const Tablero = ()=>{
    
    let {target}=useContext(VariablesContext)
    let {score, setScore}=useContext(VariablesContext)
    let {timeLeft}=useContext(VariablesContext)
    console.log(target,'desde el tablero')
    
    const addScore=()=> {
      if(timeLeft > 0){
       setScore(score = score +1)
      }
    }
    
    return <div>
        <div className="b-grid">
    {target === 1 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 2 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 3 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 4 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 5 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 6 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 7 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 8 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    {target === 9 ? <div  className='b-square b-mole' onClick={addScore}></div>:
    <div  className='b-square'></div>}
    
    
   
  </div>
    </div>
        
    
}
export default Tablero