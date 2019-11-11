import React, { useState } from 'react';
import { getMovies, getCategories } from '../actions';
import Carousel from '../components/carousel';
import SideMenu from '../components/sideMenu';
import MovieList from '../components/movieList';

const Home = ({ movies, images, categories }) => {
	const [filter, setFilter] = useState('all');

	const changeCategory = category => {
		setFilter(category);
	}

	const filterMovies = movies => {
		if (filter === 'all') {
			return movies
		}
		return movies.filter((m) => {
			return m.genre && m.genre.includes(filter)
		})
	}

	return (
		<div className="home-page" >
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						{categories ?
							<SideMenu
								changeCategory={changeCategory}
								categories={categories}
								activeCategory={filter}
							/>
							: null}
					</div>
					<div className="col-lg-9">
						{images ?
							<>
								<Carousel images={images} />
								<h1>Displaying {filter} movies</h1>
							</>

							: null}
					</div>
				</div>
				{movies ? <MovieList movies={filterMovies(movies) || []} /> : null}
			</div>
		</div >
	)
};
Home.getInitialProps = async () => {
	//Use this for server rendering so that the bots can get information when they crawl**
	const movies = await getMovies();
	const categories = await getCategories();
	const images = movies.map(m => ({
		id: `image-${m.id}`,
		url: m.imageCover,
		name: m.name
	}))
	return { movies, images, categories };
}
export default Home;
