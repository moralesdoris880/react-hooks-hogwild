import React,{useState} from "react";

function Hog({hog}){
    const[showDetails,setShowDetails]= useState(false)
    return (
        <div className="ui eight wide column" onClick={()=>setShowDetails(!showDetails)}>
            <h1>{hog.name}</h1>
            <img src={hog.image} alt={hog.name}></img>
            {showDetails? <div>
                <p>{hog.specialty}</p>
                <p>{hog.weight}</p>
                <p>{hog.greased}</p>
                <p>{hog.highest}</p>
            </div>:null
            }
        </div>
    )
}

export default Hog