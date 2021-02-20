import React, { useState, useEffect } from 'react';

import UserTile from '../components/Tiles/UserTile';
import FavoriteTile from '../components/Tiles/FavoriteTile';
import UserMethodTile from '../components/Tiles/UserMethodTile';
import BrewMethodForm from '../components/Forms/BrewMethodForm';
import Button from '../components/UI/button/Button'

import cupOfJoeApi from '../requests/CupOfJoeApi';

const UserShowContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [favorites, setFavorites] = useState([])
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
 
  const id = props.match.params.id

  useEffect(() => {
    cupOfJoeApi.getUsers(id)
      .then(body => {
        setUsersData(body.user)
        setFavorites(body.favorites)
        setBrewMethodsFromDataBase(body.brews)
      })
  },[])
  
  const addBrewMethodFromForm = (brewMethodFromForm) => {
    cupOfJoeApi.addBrewMethod(brewMethodFromForm)
  }

  const userBrewMethodArray = brewMethodsFromDataBase.map((userBrewMethod)=> {
    return(
      <div key={userBrewMethod.id}>
        <UserMethodTile 
          key={userBrewMethod.id}
          id={userBrewMethod.id}
          maker={userBrewMethod.maker}
          filter={userBrewMethod.filter}
          time={userBrewMethod.time}
          kettle={userBrewMethod.kettle}
          temperature={userBrewMethod.temperature}
          grams={userBrewMethod.grams}
          ratio={userBrewMethod.ratio}
          yield={userBrewMethod.yield}
          grind={userBrewMethod.grind}
          roast={userBrewMethod.roast}
          region={userBrewMethod.region}
          instructions={userBrewMethod.instructions}
          />
          <Button>EDIT</Button>
          <Button>DELETE</Button>
      </div>
    )
  })

  const favoritesTileArray = favorites.map((favorite) => {
    return (
      <FavoriteTile
        key={favorite.id}
        id={favorite.id} 
        name={favorite.name}
        brand={favorite.brand}
        region={favorite.region}
        notes={favorite.notes}
        process={favorite.process}
        price={favorite.price}
        rating={favorite.rating}
        producer={favorite.producer}
        altitude={favorite.altitude}
        url={favorite.url}
      />
    )
  })

  return (
    <div className="grid-x grid-containter align-center user-grid">
      <div className="cell small-12 medium-8">
        <UserTile
          key={usersData.id}
          id={usersData.id}
          username={usersData.username}
          email={usersData.email}
        />
      </div>
      <div className="cell small-12 medium-8">
        <BrewMethodForm
          addBrewMethodFromForm={addBrewMethodFromForm}
        />
      </div>
      <div className="cell small-12 medium-8">
        <div>
          {userBrewMethodArray}    
        </div>
      </div>
      <div className="cell small-12 medium-8">
        <div>
          {favoritesTileArray}    
        </div>
      </div>
    </div>
  )
};

export default UserShowContainer;