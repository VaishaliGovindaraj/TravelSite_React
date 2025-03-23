import { useState } from 'react';
import './index.css'
import Navigation from './components/Navigation/index.jsx';
import DisplayOptions from './components/DisplayOptions/index.jsx';
import { uniqueCountryArray, allCitiesArray,CountryDetailArray,CitiesDetailArray} from "./data/data.js";
import CountryDetail from './components/CountryDetails/index.jsx';
import Home from './components/Home/index.jsx';

function App() {

const [chosenCategory, setChosenCategory] = useState(null);
const [selectedCategory,setSelectedCategory] = useState(null);
const [chosenCity, setChosenCity] = useState(null);


  const handleClick = (item) => {
    selectedCategory === item ? setSelectedCategory(null) : setSelectedCategory(item);
  }

  const assignCountry = (item) => {
    chosenCategory ==="item" ?  setChosenCategory(null) :  setChosenCategory(item);
  }

  const assignCity = (item) => {
    chosenCity=== "item"? setChosenCity(null) : setChosenCity(item);
  }

  return (
    <>
      <div>
        <Navigation selectedLink={handleClick} />
        {selectedCategory === "home" && <Home />}
        {selectedCategory ==="countries"  && <DisplayOptions categoryArray={uniqueCountryArray} selectedLink={assignCountry}/>}
        {selectedCategory ==="cities" && <DisplayOptions categoryArray={allCitiesArray} selectedLink={assignCity}/>}
        {chosenCategory}
        {chosenCity}
        {chosenCategory && chosenCity &&  <CountryDetail countryArray ={CountryDetailArray(chosenCategory)}/>}
        {chosenCity && <CountryDetail countryArray = {CitiesDetailArray(chosenCity)} />}
        

      </div>
    </>
  )
}

export default App
