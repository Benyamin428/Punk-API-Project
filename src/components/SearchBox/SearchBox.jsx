const SearchBox = ({handleSearch}) => {
    return (
        <input onChange={handleSearch} type="text"></input>
    );
}

export default SearchBox;