import React from "react";
import "../styles/Contact.css";
import FormEmail from "../contents/FormEmail.tsx";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
    <div className="contact-container">
      <h2>Hubungi Kami</h2>
      <h3>Silahkan menghubungi kami untuk informasi lebih lanjut</h3>
      </div>
      <FormEmail></FormEmail>
      <h2 className="maps-title">Maps</h2>
      <div className="map-container" style={{display: 'flex', justifyContent: 'center'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.3751671755786!2d98.6035384922749!3d3.5003146635585063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312454ba43df59%3A0x5ef9be191e7ecb3d!2sGSRI%20Medan%20Sidomulyo%20(Gereja%20Sidang%20Roh&#39;ul%20Kudus%20Indonesia)!5e0!3m2!1sid!2sid!4v1731016403865!5m2!1sid!2sid"
          width="1200" 
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <div className="go-to-map">
        <a
          href="https://www.google.com/maps/place/GSRI+Medan+Sidomulyo+(Gereja+Sidang+Roh'ul+Kudus+Indonesia)/@3.4998585,98.6112268,17z/data=!3m1!4b1!4m6!3m5!1s0x30312454ba43df59:0x5ef9be191e7ecb3d!8m2!3d3.4998585!4d98.6112268!16s%2Fg%2F11bzq39qpc?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="go-to-map-btn">Pergi ke Map</button>
        </a>
      </div>
      <br></br>
    </div>
  );
};

export default Contact;
