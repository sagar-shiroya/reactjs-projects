import { useState, useEffect } from "react";
import "./App.css";
import { UserDetails } from "./components/UserDetails";
import { UserCard } from "./components/UserCard";

export default function App() {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [user, setUser] = useState({});

	useEffect(() => {
		async function fetchUsers() {
			const url = `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=10`;
			const options = {
				method: "GET",
				headers: { accept: "application/json" },
			};

			try {
				const response = await fetch(url, options);
				const results = await response.json();
				console.log(results);
				setTotalPages(results.data.totalPages);
				console.log(results.data.data);
				setUsers(results.data.data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchUsers();
	}, [page]);

	return (
		<>
			<main className="users-list">
				<div className="page-intro">
					<h1>Contact Directory</h1>
					<p className="intro-copy">
						A compact set of public profiles.
					</p>
				</div>

				<section className="users" aria-label="Users list">
					{users.length > 0 &&
						users.map((user) => (
							<UserCard
								key={user.id}
								user={user}
								setUser={setUser}
							/>
						))}
				</section>

				<div className="paginate" aria-label="Pagination controls">
					<button
						disabled={page === 1}
						onClick={() => setPage(page - 1)}
					>
						Prev
					</button>
					<p>
						Page <span>{page}</span>
					</p>
					<button
						disabled={page === totalPages}
						onClick={() => setPage(page + 1)}
					>
						Next
					</button>
				</div>
			</main>

			{Object.keys(user).length > 0 && (
				<div className="details-backdrop">
					<UserDetails user={user} setUser={setUser} />
				</div>
			)}
		</>
	);
}
