import React from 'react';
import '../styles/BibleContent.css';

const BibleContent: React.FC = () => {
    return (
      <div className="home-content">
        <div className="bible-image">
          <img src="/images/alkitab.png" alt="Bible" />
        </div>
        <div className="bible-verses">
          <p>
            "Sebab Allah begitu mengasihi dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal." - Yohanes 3:16
          </p>
          <p>
            "Tuhan adalah gembalaku, takkan kekurangan aku." - Mazmur 23:1
          </p>
        </div>
      </div>
    );
  };

export default BibleContent;
