import { useRouter } from 'next/router';
import { getMovieById, deleteMovie } from '../../../actions';
import Link from 'next/link';

const Movie = ({ movie }) => {
    const router = useRouter();
    const { id } = router.query;
    //Grabbing the value that was put inside of the url beyond movies/

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            router.push('/')
        })
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">
                    {movie.description}
                </p>
                <hr className="my-4" />
                <p>
                    Genre: {movie.genre}
                </p>
                <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
                <button onClick={() => handleDeleteMovie(id)} className="btn btn-primary btn-lg" href="#" role="button">Delete</button>
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                    <button className="btn btn-warning ml-1 btn-lg" role="button">Edit</button>
                </Link>

            </div>
            <p className="desc-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ipsum. Recusandae iusto minus sit illo unde quod, cum, omnis nesciunt, quam doloremque aperiam eveniet tenetur illum necessitatibus beatae nam quo?
      </p>
            <style jsx>{`
        .desc-text {
          font-size:24px;
        }
       `}
            </style>
        </div>
    );
};

Movie.getInitialProps = async (context) => {
    //Using context allows us to grab the information. More details about context information to come
    const { id } = context.query;
    console.log('Calling getInitialProps from movie.js');
    //Use this for server rendering so that the bots can get information when they crawl**
    const movie = await getMovieById(id);
    return { movie };
};


export default Movie;
