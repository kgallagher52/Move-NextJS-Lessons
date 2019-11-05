import React from 'react';

//Data Component
import GlobalContext from '../context/globalContext';
import MovieData from '../resources/1_data';
const movieList = () => {
	return (
		<div className="row">
			{MovieData.map((m) => (
				<div key={m.id} className="col-lg-4 col-md-6 mb-4">
					<div className="card h-100">
						<a href={m.image}>
							<img className="card-img-top" src={m.image} alt={m.name} />
						</a>
						<div className="card-body">
							<h4 className="card-title">
								<a href="#">{m.name}</a>
							</h4>
							<h5>Rating: {m.rating}</h5>
							<p className="card-text">{m.description}</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default movieList;
