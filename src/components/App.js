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

	function handleSortName(){
		const updatedHogs = hogs.sort((hoga,hogb)=>{
			if (hoga.name < hogb.name) {
				return -1;
			  }
			  if (hoga.name > hogb.name) {
				return 1;
			  }
			  return 0;
			}
		 )
		setNewhogs(updatedHogs)
	}

	function handleSortWeight(){
		const updatedHogs = hogs.sort((hoga,hogb)=>{
			if (hoga.weight < hogb.weight) {
				return -1;
			  }
			  if (hoga.weight > hogb.weight) {
				return 1;
			  }
			  return 0;
			}
		 )
		 setNewhogs(updatedHogs)
	}
	return (
		<div className="App">
			<Nav />
			<NavBar onGreasedHog={handleGreasedHogs} onSortName={handleSortName} onSortWeight={handleSortWeight}/>
			<HogList hogs={newhogs}/>
		</div>
	);
}

export default App;
