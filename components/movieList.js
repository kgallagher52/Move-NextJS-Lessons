import React, { useEffect, useState } from 'react';

//Data Component
import { getMovies } from '../actions/index';

const movieList = () => {
  const [movies, setMovies] = useState('');
  useEffect(() => {// Getting Movies
      setMovies(getMovies())
    return () => {
      setMovies('');
    };
  }, [movies])
  
	return (
		<div className="row">
      
			{movies ?
        movies.map((m) => (
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
							<p className="card-text">{m.description.substr(0, 150) + '...'}</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">{m.rating}</small>
						</div>
					</div>
				</div>
			)):null}
		</div>
	);
};

export default movieList;
