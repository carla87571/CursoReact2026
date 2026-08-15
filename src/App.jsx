
import { useState, useEffect } from 'react'
import './index.css'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { PropertyList } from './components/PropertyList.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { properties } from './data/properties.js';



function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [propertiesFromApi, setPropertiesFromApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      //setPropertiesFromApi(properties);
      try {
        setPropertiesFromApi(properties);
      } catch  {
        setError("No pudimos cargar las propiedades. Por favor, inténtalo de nuevo más tarde. ");
      } finally {
        setIsLoading(false);
      }

    }, 4000);
    return () => clearTimeout(timerId);
  }, []);
  

  const filteredProperties = propertiesFromApi.filter((property) => {
    const searchText = search.toLowerCase();
    return (
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText) ||
      property.type.toLowerCase().includes(searchText)
    );
  });
  
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />

        <SearchBar 
        value={city}
        searchedValue={search}
        onChange={setCity}
        onSearch={setSearch}
        onClear={() => {
          setCity("");
          setSearch("");
        }}
        />
        {isLoading && <p>Cargando propiedades...</p>}
        
        {/* <PropertyList properties={filteredProperties} /> */}

        { error && <p>{error}</p>}
        {!isLoading && !error && (
          <PropertyList properties={filteredProperties} />
        )}
       

      </main>

    </div>
  )
}

export default App
