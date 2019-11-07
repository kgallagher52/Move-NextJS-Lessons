import Modal from './modal'
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from '../actions/'

const sideMenu = ({categories}) => {
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies))
      modal.closeModal()
    })
  }

	return (
		<>
      <Modal ref={e => modal = e} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
      </Modal>
			<h1 className="my-4">Movie Types</h1>
			<div className="list-group">
        {categories.map(c => (
				  <a key={c.id} href="#" className="list-group-item">
					  {c.name}
				  </a>
          ))
        }
			</div>
		</>
	);
};

export default sideMenu;
