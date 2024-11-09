import React, { useState, useEffect } from 'react';
import '../styles/Article.css';
// import ArticleImage from "article.jpg";

interface Article {
  title: string;
  author: string;
  content: string;
  imageUrl?: string;
}

const articles: Article[] = [
  {
    title: "",
    author: "— Ibrani 11:1 (Alkitab)",
    content: `"Iman adalah dasar dari segala sesuatu yang kita harapkan dan bukti dari segala sesuatu yang tidak kita lihat."`,
    imageUrl: "/images/article2.jpg",
  },
  {
    title: "",
    author: "— Amsal 3:5",
    content: `"Percayalah kepada Tuhan dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri."`,
    imageUrl: "/images/article2.jpg",
  },
  {
    title: "",
    author: "— Yohanes 14:6",
    content: `"Yesus berkata kepadanya, 'Akulah jalan, kebenaran, dan hidup. Tidak ada seorang pun yang datang kepada Bapa, kalau tidak melalui Aku."`,
    imageUrl: "/images/article2.jpg",
  },
  {
    title: "",
    author: "— Yesaya 40:31",
    content: `"Tetapi mereka yang menanti-nantikan Tuhan mendapat kekuatan baru, mereka seumpama rajawali yang naik terbang dengan kekuatan sayapnya; mereka berlari dan tidak menjadi lesu, mereka berjalan dan tidak menjadi lelah."`,
    imageUrl: "/images/article2.jpg",
  },
];

const ArticleSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const goToSlide =  (index: number) => {
    setCurrentIndex(index);
    setIsVisible(true);

    setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % articles.length);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  const visibleArticles: Article[] = [
    articles[currentIndex],
    articles[(currentIndex + 1) % articles.length], // wrap-around
  ];

  return (
    <div className="slider-container">
        <div className={isVisible ? 'slide-in' : ''}>
      <div className="articles-content">
        {visibleArticles.map((article, index) => (
          <div key={index} className="article-item">
            <div className="image-container">
              <img
                src={article.imageUrl}
                alt={`Article ${article.title}`}
                className="article-image"
              />
              <div className="article-text">
                <h2>{article.title}</h2>
                <h4>{article.author}</h4>
                <p>{article.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="navigation-dots">
        {/* Navigasi menampilkan pasangan */}
        {articles.map((_, index) => (
          index % 2 === 0 && ( // Tampilkan navigasi hanya untuk pasangan pertama dari setiap set
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ArticleSlider;
