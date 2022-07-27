import FilterItem from "./../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = ({handleAbvCheckbox, handleBrewedCheckbox}) => {

    const handleCheckbox = (event) => {
        if (event.target.id == "HighAlcohol") handleAbvCheckbox(event);
        else if (event.target.id == "ClassicRange") handleBrewedCheckbox(event);
    }

    return (
        <>
            <p>Filter By:</p>
            <ul className="filtersList">
                <li className="filtersList-item">
                    <FilterItem handleCheckbox={handleCheckbox} id="HighAlcohol" text="High ABV (> 6.0%)" />
                </li>
                <li className="filtersList-item">
                    <FilterItem handleCheckbox={handleCheckbox} id="ClassicRange" text="Classic Range" />
                </li>
            </ul>
        </>
    );
}

export default FiltersList;