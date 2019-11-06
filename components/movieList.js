import React from 'react';
import Link from 'next/link';

const movieList = ({ movies }) => {
	return (
		<div className="row">
			{movies.map((m) => (
				<div key={m.id} className="col-lg-4 col-md-6 mb-4">
					<div className="card h-100">
						<Link href={`/movies/${m.id}`}>
							<a>
								<img className="card-img-top" src={m.image} alt={m.name} />
							</a>
						</Link>
						<div className="card-body">
							<h4 className="card-title">
								<Link href={`/movies/${m.id}`}>
									<a>{m.name}</a>
								</Link>
							</h4>
							<h5>Rating: {m.rating}</h5>
							<p className="card-text">{m.description.substr(0, 150) + '...'}</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">{m.rating}</small>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default movieList;
