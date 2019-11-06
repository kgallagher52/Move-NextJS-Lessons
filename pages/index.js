import React from 'react';
import { getMovies } from '../actions';
import Carousel from '../components/carousel';
import SideMenu from '../components/sideMenu';
import MovieList from '../components/movieList';

const Home = ({movies}) => (
		<div className="home-page">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<SideMenu />
					</div>
					<div className="col-lg-9">
						<Carousel />
					</div>
				</div>
				{movies ? <MovieList movies={movies} /> : null}
			</div>
		</div>
);
Home.getInitialProps = async () => {
  console.log("Calling getInitialProps from Home");
	//Use this for server rendering so that the bots can get information when they crawl**
	const movies = await getMovies();
	return { movies };
}
export default Home;
