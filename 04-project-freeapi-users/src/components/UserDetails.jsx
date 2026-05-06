export function UserDetails({ user, setUser }) {
	const birthday = new Intl.DateTimeFormat("en-GB", {
		day: "2-digit",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	}).format(new Date(user.dob.date));

	return (
		<aside className="user-details" role="dialog" aria-modal="true">
			<button className="close-button" onClick={() => setUser({})}>
				Close
			</button>

			<div className="profile-image">
				<img
					src={user.picture.large}
					alt={`${user.name.first} ${user.name.last}`}
				/>
			</div>

			<div className="user-details-content">
				<div className="name-details">
					<span className="name-prefix">
						{user.name.title} /{" "}
						{user.gender[0].toUpperCase() + user.gender.substring(1)}
					</span>
					<h2>
						{user.name.first} {user.name.last}
					</h2>
					<p>{user.email}</p>
				</div>

				<div className="detail-grid age-details">
					<label>
						Age <span>{user.dob.age}</span>
					</label>
					<label>
						Birthday <span>{birthday}</span>
					</label>
				</div>

				<div className="location-details">
					<p className="section-label">Location</p>
					<div className="location-card">
						<label>
							City <span className="city">{user.location.city}</span>
						</label>
						<label>
							State <span className="state">{user.location.state}</span>
						</label>
						<label>
							Country{" "}
							<span className="country">{user.location.country}</span>
						</label>
						<label>
							Pincode{" "}
							<span className="postcode">{user.location.postcode}</span>
						</label>
					</div>
				</div>

				<div className="detail-grid contact-details">
					<label>
						Phone <span>{user.phone}</span>
					</label>
					<label>
						Cell <span>{user.cell}</span>
					</label>
				</div>
			</div>
		</aside>
	);
}
