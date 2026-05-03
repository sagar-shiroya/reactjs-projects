import { useState } from "react";

import "./App.css";

function App() {
	const [counter, setcounter] = useState(0);

	function incrementCounter() {
		setcounter(counter + 1);
	}

	function decrementCounter() {
		setcounter(counter - 1);
	}

	function resetCounter() {
		setcounter(0);
	}

	return (
		<>
			<h1>Counter: {counter}</h1>
			<button onClick={incrementCounter}>+</button>
			<button onClick={decrementCounter}>-</button>
			<button onClick={resetCounter}>Reset</button>
		</>
	);
}

export default App;
