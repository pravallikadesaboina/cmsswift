import React from 'react';
import './ProductGrid.css';

// Import your 24 images (8 for products, 8 for services, 8 for offers)
import product1 from '../assets/products/product1.jpg';
import product2 from '../assets/products/product2.jpg';
import product3 from '../assets/products/product3.jpg';
import product4 from '../assets/products/product4.jpg';
import product5 from '../assets/products/product5.jpg';
import product6 from '../assets/products/product6.jpg';
import product7 from '../assets/products/product7.jpg';
import product8 from '../assets/products/product8.jpg';

import service1 from '../assets/services/service1.jpg';
import service2 from '../assets/services/service2.jpg';
import service3 from '../assets/services/service3.jpg';
import service4 from '../assets/services/service4.jpg';
import service5 from '../assets/services/service5.jpg';
import service6 from '../assets/services/service6.jpg';
import service7 from '../assets/services/service7.jpg';
import service8 from '../assets/services/service8.jpg';

import offer1 from '../assets/offers/offer1.jpg';
import offer2 from '../assets/offers/offer2.jpg';
import offer3 from '../assets/offers/offer3.jpg';
import offer4 from '../assets/offers/offer4.jpg';
import offer5 from '../assets/offers/offer5.jpg';
import offer6 from '../assets/offers/offer6.jpg';
import offer7 from '../assets/offers/offer7.jpg';
import offer8 from '../assets/offers/offer8.jpg';

function ProductGrid({ section }) {
  const items = {
    products: [
      { title: 'Mustered oil', price: '₹500', image: product1 },
      { title: 'Mustered oil', price: '₹600', image: product2 },
      { title: 'Mustered oil', price: '₹700', image: product3 },
      { title: 'Mustered oil', price: '₹800', image: product4 },
      { title: 'Mustered oil', price: '₹900', image: product5 },
      { title: 'Mustered oil', price: '₹1000', image: product6 },
      { title: 'Mustered oil', price: '₹1100', image: product7 },
      { title: 'Mustered oil', price: '₹1200', image: product8 },
    ],
    services: [
      { title: 'Natural Face pack', price: '₹1500', image: service1 },
      { title: 'Natural Face pack', price: '₹1600', image: service2 },
      { title: 'Natural Face pack', price: '₹1700', image: service3 },
      { title: 'Natural Face pack', price: '₹1800', image: service4 },
      { title: 'Natural Face pack', price: '₹1900', image: service5 },
      { title: 'Natural Face pack', price: '₹2000', image: service6 },
      { title: 'Natural Face pack', price: '₹2100', image: service7 },
      { title: 'Natural Face pack', price: '₹2200', image: service8 },
    ],
    offers: [
      { title: 'Foot Pedicure', price: '₹300', image: offer1 },
      { title: 'Foot Pedicure', price: '₹400', image: offer2 },
      { title: 'Foot Pedicure', price: '₹500', image: offer3 },
      { title: 'Foot Pedicure', price: '₹600', image: offer4 },
      { title: 'Foot Pedicure', price: '₹700', image: offer5 },
      { title: 'Foot Pedicure', price: '₹800', image: offer6 },
      { title: 'Foot Pedicure', price: '₹900', image: offer7 },
      { title: 'Foot Pedicure', price: '₹1000', image: offer8 },
    ],
  };

  return (
    <div className="grid">
      {items[section].map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>MRP: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
