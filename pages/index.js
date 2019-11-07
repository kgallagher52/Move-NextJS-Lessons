import React from 'react';
import { getMovies } from '../actions';
import Carousel from '../components/carousel';
import SideMenu from '../components/sideMenu';
import MovieList from '../components/movieList';

const Home = ({movies, images}) => (
		<div className="home-page">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<SideMenu />
					</div>
					<div className="col-lg-9">
          {images ? <Carousel  images={images} /> : null}
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
  const images  = movies.map(m => ({
      id:`image-${m.id}`,
      url:m.imageCover,
      name:m.name
  }))
	return { movies,images };
}
export default Home;
