const FilterItem = ({checkFilter, id, text}) => {
    return (
        <>        
            <label htmlFor={id}>{text}</label>
            <input onClick={checkFilter} type="checkbox" id={id} />
        </>
    );
}

export default FilterItem;