import React, { useState } from "react";
import "../styles/Event.css";
import { Button, Modal } from "antd";
import Table from '../components/Tablenatal.tsx'; 
import ImageModal from '../components/PastoryEvent.tsx';

interface Event {
  name: string;
  date: string;
  image: string;
  btnText: string;
}

interface EventsProps {
  events: Event[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPastoryModalOpen, setIsPastoryModalOpen] = useState<boolean>(false);

  const openModal = () => setIsPastoryModalOpen(true);
  const closeModal = () => setIsPastoryModalOpen(false);

  const handleImageClick = (index: number) => {
    if (index === 0) {
      setIsModalOpen(true);
    }
    if (index === 1) {
        openModal();
      }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="events-container">
      <h2>WARTA GEREJA</h2>
      <div className="nav-buttons">
        <button className="nav-button left" onClick={goToPrevious}>
          ❮
        </button>
        <button className="nav-button right" onClick={goToNext}>
          ❯
        </button>
      </div>

      <div className="event-cards">
        {events.map((event, index) => (
          <div
            key={index}
            className={`event-card ${index === currentIndex ? "active" : ""}`}
          >
            <div className="image-container">
              <img
                src={event.image}
                alt={event.name}
                className="event-image"
              />
            </div>
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
              <Button type="primary" onClick={() => handleImageClick(index)}>{event.btnText}</Button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && <Table onCancel={handleCloseModal} />}
      <ImageModal isOpen={isPastoryModalOpen} onClose={closeModal}/>
    </div>
  );
};

export default Events;
