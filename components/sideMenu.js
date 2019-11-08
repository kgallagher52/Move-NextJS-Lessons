
import { useRouter } from 'next/router'
import Modal from './modal'
import MovieCreateForm from "./movieCreateForm"
import { createMovie } from '../actions/'

const sideMenu = ({ categories, changeCategory, activeCategory }) => {
  const router = useRouter()
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal()
      router.push('/')
    })
  }

  return (
    <>
      <Modal ref={e => modal = e} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Movie Types</h1>
      <div className="list-group">
        {categories.map(c => (
          <a onClick={() =>
            changeCategory(c.name)} key={c.id} href="#"
            className={c.name === activeCategory ? "list-group-item active" : "list-group-item"}>
            {c.name}
          </a>
        ))
        }
      </div>
    </>
  );
};

export default sideMenu;
