import React, { useState } from 'react';
import './CompanyDescription.css'; // If you want to style

function CompanyDescription() {
  const [showMore, setShowMore] = useState(false);

  const paragraphs = [
    `CMSSWIFT Pvt Ltd., was started by Shri Jagan Karthik G, Director and Smt. Suganya JK. in 2016.`,
    `CMSSWIFT is excited to bring you an easier, faster, cheaper and more comprehensive online supply market of construction materials under one roof with an excellent service schedule, in and around the city of Chennai, with an extensive logistic support. A wealth of expertise, a decade of experience, and considerable research.`,
    `Although the majority of its transactions are direct, it also accepts orders and queries online. Only government-owned yards and authorized quarries are used by CMSSWIFT to obtain river sand, while government-licensed crushers both inside and outside of Chennai are used to obtain blue metal.`,
    `Since we supply natural resources, we can guarantee quantity from Government-owned or licensed yards, but since these are natural resources, we are unable to guarantee quality.`,
    `Only government-owned yards and authorized quarries are used by CMSSWIFT to obtain river sand, while government-licensed crushers both inside and outside of Chennai are used to obtain blue metal. Since we supply natural resources, we can guarantee quantity from Government-owned or licensed yards, but since these are natural resources, we are unable to guarantee quality.`
  ];

  const shortText = paragraphs.slice(0, 3); // Show first 3 paragraphs

  return (
    <div className="company-description">
      {showMore ? (
        paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
      ) : (
        shortText.map((paragraph, index) => <p key={index}>{paragraph}</p>)
      )}

      <span 
        className="read-toggle" 
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Read less' : 'Read more'}
      </span>
    </div>
  );
}

export default CompanyDescription;
