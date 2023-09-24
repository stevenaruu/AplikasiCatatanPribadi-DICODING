import SearchIcon from "../../assets/icon/SearchIcon";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <span className="search-icon"><SearchIcon /></span>
            <input 
                type="text" 
                name="" 
                id=""
                placeholder="Cari catatan ..." 
            />
        </div>
    )
}

export default SearchBar;