import React from 'react';
import Carousel from '../components/Carousel.tsx';
import Events from '../components/Event.tsx';
import { upcomingEvents } from '../interfaces/eventInterfaces.tsx';
import BibleContent from '../contents/BibleContent.tsx';
import LeaderProfile from '../components/LeaderProfile.tsx';

import Article from '../components/Article.tsx';

const Content: React.FC = () => {
  const images = [
    '/images/carousel1.jpg',
    '/images/carousel2.jpg',
    '/images/carousel3.jpg',
    '/images/carousel4.jpg'
  ];

  return (
    <div>
     <Carousel images={images} />
     <div className="logo-container">
      <div className="logo">
        <p>
        Kunjungi gereja kami, ikuti acara-acara kami, dan terhubunglah dengan komunitas kami - 
        </p>
      </div>
      <div className="logo">
        <p>
        Kunjungi gereja kami, ikuti acara-acara kami, dan terhubunglah dengan komunitas kami
        </p>
    </div>
  </div>
     <Events events={upcomingEvents} />
      <BibleContent/>
      <LeaderProfile/>
      <Article/>
    </div>
  );
};

export default Content;
