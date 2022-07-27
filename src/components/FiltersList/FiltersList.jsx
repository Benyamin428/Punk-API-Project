import FilterItem from "./../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = ({handleAbvCheckbox, handleBrewedCheckbox, handlePhCheckbox}) => {

    const handleCheckbox = (event) => {
        if (event.target.id == "HighAlcohol") handleAbvCheckbox(event);
        else if (event.target.id == "ClassicRange") handleBrewedCheckbox(event);
        else handlePhCheckbox(event);
    }

    return (
        <>
            <p>Filter By:</p>
            <ul className="filtersList">
                <li className="filtersList-item">
                    <FilterItem handleCheckbox={handleCheckbox} id="HighAlcohol" text="High ABV (> 6.0%)" />
                </li>
                <li className="filtersList-item">
                    <FilterItem handleCheckbox={handleCheckbox} id="Acidity" text="Acidic (ph < 4)" />
                </li>
                <li className="filtersList-item">
                    <FilterItem handleCheckbox={handleCheckbox} id="ClassicRange" text="Classic Range" />
                </li>
            </ul>
        </>
    );
}

export default FiltersList;