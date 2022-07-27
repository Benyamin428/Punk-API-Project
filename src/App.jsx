import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
//import beers from "./data/beers";
import {useState, useEffect} from "react";

const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchBeer, setSearchBeer] = useState("");
  const [abv, setAbv] = useState("");
  const [brewed, setBrewed] = useState("");

  const fetchBeers = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?${searchBeer}&${abv}&${brewed}`);
    const beerData = await response.json();

    setBeers(beerData)
  }

  useEffect(() => {
    fetchBeers();
    console.log()
  }, [searchBeer, abv, brewed])

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



  return (
    <div className="container">
      <Navbar handleSearch={handleSearch} handleAbvCheckbox={handleAbvCheckbox} handleBrewedCheckbox={handleBrewedCheckbox}/>
      <Main beers={beers}/>
    </div>
  );
} 

export default App;
