// src/components/SearchBar.jsx
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search movies by title or genre..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
