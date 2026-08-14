
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

  useEffect(() => {
    setTimeout(() => {
      setPropertiesFromApi(properties);
    }, 1000);
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
        
        <PropertyList properties={filteredProperties} />

      </main>

    </div>
  )
}

export default App
