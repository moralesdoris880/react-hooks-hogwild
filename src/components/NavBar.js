import React,{useState} from "react";

function NavBar({onGreasedHog, onSortName, onSortWeight}){
    const [greased,setGreased]= useState(false)

    function showGreasedHogs(){
        setGreased(!greased)
        return onGreasedHog(greased)
    }

    function sortHogs(e){
        if(e.target.value === "Name"){
            return onSortName()
        }
        else{
            return onSortWeight()
        }
    }
    return (
        <div>
            <button onClick={showGreasedHogs}>{greased?"Show Un-Greased":"Show Greased"}</button>
            <select onChange={sortHogs}>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </div>
    )
}

export default NavBar