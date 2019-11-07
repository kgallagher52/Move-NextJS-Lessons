import React from 'react'

const carousel = ({images}) => {
  return (
      		<div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
						<ol className="carousel-indicators">
              {images.map((image, index) => (
                <li 
                data-target="#carouselExampleIndicators" 
                data-slide-to={index} 
                className={index === 0 ? 'active' : ''}
                />
              ))
              }
						</ol>
						<div className="carousel-inner" role="listbox">
            {images.map((image, index) => (
							<div className={`carousel-item ${index === 0 ? 'active' : ''}` }>
								<img
									className="d-block img-fluid"
									src={image.url}
									alt={image.name}
								/>
							</div>
               ))
              }
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
            <style>{`
            .carousel-item {
              max-height:450px;
            }`}</style>
      </div>
    </div>

  )
}

export default carousel
