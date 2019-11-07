import { useState } from 'react';

const MovieCreateForm = () => {
	const [ form, setForm ] = useState({
		name: '',
		description: '',
		rating: '',
		image: '',
		cover: '',
		longDesc: ''
	});

	const handleChange = e => {
    const target = e.target;
    const name = target.name;
    setForm ({
      ...form,
      [name]: target.value
    })
	};

	return (
		<div>
			<form>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						value={form.name}
						name="name"
						onChange={handleChange}
						type="text"
						className="form-control"
						id="name"
						aria-describedby="emailHelp"
						placeholder="Lord of the Rings"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						name="description"
						value={form.description}
						onChange={handleChange}
						type="text"
						className="form-control"
						id="description"
						placeholder="Somewhere in Middle-earth..."
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Rating</label>
					<input
						value={form.rating}
						name="rating"
						onChange={handleChange}
						type="number"
						max="5"
						min="0"
						className="form-control"
						id="rating"
						placeholder="3"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Max: 5, Min: 0
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="image">Image</label>
					<input
						value={form.image}
						name="image"
						onChange={handleChange}
						type="text"
						className="form-control"
						id="image"
						placeholder="http://....."
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cover">Cover</label>
					<input
						value={form.cover}
						name="cover"
						onChange={handleChange}
						type="text"
						className="form-control"
						id="cover"
						placeholder="http://......"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="longDesc">Long Description</label>
					<textarea
						onChange={handleChange}
						name="longDesc"
						value={form.longDesc}
						className="form-control"
						id="longDesc"
						rows="3"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<select multiple className="form-control" id="genre">
						<option>drama</option>
						<option>music</option>
						<option>adventure</option>
						<option>historical</option>
						<option>action</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default MovieCreateForm;
