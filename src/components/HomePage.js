import React from 'react';
import CompanyDescription from './CompanyDescription';
import VideoSection from './VideoSection';
import ProductGrid from './ProductGrid';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      
      <div id="home" className="content">
        <div className="left-side">
          <CompanyDescription />
        </div>
        <div className="right-side">
          <VideoSection />
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="section">
        <h2>Products</h2>
        <ProductGrid section="products" />
      </div>

      {/* Services Section */}
      <div id="services" className="section">
        <h2>Services</h2>
        <ProductGrid section="services" />
      </div>

      {/* Offers Section */}
      <div id="offers" className="section">
        <h2>Offers</h2>
        <ProductGrid section="offers" />
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="section">
        <h2>Contact Us</h2>
        {/* You can put your ContactUs component here */}
      </div>

    </div>
  );
}

export default HomePage;
