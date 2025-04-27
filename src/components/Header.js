import React, { useState } from 'react'; 
import './Header.css';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Import search and close icons
import logo from '../assets/logo.png';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setShowSearch(true);  // Open search input
  };

  const handleCloseClick = () => {
    setShowSearch(false); // Close search input
    setSearchQuery('');   // Clear the search box
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // You can perform actual search logic here
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="search-container">
          {!showSearch ? (
            <FaSearch className="search-icon" onClick={handleSearchClick} />
          ) : (
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                placeholder="Search (Natural, Beauty)"
                autoFocus
              />
              <FaTimes className="close-icon" onClick={handleCloseClick} />
            </form>
          )}
        </div>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#offers">Offers</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
