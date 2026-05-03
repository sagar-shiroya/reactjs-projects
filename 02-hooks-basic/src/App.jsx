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

function DarkLightModeToggle({ mode, setMode }) {
	function toggleMode() {
		const button = document.getElementById("toggleMode");
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
			document.body.style.color = "white";
			button.textContent = "Switch to Light Mode";
			button.style.color = "white";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
			button.textContent = "Switch to Dark Mode";
			button.style.color = "black";
		}
	}
	return (
		<>
			<button id="toggleMode" onClick={toggleMode}>
				Switch to Light Mode
			</button>
		</>
	);
}

function LikeButton({ like, setLike }) {
	function toggleLike() {
		const likeButton = document.getElementById("likeButton");
		if (!like) {
			likeButton.textContent = "❤️";
			likeButton.style.backgroundColor = "red";
		} else {
			likeButton.textContent = "🤍";
			likeButton.style.backgroundColor = "black";
		}
		setLike(!like);
	}
	return (
		<>
			<h1>Like Button</h1>
			<button id="likeButton" onClick={toggleLike}>
				🤍
			</button>
		</>
	);
}

function App() {
	const [counter, setCounter] = useState(0);
	const [like, setLike] = useState(false);
	const [mode, setMode] = useState("dark");

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

			<hr />

			<LikeButton like={like} setLike={setLike} />

			<hr />
			<DarkLightModeToggle mode={mode} setMode={setMode} />
		</>
	);
}

export default App;
