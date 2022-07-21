const FilterItem = ({id, text}) => {
    return (
        <>        
            <label htmlFor={id}>{text}</label>
            <input type="checkbox" id={id} />
        </>
    );
}

export default FilterItem;