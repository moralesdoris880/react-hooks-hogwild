import React,{useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import NavBar from "./NavBar";

import hogs from "../porkers_data";

function App() {
	const [newhogs,setNewhogs]= useState(hogs)

	function handleGreasedHogs(GreasedHog){
		const updatedHogs = hogs.filter((hog)=>hog.greased !== GreasedHog);
		setNewhogs(updatedHogs)
	}
	return (
		<div className="App">
			<Nav />
			<NavBar onGreasedHog={handleGreasedHogs}/>
			<HogList hogs={newhogs}/>
		</div>
	);
}

export default App;
