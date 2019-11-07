import React from 'react';
import { getMovies, getCategories } from '../actions';
import Carousel from '../components/carousel';
import SideMenu from '../components/sideMenu';
import MovieList from '../components/movieList';

const Home = ({movies, images, categories}) => (
		<div className="home-page">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
            {categories ?<SideMenu categories={categories}/> : null}
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
  const categories = await getCategories();
  console.log(categories)

  const images  = movies.map(m => ({
      id:`image-${m.id}`,
      url:m.imageCover,
      name:m.name
  }))
	return { movies,images,categories };
}
export default Home;
