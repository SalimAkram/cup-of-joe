import getBrews from './functions/GetBrews'
import getCafes from './functions/GetCafes'
import getRoasts from './functions/GetRoasts'
import getUsers from './functions/GetUsers'
import cafeSearch from './functions/CafeSearch'
import addToFavorites from './functions/AddToFavorites'
import addBrewMethod from './functions/AddBrewMethod'
import addRoast from './functions/AddRoast'

class cupOfJoeApi {

  static getCafes(search) {
    return getCafes(search)
  }
  
  static getBrews() {
    return getBrews()
  }

  static getRoasts() {
    return getRoasts()
  }

  static getUsers(id) {
    return getUsers(id)
  }

  static cafeSearch(search) {
    return cafeSearch(search)
  }

  static addBrewMethod(brewMethodFromForm) {
    return addBrewMethod(brewMethodFromForm)
  }

  static addToFavorites(favoriteRoast) {
    return addToFavorites(favoriteRoast)
  }

  static addRoast(roastData) {
    return addRoast(roastData)
  }
}

export default cupOfJoeApi