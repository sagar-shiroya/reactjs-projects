import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [meal, setMeal] = useState(null);
	const [mealImage, setMealImage] = useState(null);
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
			setMeal(data.data.strMeal);
			setMealImage(data.data.strMealThumb);
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
		<div className="light">
			<h1>Lunch Break Buddy</h1>
			<div className="actionButtons">
				<button className="generateCombo" onClick={generateNewCombo}>
					Generate a New Combo
				</button>
				<button className="generateCombo" onClick={setRandomMeal}>
					Generate Meal
				</button>
				<button className="generateCombo" onClick={setRandomJoke}>
					Generate Joke
				</button>
				<button className="material-icons" onClick={setRandomQuote}>
					Generate Quote
				</button>
			</div>

			<section>
				<article className="card">
					<h1>Meal</h1>
					<p>{meal}</p>
					<img className="thumbnail" src={mealImage} />
				</article>
				<article className="card">
					<h1>Joke</h1>
					<p>{joke}</p>
				</article>
				<article className="card">
					<h1>Quote</h1>
					<p>{quote}</p>
				</article>
			</section>
		</div>
	);
}

export default App;
