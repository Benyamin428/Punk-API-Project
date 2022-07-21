import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import FiltersList from "./components/FiltersList/FiltersList";
import Main from "./components/Main/Main";

import beers from "./data/beers";

const App = () => {

  //const getBeers = async () => {
  //  const response = await fetch("https://api.punkapi.com/v2/beers");
  //  const beers = await response.json();
  //  return beers;
  //}
//
  //console.log(getBeers());

  return (
    <div className="container">
      <Navbar />
      <Main beers={beers}/>
    </div>
  );
} 

export default App;
