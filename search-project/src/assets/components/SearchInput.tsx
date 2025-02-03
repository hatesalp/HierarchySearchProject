type SearchInputProps = {
  searchTerm: string;
  onSearch: (term: string) => void;
  onClear: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  onSearch,
  onClear,
}) => {
  return (
    <div className="search-input__container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className={`search-input__field ${
          searchTerm ? "search-input__field--focused" : ""
        }`}
        placeholder="Enter the name of the department..."
      />
      {searchTerm && (
        <button className="search-input__clear-btn" onClick={onClear}>
          x
        </button>
      )}
    </div>
  );
};

export default SearchInput;
