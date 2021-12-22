import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import NavBar from "./NavBar";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<NavBar />
			<HogList hogs={hogs}/>
		</div>
	);
}

export default App;
