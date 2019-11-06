import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;
  //Grabbing the value that was put inside of the url beyond movies/
  return (
    <div className="container">
      <h1>Movie with id: { id }</h1>
    </div>
  )
}

export default Movie
