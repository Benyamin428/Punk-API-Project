import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
//import beers from "./data/beers";
import {useState, useEffect} from "react";

const App = () => {

  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(
        (result) => {
          setBeers(result);
          setFilteredBeers(result);
        }
      )
  }, [])

  const handleSearch = async (event) => {
    if (event.target.value != "") {
      const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${event.target.value}`);
      const beerQuery = await response.json();
      setFilteredBeers(beerQuery);
    }
    else {
      setFilteredBeers(beers);
    }
  }

  //const handleSearch = (event) => {
  //  const filteredBeersList = beers.filter(beer => {
  //    if (beer.name.toLowerCase().includes(event.target.value.toLowerCase())) return beer;
  //  })
  //  setFilteredBeers(filteredBeersList);
  //}

  const handleCheckbox = (checkedValues) => {
    setFilteredBeers(beers);
    let newFilteredBeers = [...beers];
    checkedValues.forEach(checked => {
      if (checked == "HighAlcohol") {
        newFilteredBeers = newFilteredBeers.filter(beer => beer.abv>=6);
      }
      if (checked == "ClassicRange") {
        newFilteredBeers = newFilteredBeers.filter(beer => parseInt(beer.first_brewed.slice(3))<2010);
      }
      if (checked == "HighAcidity") {
        newFilteredBeers = newFilteredBeers.filter(beer => beer.ph < 4);
      }
    })
    setFilteredBeers(newFilteredBeers);
  }

  return (
    <div className="container">
      <Navbar handleSearch={handleSearch} handleCheckbox={handleCheckbox} />
      <Main beers={filteredBeers}/>
    </div>
  );
} 

export default App;
