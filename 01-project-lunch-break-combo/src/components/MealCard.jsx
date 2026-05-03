function MealCard({ meal }) {
	function getIngredients(mealData) {
		if (!mealData) return [];

		return Array.from({ length: 20 }, (_, index) => {
			const ingredient = mealData[`strIngredient${index + 1}`]?.trim();
			const measure = mealData[`strMeasure${index + 1}`]?.trim();

			if (!ingredient) return null;

			return {
				ingredient,
				measure,
			};
		}).filter(Boolean);
	}

	function getInstructionSteps(instructions) {
		if (!instructions) return [];

		return instructions
			.split(/\r?\n+/)
			.map((step) => step.trim())
			.filter(Boolean);
	}
	return (
		<article className="card">
			<h1>Meal</h1>
			{meal ? (
				<div className="mealDetails">
					<h2>{meal.strMeal}</h2>
					<div className="mealMeta">
						{meal.strCategory && (
							<span className="badge">{meal.strCategory}</span>
						)}
						{meal.strArea && (
							<span className="badge">{meal.strArea}</span>
						)}
					</div>
					<img
						className="thumbnail"
						src={meal.strMealThumb}
						alt={meal.strMeal}
					/>

					<div className="mealSection">
						<h3>Ingredients</h3>
						<ul className="ingredientsList">
							{getIngredients(meal).map(
								({ ingredient, measure }) => (
									<li key={ingredient}>
										<span>{ingredient}</span>
										{measure && <strong>{measure}</strong>}
									</li>
								),
							)}
						</ul>
					</div>

					<div className="mealSection">
						<h3>Instructions</h3>
						<ol className="instructionsList">
							{getInstructionSteps(meal.strInstructions).map(
								(step) => (
									<li key={step}>{step}</li>
								),
							)}
						</ol>
					</div>

					{meal.strYoutube && (
						<a
							className="youtubeLink"
							href={meal.strYoutube}
							target="_blank"
							rel="noreferrer"
						>
							Watch recipe on YouTube
						</a>
					)}
				</div>
			) : (
				<p>Loading meal...</p>
			)}
		</article>
	);
}

export default MealCard;
