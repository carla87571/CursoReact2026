

export function SearchBar({ value, searchedValue, onChange, onSearch, onClear }) {
  
  
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(value.trim());
  }


  return (
    <>
      <form className="search-section" onSubmit={handleSubmit}>
        <label>
          Ciudad
          <span className="city-input-wrapper">
            <input
              type="text"
              placeholder="Santiago, Chile"
              value={value}
              onChange={(event) => onChange(event.target.value)}
            />
            {(value || searchedValue) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                ×
              </button>
            )}
          </span>
        </label>


        <label>
          Tipo
          <input type="text" placeholder="Apartamento" />
        </label>


        <label>
          Huéspedes
          <input type="number" placeholder="2" />
        </label>


        <button type="submit">Buscar</button>
      </form>

      
      <p className="current-search">
        Resultados de búsqueda:{" "}
        <strong>{searchedValue || "Sin búsqueda"}</strong>
      </p>
    </>
  );
}
