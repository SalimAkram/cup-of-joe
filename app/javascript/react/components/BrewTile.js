import React from 'react'
import { Link } from 'react-router-dom'

const BrewTile = (props) => {
  return(
    <div className=" brew-tile cell test small-12 medium-4">
      <div>
        {props.user}
      </div>
      <div>
        <img src={props.photo} alt=""/>
      </div>
        <Link to={`brews/${props.id}`}>view </Link> 
    </div>
  )
}

export default BrewTile