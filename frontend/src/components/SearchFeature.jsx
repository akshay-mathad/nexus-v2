import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SearchFeature.css";

const SearchFeature = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [artisanSearch, setArtisanSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Artisan Search: ${artisanSearch}, Location: ${locationSearch}, Category: ${categorySearch}`
    );
    // Simulate search logic by filtering a predefined list of artisans
    const artisans = [
      { id: 1, name: "John Doe", location: "New York", category: "Carpenter" },
      { id: 2, name: "Jane Smith", location: "Los Angeles", category: "Electrician" },
      { id: 3, name: "Bob Johnson", location: "Chicago", category: "Plumber" },
      { id: 4, name: "Alice Brown", location: "New York", category: "Painter" },
      { id: 5, name: "Mike Davis", location: "Houston", category: "Carpenter" },
      { id: 6, name: "Emily Taylor", location: "San Francisco", category: "Interior Designer" },
      { id: 7, name: "David Lee", location: "Miami", category: "Landscaper" },
      { id: 8, name: "Sarah Johnson", location: "Dallas", category: "HVAC Technician" },
      { id: 9, name: "Kevin White", location: "Phoenix", category: "Roofing Specialist" },
      { id: 10, name: "Lisa Nguyen", location: "Seattle", category: "General Contractor" },
      { id: 11, name: "Olivia Martin", location: "New York", category: "Architect" },
      { id: 12, name: "Ethan Hall", location: "New York", category: "Flooring Specialist" },
      { id: 13, name: "Ava Chen", location: "New York", category: "Cabinetmaker" },
    ];
    const filteredArtisans = artisans.filter(
      (artisan) =>
        artisan.name.toLowerCase().includes(artisanSearch.toLowerCase()) &&
        artisan.location.toLowerCase().includes(locationSearch.toLowerCase()) &&
        artisan.category.toLowerCase().includes(categorySearch.toLowerCase())
    );
    setSearchResults(filteredArtisans);
  };

  const handleClear = () => {
    setArtisanSearch("");
    setLocationSearch("");
    setCategorySearch("");
    setSearchResults([]);
  };

  return (
    <div className="search-feature">
      <h1 className="playfair-display-font">Search Artisans</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="artisanSearch">Search for artisans:</label>
          <input
            type="text"
            id="artisanSearch"
            placeholder="Name (eg: John Doe)"
            value={artisanSearch}
            onChange={(e) => setArtisanSearch(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="locationSearch">Location:</label>
          <input
            type="text"
            id="locationSearch"
            placeholder="Location (eg: New York)"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categorySearch">Category:</label>
          <input
            type="text"
            id="categorySearch"
            placeholder="Category (eg: Carpenter)"
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleClear}>Clear</button>
          <button type="submit">Search</button>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="search-results">
          <>
            <h2>Search Results</h2>
            <ul>
              {searchResults.map((artisan) => (
                <li key={artisan.id}>
                  {artisan.name} - {artisan.location} - {artisan.category}
                  <button onClick={() => navigate(`/book-artisan/${artisan.id}`)}>Book</button>
                </li>
              ))}
            </ul>
          </>
        </div>
      )}
    </div>
  );
};

export default SearchFeature;
