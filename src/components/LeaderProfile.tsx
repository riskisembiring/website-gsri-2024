import React from 'react';
import '../styles/LeaderProfile.css';
import Leader from "../images/leadership.jpg";

const LeaderProfile: React.FC = () => {
  return (
    <div className="leader-container">
      <div className="text-content">
        <h1>Nama Pemimpin</h1>
        <h3>Jabatan Pemimpin</h3>
        <p>
          Kata-kata motivasi atau pesan yang ingin disampaikan. Ini bisa berupa ajakan, refleksi, 
          atau cerita inspiratif yang relevan dengan komunitas atau tujuan.
        </p>
        <p>
          Pesan tambahan untuk memperkuat hubungan, memberi semangat, atau menjelaskan visi dan misi 
          yang ingin dicapai bersama-sama dalam kepercayaan dan komitmen.
        </p>
        <button>Lihat Selengkapnya</button>
      </div>
      <div className="image-content">
        <img src="/images/leadership.jpg" alt="Leader" />
      </div>
    </div>
  );
};

export default LeaderProfile;
