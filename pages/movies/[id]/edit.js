import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'

const EditMovie = ({ movie }) => {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDesc: '',
    });
    useEffect(() => {
        setFormData({ ...formData, ...movie })
    }, [])

    const handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    return (
        <div className="container">
            <h1>Edit the Movie</h1>
            <MovieCreateForm handleFormSubmit={handleUpdateMovie} initialData={formData} />
        </div>
    )
}
EditMovie.getInitialProps = async (context) => {
    //Using context allows us to grab the information. More details about context information to come
    const { id } = context.query;
    console.log('Calling getInitialProps from edit.js');
    //Use this for server rendering so that the bots can get information when they crawl**
    const movie = await getMovieById(id);
    return { movie };
};

export default EditMovie
