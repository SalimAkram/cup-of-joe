import React, { useState } from 'react'

const BrewMethodForm = (props) => {

  const [userBrewMethodData, setUserBrewMethodData] = useState({
    method: "",
    filter_type: "",
    brew_time: "",
    kettle_type: "",
    water_temperature: "",
    grams: "",
    ratio: "",
    yield: "",
    grind: "",
    instructions: "",
    roast: "",
    roast_region: ""
  });

  const handleInputChange = event => {
    event.preventDefault()
    setUserBrewMethodData({
      ...userBrewMethodData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addBrewMethodFromForm(userBrewMethodData)
    clearForm()
  }

  const clearForm = () => {
    setUserBrewMethodData ({
      method: "",
      filter_type: "",
      brew_time: "",
      kettle_type: "",
      water_temperature: "",
      grams: "",
      ratio: "",
      yield: "",
      grind: "",
      instructions: "",
      roast: "",
      roast_region: ""
    })
}

  return(
    <div className="">
      <form onSubmit={handleSubmit}>
        <h4>Add a Brew Method</h4>
          <fieldset className="brewform">
            <div className="grid-x grid-padding-x">
              <div className="small-6 cell">
                <label>Maker: 
                  <select onChange={handleInputChange} name="maker" id="maker">
                    <option value="default">Select your brew method</option>
                    <option value="chemex">CHEMEX</option>
                    <option value="travel">TRAVEL</option>
                    <option value="plastic">PLASTIC</option>
                    <option value="plastic">OTHER</option>
                    <option value="tbd1">TBB1</option>
                    <option value="tbd2">TBD2</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">
                <label>Filter Type: 
                  <select onChange={handleInputChange} name="filter_type" id="filter_type">
                    <option value="default">Select filter type:</option>
                    <option value="metal">METAL</option>
                    <option value="natural paper">NATURAL PAPER</option>
                    <option value="white paper">WHITE PAPER</option>
                    <option value="tbd1">OTHER</option>
                    <option value="tbd2">TBD1</option>
                    <option value="tbd2">TBD2</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">
                <label>Kettle Type: 
                  <select onChange={handleInputChange} name="kettle_type" id="kettle_type">
                    <option value="default">Select From The Following:</option>
                    <option value="electric">ELECTRIC</option>
                    <option value="stovetop">STOVETOP</option>
                    <option value="tbd1">OTHER</option>
                    <option value="tbd1">TBD1</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">  
                <label>Grind:
                  <select onChange={handleInputChange} name="grind" id="grind">
                    <option value="default">Select From The Following:</option>
                    <option value="medium fine">MEDIUM FINE</option>
                    <option value="medium">MEDIUM</option>
                    <option value="medium-coarse">MEDIUM-COARSE</option>
                    <option value="coarse">COARSE</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">  
                <label>Roast:
                      <select onChange={handleInputChange} name="roast" id="roast">
                    <option value="default">Select From The Following:</option>
                    <option value="light roast">LIGHT ROAST</option>
                    <option value="medium roast">MEDIUM ROAST</option>
                    <option value="dark roast">DARK ROAST</option>
                    <option value="other">OTHER</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">
                <label>Roast Region:
                      <select onChange={handleInputChange} name="roast_region" id="roast_region">
                    <option value="default">Select From The Following:</option>
                    <option value="ethiopian">ETHIOPIAN</option>
                    <option value="costa rican">COSTA RICAN</option>
                    <option value="kenyan">KENYAN</option>
                    <option value="other">OTHER</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">
                  <label>Brew Time:
                    <input 
                      name="brew_time"
                      id="brew_time"
                      type="number" 
                      min="1"
                      max="5"
                      onChange={handleInputChange} 
                      value={userBrewMethodData.brew_time}
                      />
                  </label>
              </div>
              <div className="small-6 cell">
                <label>Water Temperature:
                    <input
                      name="water_temperature"
                      id="water_temperature"
                      type="number"
                      min="185"
                      max="212"
                      onChange={handleInputChange}
                      value={userBrewMethodData.water_temperature}
                  />
                </label>
              </div>
              <div className="small-6 cell">
                <label>Grams:
                    <input
                      name="grams"
                      id="grams"
                      type="number"
                      min="16"
                      max="40"
                      step="4"
                      onChange={handleInputChange}
                      value={userBrewMethodData.grams}
                  />
                </label>
              </div>
              <div className="small-6 cell">
                <label>Grams/Water Ratio:
                    <input
                      name="ratio"
                      id="ratio"
                      type="text"
                      onChange={handleInputChange}
                      value={userBrewMethodData.ratio}
                  />
                </label>
              </div>
              <div className="cell">
                <label>Coffee Yield:
                    <input
                      name="yield"
                      id="yield"
                      type="number"
                      min="8"
                      max="20"
                      step="2"
                      onChange={handleInputChange}
                      value={userBrewMethodData.yield}
                  />
                </label>
              </div>
              <div className="cell">
                <label>Instructions:
                    <textarea
                      name="instructions"
                      id="instructions"
                      rows="10"
                      cols="30"
                      onChange={handleInputChange}
                      value={userBrewMethodData.instructions}
                  />
                </label>
              </div>
            </div>  
          </fieldset>
          <input  type="submit" value="Submit" className="button cell" />
      </form>
    </div>
  )
}

export default BrewMethodForm