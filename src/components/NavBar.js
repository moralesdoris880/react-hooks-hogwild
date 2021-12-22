import React,{useState} from "react";

function NavBar({onGreasedHog}){
    const [greased,setGreased]= useState(false)

    function showGreasedHogs(){
        setGreased(!greased)
        return onGreasedHog(greased)
    }
    return (
        <div>
            <button onClick={showGreasedHogs}>{greased?"Show Un-Greased":"Show Greased"}</button>
        </div>
    )
}

export default NavBar