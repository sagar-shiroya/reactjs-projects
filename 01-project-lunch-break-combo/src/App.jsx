import "./App.css";
import { useEffect, useState } from "react";
import MealCard from "./components/MealCard";

function App() {
	const [meal, setMeal] = useState(null);
	const [joke, setJoke] = useState(null);
	const [quote, setQuote] = useState(null);
	const [mode, setMode] = useState("light");

	async function setRandomMeal() {
		const url = "https://api.freeapi.app/api/v1/public/meals/meal/random";
		const options = {
			method: "GET",
			headers: { accept: "application/json" },
		};

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			console.log(data);
			setMeal(data.data);
		} catch (error) {
			console.error(error);
		}
	}

	async function setRandomQuote() {
		const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
		const options = {
			method: "GET",
			headers: { accept: "application/json" },
		};

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			console.log(data);
			setQuote(data.data.content);
		} catch (error) {
			console.error(error);
		}
	}

	async function setRandomJoke() {
		const url =
			"https://api.freeapi.app/api/v1/public/randomjokes/joke/random";
		const options = {
			method: "GET",
			headers: { accept: "application/json" },
		};

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			console.log(data);
			setJoke(data.data.content);
		} catch (error) {
			console.error(error);
		}
	}

	function generateNewCombo() {
		setRandomMeal();
		setRandomJoke();
		setRandomQuote();
	}

	function toggleDarkLightMode() {
		setMode(mode === "light" ? "dark" : "light");
	}

	useEffect(() => {
		generateNewCombo();
	}, []);

	return (
		<div id="parent" className={mode}>
			<h1>Lunch Break Buddy</h1>
			<div className="actionButtons">
				<button className="generateCombo" onClick={generateNewCombo}>
					Generate a New Combo
				</button>
				<button className="generateCombo" onClick={setRandomJoke}>
					Generate Joke
				</button>
				<button className="generateCombo" onClick={setRandomQuote}>
					Generate Quote
				</button>
				<button className="generateCombo" onClick={setRandomMeal}>
					Generate Meal
				</button>
				<button className="generateCombo" onClick={toggleDarkLightMode}>
					Toggle Dark/Light Mode
				</button>
			</div>

			<section>
				<article className="card">
					<h1>Joke</h1>
					<p>{joke}</p>
				</article>
				<article className="card">
					<h1>Quote</h1>
					<p>{quote}</p>
				</article>
				<MealCard meal={meal} />
			</section>
		</div>
	);
}

export default App;
