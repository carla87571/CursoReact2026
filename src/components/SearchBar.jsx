import { useState } from "react";

export function SearchBar() {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchedCity(city.trim());
  }

  function handleClearSearch() {
    setCity("");
    setSearchedCity("");
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
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            {(city || searchedCity) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={handleClearSearch}
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
        <strong>{searchedCity || "Sin búsqueda"}</strong>
      </p>
    </>
  );
}
