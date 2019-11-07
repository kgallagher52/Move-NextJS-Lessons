import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById } from '../../../actions'

const Edit = () => {
    const [movie, setMovie] = useState({});
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const getMovie = async () => {
            var movie = await getMovieById(id);
            setMovie(movie);
        }
        getMovie();
        return () => {
            //cleanup
            setMovie({});
        };
    }, [])

    return (
        <div className="container">
            <h1>Edit the Movie</h1>
            {JSON.stringify(movie)}
            <MovieCreateForm />
        </div>
    )
}


export default Edit
