import React, { useState } from 'react';
import '../styles/PastoryEvent.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  { src: "/images/IMG_5906.jpeg", alt: 'Image 1' },
  { src: "/images/IMG_5907.jpeg", alt: 'Image 2' },
  { src: "/images/IMG_5908.jpeg", alt: 'Image 3' },
  { src: "/images/IMG_5909.jpeg", alt: 'Image 4' },
  { src: "/images/IMG_5910.jpeg", alt: 'Image 5' },
  { src: "/images/IMG_5911.jpeg", alt: 'Image 6' },
  { src: "/images/IMG_5912.jpeg", alt: 'Image 7' },
  { src: "/images/IMG_5913.jpeg", alt: 'Image 8' },
  { src: "/images/IMG_5914.jpeg", alt: 'Image 9' },
  { src: "/images/IMG_5915.jpeg", alt: 'Image 10' },
];

const ImageModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="modal-image" />
        ) : (
          <div className="image-gallery">
            {images.map((image, index) => (
              <div key={index} className="image-frame" onClick={() => handleImageClick(image.src)}>
                <img src={image.src} alt={image.alt} className="gallery-image" />
              </div>
            ))}
          </div>
        )}
        <button className="close-button" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
