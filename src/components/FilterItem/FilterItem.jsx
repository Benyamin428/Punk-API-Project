const FilterItem = ({id, text}) => {
    return (
        <>        
            <label for={id}>{text}</label>
            <input type="checkbox" id={id} />
        </>
    );
}

export default FilterItem;