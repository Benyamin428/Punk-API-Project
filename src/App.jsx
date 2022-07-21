import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import FiltersList from "./components/FiltersList/FiltersList";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
} 

export default App;
