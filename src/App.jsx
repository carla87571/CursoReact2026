
import { useState } from 'react'
import './index.css'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { PropertyList } from './components/PropertyList.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { properties } from './data/properties.js';



function App() {

  const [search, setSearch] = useState("");
  
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />
        <SearchBar search={search} setSearch={setSearch} />
        <PropertyList properties={properties} />
      </main>

    </div>
  )
}

export default App
