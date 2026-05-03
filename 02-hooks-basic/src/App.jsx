import { useState } from "react";

import "./App.css";

function Counter({
	counter,
	incrementCounter,
	decrementCounter,
	resetCounter,
}) {
	return (
		<>
			<h1>Counter: {counter}</h1>
			<button onClick={incrementCounter}>+</button>
			<button onClick={decrementCounter}>-</button>
			<button onClick={resetCounter}>Reset</button>
		</>
	);
}

function App() {
	const [counter, setCounter] = useState(0);

	function incrementCounter() {
		setCounter(counter + 1);
	}

	function decrementCounter() {
		setCounter(counter - 1);
	}

	function resetCounter() {
		setCounter(0);
	}
	return (
		<>
			<Counter
				counter={counter}
				incrementCounter={incrementCounter}
				decrementCounter={decrementCounter}
				resetCounter={resetCounter}
			/>
		</>
	);
}

export default App;
