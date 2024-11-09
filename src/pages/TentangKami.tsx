import React, { useState } from 'react';
import "../styles/TentangKami.css";

const About: React.FC = () => {
  const [showAlbum, setShowAlbum] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/AlbumGsri/IMG_5927.JPG",
    "/images/AlbumGsri/IMG_5928.JPG",
    "/images/AlbumGsri/IMG_5929.JPG",
    "/images/AlbumGsri/IMG_5930.JPG",
    "/images/AlbumGsri/IMG_5931.JPG",
    "/images/AlbumGsri/IMG_5932.JPG",
    "/images/AlbumGsri/IMG_5933.JPG",
    "/images/AlbumGsri/IMG_5934.JPG",
    "/images/AlbumGsri/IMG_5935.JPG",
    "/images/AlbumGsri/IMG_5936.JPG",
    "/images/AlbumGsri/IMG_5937.JPG",
    "/images/AlbumGsri/IMG_5939.JPG",
    "/images/AlbumGsri/IMG_5940.JPG",
    "/images/AlbumGsri/IMG_5941.JPG",
    "/images/AlbumGsri/IMG_5942.JPG",
    "/images/AlbumGsri/IMG_5943.JPG",
    "/images/AlbumGsri/IMG_5944.JPG",
    "/images/AlbumGsri/IMG_5945.JPG",
  ];

  const handleShowAlbum = () => {
    setShowAlbum(true);
  };

  const handleCloseAlbum = () => {
    setShowAlbum(false);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Selamat Datang di GSRI</h1>
        <p>Gereja yang dipenuhi dengan kasih dan kuasa Roh Kudus</p>
      </div>
      <section className="about-section">
        <h2>Visi Kami</h2>
        <p>
          Menjadi gereja yang dipenuhi dengan kuasa Roh Kudus, membagikan kasih Tuhan, dan membawa transformasi hidup
          melalui Firman Allah yang hidup.
        </p>
      </section>

      <section className="about-section">
        <h2>Misi Kami</h2>
        <ul>
          <li><strong>Menggali Firman Tuhan:</strong> Kami mengajarkan Firman Tuhan dengan cara yang relevan dan mendalam.</li>
          <li><strong>Mengalami Kuasa Roh Kudus:</strong> Kami percaya Roh Kudus bekerja dalam kehidupan kami, memberikan kekuatan dan karunia rohani.</li>
          <li><strong>Melayani Sesama:</strong> Kami melayani dengan kasih kepada sesama melalui berbagai kegiatan sosial.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Sejarah Kami</h2>
        <p>
          GSRI dimulai dengan sekelompok orang yang memiliki hasrat untuk memperkenalkan kuasa Roh Kudus dalam kehidupan
          sehari-hari. Seiring waktu, kami berkembang dan menjadi komunitas yang penuh dengan semangat.
        </p>
        <button className="btn-album" onClick={handleShowAlbum}>Lihat Album Sejarah GSRI</button>
        {showAlbum && (
          <div className="album-modal">
            <h3>Album Sejarah GSRI</h3>
            <p>Album sejarah GSRI yang menginspirasi perjalanan iman kami.</p>
            <div className="album-carousel">
              <button className="btn-prev" onClick={handlePrevImage}>←</button>
              <img src={images[currentImageIndex]} alt={`Sejarah GSRI ${currentImageIndex + 1}`} className="carousel-image" />
              <button className="btn-next" onClick={handleNextImage}>→</button>
            </div>
            <button className="btn-close" onClick={handleCloseAlbum}>Tutup Album</button>
          </div>
        )}
      </section>

      <section className="about-section">
        <h2>Nilai-nilai Kami</h2>
        <ul>
          <li><strong>Kasih:</strong> Kami berkomitmen untuk saling mencintai seperti Tuhan mencintai kita.</li>
          <li><strong>Pengajaran Firman:</strong> Firman Tuhan adalah dasar hidup kami yang terus kami gali dan terapkan dalam hidup.</li>
          <li><strong>Komunitas:</strong> Kami mendorong semua orang untuk menjadi bagian dari keluarga besar GSRI.</li>
        </ul>
      </section>

      <div className="about-footer">
        <p>Gabunglah dengan kami dalam perjalanan rohani ini, dan rasakan perubahan hidup yang luar biasa!</p>
      </div>
    </div>
  );
};

export default About;
