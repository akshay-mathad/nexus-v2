import React, { useState } from 'react';
import '../styles/SearchFeature.css';

const SearchFeature = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [artisanSearch, setArtisanSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [categorySearch, setCategorySearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Artisan Search: ${artisanSearch}, Location: ${locationSearch}, Category: ${categorySearch}`);
    // Simulate search logic by filtering a predefined list of artisans
    const artisans = [
      { name: "John Doe", location: "New York", category: "Carpenter" },
      { name: "Jane Smith", location: "Los Angeles", category: "Electrician" },
      { name: "Bob Johnson", location: "Chicago", category: "Plumber" },
      { name: "Alice Brown", location: "New York", category: "Painter" },
      { name: "Mike Davis", location: "Houston", category: "Carpenter" },
    ];
    const filteredArtisans = artisans.filter(artisan => 
      artisan.name.toLowerCase().includes(artisanSearch.toLowerCase()) &&
      artisan.location.toLowerCase().includes(locationSearch.toLowerCase()) &&
      artisan.category.toLowerCase().includes(categorySearch.toLowerCase())
    );
    setSearchResults(filteredArtisans);
  }

  return (
    <div className="search-feature">
      <h1>Search Artisans</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="artisanSearch">Search for artisans:</label>
          <input type="text" id="artisanSearch" placeholder="Name (eg: John Doe)" value={artisanSearch} onChange={(e) => setArtisanSearch(e.target.value)} />
        </div>
        <div>
          <label htmlFor="locationSearch">Location:</label>
          <input type="text" id="locationSearch" placeholder="Location (eg: New York)" value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)} />
        </div>
        <div>
          <label htmlFor="categorySearch">Category:</label>
          <input type="text" id="categorySearch" placeholder="Category (eg: Carpenter)" value={categorySearch} onChange={(e) => setCategorySearch(e.target.value)} />
        </div>
        <div className="buttons">
          <button type="reset">Clear</button>
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="search-results">
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((artisan, index) => (
            <li key={index}>
              {artisan.name} - {artisan.location} - {artisan.category}
              <button>Book</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchFeature;
