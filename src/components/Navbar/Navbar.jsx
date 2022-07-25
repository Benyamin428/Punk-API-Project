import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss";

const Navbar = ({handleSearch, handleCheckbox}) => {
    return (
        <div className="navbar">
            <h3>Search for beer: </h3>
            <SearchBox handleSearch={handleSearch} />
            <FiltersList handleCheckbox={handleCheckbox} />   
        </div>
    );
}

export default Navbar;