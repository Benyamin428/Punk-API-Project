import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = ({handleSearch, handleCheckbox}) => {
    return (
        <div className="navbar">
            <SearchBox handleSearch={handleSearch} />
            <FiltersList handleCheckbox={handleCheckbox} />   
        </div>
    );
}

export default Navbar;