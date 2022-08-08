import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss";

const Navbar = ({handleSearch, handleAbvCheckbox, handleBrewedCheckbox, handlePhCheckbox}) => {
    return (
        <nav className="navbar">
            <h1>Punk API</h1>
            <h3>Search for beer: </h3>
            <SearchBox handleSearch={handleSearch} />
            <FiltersList handleAbvCheckbox={handleAbvCheckbox} handleBrewedCheckbox={handleBrewedCheckbox} handlePhCheckbox={handlePhCheckbox} />   
        </nav>
    );
}

export default Navbar;