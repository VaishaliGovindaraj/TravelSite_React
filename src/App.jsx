import { useState } from 'react';
import './index.css'
import Navigation from './components/Navigation/index.jsx';
import DisplayOptions from './components/DisplayOptions/index.jsx';
import { uniqueCountryArray, allCitiesArray,CountryDetailArray,CitiesDetailArray} from "./data/data.js";
import CountryDetail from './components/CountryDetails/index.jsx';

function App() {

const [chosenCategory, setChosenCategory] = useState(null);
const [selectedCategory,setSelectedCategory] = useState(null);
const [chosenCity, setChosenCity] = useState(null);


  const handleClick = (item) => {
    selectedCategory === item ? setSelectedCategory(null) : setSelectedCategory(item);
  }

  const assignCountry = (item) => {
    setChosenCategory(item);
    console.log(chosenCategory)
  }

  const assignCity = (item) => {
    setChosenCity(item);
    console.log(chosenCategory)
  }

  return (
    <>
      <div>
        <Navigation selectedLink={handleClick} />
        {selectedCategory ==="countries"  && <DisplayOptions categoryArray={uniqueCountryArray} selectedLink={assignCountry}/>}
        {selectedCategory ==="cities" && <DisplayOptions categoryArray={allCitiesArray} selectedLink={assignCity}/>}
        {chosenCategory}
        {chosenCategory && <CountryDetail countryArray ={CountryDetailArray(chosenCategory)}/>}
        {chosenCity && <CountryDetail countryArray = {CitiesDetailArray(chosenCity)} />}

      </div>
    </>
  )
}

export default App
