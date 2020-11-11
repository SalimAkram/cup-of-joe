import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

// import SearchForm from './SearchForm'
import CafeTile from './CafeTile'
import SearchForm from './SearchForm'

const LandingContainer = (props) => {
  const [landingDataFromDataBase, setLandingDataFromDataBase] = useState([])
  const [cafeList, setcafeList] = useState([])

  let lat;
  let long;

  const successCallback = (position) => {
    lat = position.coords.latitude 
    long = position.coords.longitude
    console.log(position)
  }
navigator.geolocation.getCurrentPosition(successCallback);

  useEffect(() => {

    fetch(`/api/v1/landings?lat=${lat}&long=${long}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        
        setcafeList(responseBody.cafes.results)
        setLandingDataFromDataBase(responseBody.landing)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const cafeListArray = cafeList.map((cafe) => {
    return(
     <CafeTile 
        key={cafe.place_id}
        id={cafe.place_id}
        name={cafe.name}
        rating={cafe.rating}
        userRatings={cafe.user_ratings_total}
     />
    )
  })
  
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x" >
        <div className="cell box medium-6" style={{ height: "100%" }}>
            {cafeListArray}
        </div>
        <div className="cell box grid-y medium-6" style={{ height: "50%" }}>
          <div className="test cell medium-6 top">
            <h1>Search Bar</h1>
          </div>
          <div className="test cell medium-6">
            <h1>Black Owned</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingContainer