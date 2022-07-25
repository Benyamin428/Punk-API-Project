const SearchBox = ({handleSearch}) => {
    return (
        <>
            <label htmlFor="name">Search Name:</label>
            <input onChange={handleSearch} id="name" type="text"></input>
        </>
    );
}

export default SearchBox;