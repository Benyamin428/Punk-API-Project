import "./App.scss";
import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
//import beers from "./data/beers";
import {useState, useEffect} from "react";

const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchBeer, setSearchBeer] = useState("");
  const [abv, setAbv] = useState("");
  const [brewed, setBrewed] = useState("");
  const [ph, setPh] = useState(false);

  const fetchBeers = async () => {

    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers?${searchBeer}&${abv}&${brewed}`);

      if (response.status != 200) throw new Error("Cannot connect to API")

      const beerData = await response.json();
  
      if (ph == true) setBeers(beerData.filter(beer => beer.ph < 4))
      else setBeers(beerData)
    }
    catch(error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchBeers();
  }, [searchBeer, abv, brewed, ph])

const handleSearch = (event) => {
  if (event.target.value != "") setSearchBeer(`beer_name=${event.target.value}`);
  else setSearchBeer("");
}

const handleAbvCheckbox = (event) => {
  if (event.target.checked == true) setAbv("abv_gt=6");
  else setAbv("");
}

const handleBrewedCheckbox = (event) => {
  if (event.target.checked == true) setBrewed("brewed_before=01/2010");
  else setBrewed("");
}

const handlePhCheckbox = (event) => {
  if (event.target.checked == true) setPh(true);
  else setPh(false);
}

  return (
    <div className="container">
      <Navbar handleSearch={handleSearch} handleAbvCheckbox={handleAbvCheckbox} handleBrewedCheckbox={handleBrewedCheckbox} handlePhCheckbox={handlePhCheckbox} />
      <Main beers={beers}/>
    </div>
  );
} 

export default App;
