import FilterItem from "./../FilterItem/FilterItem";

const FiltersList = () => {
    return (
        <ul>
            <li>
                <FilterItem id="HighAlcohol" text="High ABV (> 6.0%)" />
            </li>
            <li>
                <FilterItem id="ClassicRange" text="Classic Range" />
            </li>
            <li>
                <FilterItem id="HighAcidity" text="Acidic (ph < 4)" />
            </li>
        </ul>
    );
}

export default FiltersList;