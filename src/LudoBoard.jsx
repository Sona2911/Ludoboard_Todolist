import React, { useState } from 'react'

const LudoBoard = () => {
  let[moves , setMoves] = useState({red:0,green:0,yellow:0,blue:0});

    let[isLiked,setIsLiked]=useState(false);
    const handleIsLiked=()=>{
        console.log('handleIsLiked')
        setIsLiked(!isLiked);
    
    }

    const handleBlueClick=()=>{
        console.log('handleBlueClick called')
        if(moves.blue===10)
            alert('You are done with 10 moves');
       else{const uo=moves.blue+=1
        setMoves({...moves,uo})  
        //  spread opreator} 
    } 
}
    const handleRedClick=()=>{
        console.log('handleBlueClick called')
        if(moves.red===10)
            alert('You are done with 10 moves');
       else{const uo=moves.red+=1
        setMoves({...moves,uo})  
        //  spread opreator} 
    } 
    }
    const handleGreenClick=()=>{
        console.log('handleBlueClick called')
        if(moves.green===10)
            alert('You are done with 10 moves');
       else{const uo=moves.green+=1
        setMoves({...moves,uo})  
        //  spread opreator} 
    } 
    }
    const handleYellowClick=()=>{
        console.log('handleBlueClick called')
        if(moves.yellow===10)
            alert('You are done with 10 moves');
       else{const uo=moves.yellow+=1
        setMoves({...moves,uo})  
        //  spread opreator} 
    } 
    }
    
  return (
    <div  className='text-center'>
      <h2>Welcome to LudoBoard 
      <span onClick={handleIsLiked}className='mx-3' style={{color:'red' }}>   {isLiked===true ? (<i className="fa-solid fa-heart"></i> ):( <i  className="fa-regular fa-heart"></i>)}
      </span>
      </h2>
      <h6>Blue:{moves.blue}  </h6>
      <button   className="btn btn-primary"  onClick={handleBlueClick} >+1</button>
      <h6>Red:{moves.red}</h6>
      <button className="btn btn-danger" onClick={handleRedClick}>+1</button>
      <h6>Green:{moves.green}</h6>
      <button className="btn btn-success" onClick={handleGreenClick}>+1</button>
      <h6>Yellow:{moves.yellow}</h6>
      <button className="btn btn-warning" onClick={handleYellowClick}>+1</button>
    </div>
  )
}

export default LudoBoard
