import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [cat, setCat] = useState({});

	useEffect(() => {
		async function getRandomCat() {
			const url = "https://api.freeapi.app/api/v1/public/cats/cat/random";
			const options = {
				method: "GET",
				headers: { accept: "application/json" },
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();
				console.log(result.data);
				setCat(result.data);
			} catch (error) {
				console.error(error);
			}
		}

		getRandomCat();
	}, []);

	return (
		<>
			{cat && Object.keys(cat).length > 0 ? (
				<div className="parent">
					<h1>{cat.name}</h1>
					<span className="origin">{cat.origin}</span>
					<span className="life-span">{cat.life_span} Years</span>
					<p>{cat.description}</p>
					<ul>
						{cat?.alt_names !== "" &&
							cat.alt_names
								.split(",")
								.map((name, index) => (
									<li key={index}>{name}</li>
								))}
					</ul>
					<img src={cat.image} alt={cat.name} />
					{cat?.temperament !== "" ? (
						<ul>
							{cat.temperament.split(",").map((name, index) => (
								<li key={index}>{name}</li>
							))}
						</ul>
					) : (
						""
					)}
					<div className="ratings">
						<p>Shedding: {cat.shedding_level}/5</p>
						<p>Social Needs: {cat.social_needs}/5</p>
						<p>Stranger Friendly: {cat.stranger_friendly}/5</p>
					</div>
					<a
						href={cat.wikipedia_url}
						target="_blank"
						rel="noreferrer"
					>
						Read more...
					</a>
				</div>
			) : (
				<div className="parent">Loading cat...</div>
			)}
		</>
	);
}

export default App;
