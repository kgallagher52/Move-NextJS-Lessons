import Modal from './modal'
import MovieCreateForm from "./movieCreateForm";


const sideMenu = ({categories}) => {
	return (
		<>
      <Modal>
        <MovieCreateForm/>
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
