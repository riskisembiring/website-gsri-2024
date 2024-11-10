import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const ChurchFooter = () => {
  return (
    <footer className="church-footer-container">
      <div className="church-footer-content">
        <div className="footer-section about">
          <h4>Tentang Gereja</h4>
          <p>
          GSRI adalah Gereja yang mengutamakan hubungan pribadi dengan Tuhan melalui kuasa Roh Kudus. 
          Kami percaya bahwa Roh Kudus bekerja di tengah-tengah jemaat, memberikan penghiburan, 
          kekuatan, dan karunia rohani untuk memperluas Kerajaan Allah dan melayani sesama dengan 
          kasih yang sejati. Di GSRI, setiap ibadah dan pelayanan menjadi kesempatan untuk mengalami 
          kehadiran Roh Kudus yang memulihkan, membangun, dan membawa perubahan nyata.
          </p>
        </div>

        <div className="footer-section contact">
          <h4>Hubungi Kami</h4>
          <p>Email: infoGsri@gmail.com</p>
          <p>Telepon: +123 456 7890</p>
          <p>Alamat: Jalan Letjen Jamin Ginting, Medan Tuntungan, Sidomulyo, Medan, Kota Medan, Sumatera Utara 20137</p>
          <a style={{ textDecoration: 'none'}} href="https://website-gsri-2024.vercel.app/">Website: https://website-gsri-2024.vercel.app/</a> 
        </div>

        <div className="footer-section services">
          <h4>Jam Pelayanan</h4>
          <p>Minggu: 08:30 - 11:00 (Ibadah Anak)</p>
          <p>Minggu: 11.00 - 13:00 (Ibadah Utama)</p>
          <p>Senin: 19.30 - 22:00 (Ibadah Pengerja)</p>
          <p>Rabu: 19:00 - 22:00 (Ibadah Jabu-jabu)</p>
          <p>Sabtu: 18:00 - 20:00 (Ibadah Muda-mudi)</p>
        </div>

        <div className="footer-section social">
          <h4>Ikuti Kami</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} GSRI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ChurchFooter;
