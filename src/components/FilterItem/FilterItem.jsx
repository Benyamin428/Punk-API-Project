const FilterItem = ({handleCheckbox, id, text}) => {
    return (
        <>        
            <label htmlFor={id}>{text}</label>
            <input onClick={handleCheckbox} type="checkbox" id={id} />
        </>
    );
}

export default FilterItem;