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
		<article className="card mealCard">
			{meal ? (
				<div className="mealDetails">
					<div className="mealHero">
						<img
							className="thumbnail mealImage"
							src={meal.strMealThumb}
							alt={meal.strMeal}
						/>
						<div className="mealHeroContent">
							<span className="mealEyebrow">Meal pick</span>
							<h1>{meal.strMeal}</h1>
							<div className="mealMeta">
								{meal.strCategory && (
									<span className="badge">
										{meal.strCategory}
									</span>
								)}
								{meal.strArea && (
									<span className="badge">
										{meal.strArea}
									</span>
								)}
							</div>
						</div>
					</div>

					<div className="mealSection">
						<div className="mealSectionHeader">
							<h3>Ingredients</h3>
							<span>{getIngredients(meal).length} items</span>
						</div>
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
						<div className="mealSectionHeader">
							<h3>Instructions</h3>
							<span>
								{
									getInstructionSteps(meal.strInstructions)
										.length
								}{" "}
								steps
							</span>
						</div>
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
							className="youtubeLink mealVideoLink"
							href={meal.strYoutube}
							target="_blank"
							rel="noreferrer"
						>
							<strong>Watch Recipe YOUTUBE</strong>
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
