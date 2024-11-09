import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSubTextIndex, setCurrentSubTextIndex] = useState(0);
  
  const texts = ["Syaloom!", "Selamat Datang Di Gereja Sidang Rohul Kusus Indonesia", "Bersatu dalam iman, pengharapan, dan kasih", "Tuhan Yesus Memberkati"];
  const subTexts = ["We are glad you are here", "Experience the love of Christ", "Stay connected with us", "Join our family today!"];

  useEffect(() => {
    // Mengatur interval untuk mengganti teks dan gambar setiap 5 detik
    const interval = setInterval(() => {
      goToNext();
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentSubTextIndex((prevIndex) => (prevIndex + 1) % subTexts.length);
    }, 5000); // 5000 ms = 5 detik

    return () => clearInterval(interval);
  }, [texts.length, subTexts.length]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToPrevious}>
        ❮
      </button>
      <div className="carousel-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`carousel-image ${isTransitioning ? 'fade-out' : ''}`}
        />
        <div className="carousel-text">
          {texts[currentTextIndex]}
        </div>
        <div className="carousel-subtext">
          {subTexts[currentSubTextIndex]}
        </div>
      </div>
      <button className="carousel-button right" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
