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

export default Book;
