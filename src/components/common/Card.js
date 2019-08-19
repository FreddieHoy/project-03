import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{props.name}</div>
      </div>
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={props.image} alt={props.name} />
        </figure>
      </div>
      <div className="card-content">
        <div>
          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <span></span>}
            starCount={5}
            value={props.averageRating}
          />
        </div>
        <p className="notes">{props.plotType}</p>
        <p className="notes">{props.postCode}</p>
      </div>
    </div>
  )
}



export default Card
