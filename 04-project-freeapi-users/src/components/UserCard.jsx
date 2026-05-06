export function UserCard({ user, setUser }) {
	return (
		<article className="user" onClick={() => setUser(user)}>
			<div className="user-image">
				<img
					src={user.picture.large}
					alt={`${user.name.first} ${user.name.last}`}
				/>
			</div>
			<div className="user-content">
				<p className="user-kicker">{user.gender}</p>
				<h2>
					{user.name.title} {user.name.first} {user.name.last}
				</h2>
				<div className="user-meta">
					<span>{user.dob.age} years</span>
					<span>{user.location.country}</span>
				</div>
				<p className="user-location">
					{user.location.city}, {user.location.state}
				</p>
			</div>
		</article>
	);
}
