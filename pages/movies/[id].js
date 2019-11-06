import { useRouter } from 'next/router';
import { getMovieById } from '../../actions';

const Movie = ({movie}) => {
	const router = useRouter();
	const { id } = router.query;
	//Grabbing the value that was put inside of the url beyond movies/
	return (
		<div className="container">
      {console.log(movie)}
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
      <p>

      </p>
		</div>
	);
};

Movie.getInitialProps = async () => {
	console.log('Calling getInitialProps from movie.js');
	//Use this for server rendering so that the bots can get information when they crawl**
	const movie = await getMovieById("2");
	return { movie };
};


export default Movie;
