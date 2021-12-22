import React from "react";
import Hog from "./Hog";

function HogList({hogs}){
    return (
        <div className="ui grid container">
            {
                hogs.map((hog)=>{
                   return <Hog hog={hog} key={hog.name}/>
                })
            }
        </div>
    )
}

export default HogList