import "./App.css";
import { useEffect, useState } from "react";
import MealCard from "./components/MealCard";

function App() {
	const [meal, setMeal] = useState(null);
	const [joke, setJoke] = useState(null);
	const [quote, setQuote] = useState(null);

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

	useEffect(() => {
		generateNewCombo();
	}, []);

	return (
		<div id="parent" className="light">
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
			</div>

			<section>
				<article className="card jokeCard">
					<div className="jokeHeader">
						<h1>Joke</h1>
						<span>Quick laugh</span>
					</div>
					<div className="jokeBody">
						<span className="jokeIcon">!</span>
						<p className="jokeText">{joke || "Loading joke..."}</p>
					</div>
				</article>
				<article className="card quoteCard">
					<div className="quoteHeader">
						<h1>Quote</h1>
						<span>Daily spark</span>
					</div>
					<div className="quoteBody">
						<span className="quoteMark">“</span>
						<blockquote className="quoteText">
							{quote || "Loading quote..."}
						</blockquote>
					</div>
				</article>
				<MealCard meal={meal} />
			</section>
		</div>
	);
}

export default App;
