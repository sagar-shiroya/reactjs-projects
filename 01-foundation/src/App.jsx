import "./App.css";

function App() {
	const name = "Sagar";
	const books = [
		{
			id: 1,
			title: "Designing Data Intensive Applications",
			author: "Martin Kleppman",
			publisher: "O'reilly",
		},
		{
			id: 2,
			title: "Database Internals",
			author: "Petrov",
			publisher: "O'reilly",
		},
	];

	const genres = ["technical", "fictional", "non-fictional"];

	function Book(props) {
		const { book } = props;
		console.log(props);
		return (
			<article>
				<h2>{book.title}</h2>
				<p>Author: {book.author}</p>
				<span>Published by {book.publisher}</span>
			</article>
		);
	}

	return (
		<section>
			<h1>Favorite Books of {name}</h1>
			<span>Date: {new Date().toString()}</span>
			<p>
				Genres:{" "}
				{genres.reduce(
					(str, currentVal) => (str += currentVal + ", "),
					"",
				)}
			</p>
			<div className="books">
				{books.map((book) => (
					<Book book={book} key={book.id} />
				))}
			</div>
		</section>
	);
}

export default App;
