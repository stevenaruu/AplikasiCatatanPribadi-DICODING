import SearchIcon from "../../assets/icon/SearchIcon";

const SearchBar = (props) => {
    const { onSearch } = props;

    const handleSearchValue = (e) => {
        const value = e.target.value;
        onSearch(value);
    }

    return (
        <div className="search-bar">
            <span className="search-icon"><SearchIcon /></span>
            <input 
                type="text" 
                placeholder="Cari catatan ..."
                onChange={handleSearchValue} 
            />
        </div>
    )
}

export default SearchBar;