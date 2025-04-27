import React, { useState } from 'react';
import './Footer.css';

const contacts = [
  "Head Office: 1/38, Bharathiyar St, Moovarasanpet, Chennai - 600091, Tamilnadu, India.",
  "Branch Office 1: 1/38, Bharathiyar St, Pallikaranai, Chennai - 600129, Tamilnadu, India.",
  "Branch Office 2: 1/38, Bharathiyar St, Velachery, Chennai - 600032, Tamilnadu, India."
];

function Footer() {
  const [index, setIndex] = useState(0);

  return (
    <footer className="footer" id="contact">
      <h2>Contact Us</h2>
      <p>{contacts[index]}</p>
      <div className="dots">
        {contacts.map((_, i) => (
          <span key={i} className={index === i ? 'dot active' : 'dot'} onClick={() => setIndex(i)}></span>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
