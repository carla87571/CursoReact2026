
import { useState, useEffect } from 'react'
import './index.css'
import { Header } from './components/layout/Header.jsx'
import { Hero } from './components/ui/Hero.jsx'
import { PropertyList } from './components/properties/PropertyList.jsx'
import { SearchBar } from './components/ui/SearchBar.jsx'
import { properties } from './data/properties.js';
import { filterProperties } from "./utils/filterProperties.js"



function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [propertyList, setPropertyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      //setPropertiesFromApi(properties);
      try {
        setPropertyList(properties);
      } catch  {
        setError("No pudimos cargar las propiedades. Por favor, inténtalo de nuevo más tarde. ");
      } finally {
        setIsLoading(false);
      }

    }, 4000);
    return () => clearTimeout(timerId);
  }, []);
  

  const filteredProperties = filterProperties(propertyList, search);
  
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
