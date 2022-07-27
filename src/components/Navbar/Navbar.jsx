import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss";

const Navbar = ({handleSearch, handleAbvCheckbox, handleBrewedCheckbox}) => {
    return (
        <div className="navbar">
            <h3>Search for beer: </h3>
            <SearchBox handleSearch={handleSearch} />
            <FiltersList handleAbvCheckbox={handleAbvCheckbox} handleBrewedCheckbox={handleBrewedCheckbox} />   
        </div>
    );
}

export default Navbar;