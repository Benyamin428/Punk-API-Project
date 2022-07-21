import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = () => {
    return (
        <div className="navbar">
            <SearchBox />
            <FiltersList />   
        </div>
    );
}

export default Navbar;