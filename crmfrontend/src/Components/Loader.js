import React, { useState, useEffect } from 'react';
// import './Loader.css'; // Import your loader CSS file

const Loader = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

      // Calculate the percentage scrolled
      const newScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // Set loader width based on scroll percentage
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run only once on component mount

  return <div className="loader" style={{ width: `${scrollPercentage}%` }}></div>;
};

export default Loader;