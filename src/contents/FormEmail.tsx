import React, { useState } from 'react';
import '../styles/FormEmail.css';
import emailjs from 'emailjs-com';

interface FormData {
  nama: string;
  email: string;
  telepon?: string;
  subject: string;
  pesan: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: '',
    email: '',
    telepon: '',
    subject: '',
    pesan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = 'YOUR_SERVICE_ID'; // Ganti dengan Service ID dari EmailJS
    const templateId = 'YOUR_TEMPLATE_ID'; // Ganti dengan Template ID dari EmailJS
    const userId = 'YOUR_USER_ID'; // Ganti dengan User ID dari EmailJS

    emailjs.send(serviceId, templateId, formData, userId)
      .then(response => {
        console.log('Email terkirim!', response.status, response.text);
      })
      .catch(err => {
        console.error('Gagal mengirim email:', err);
      });
  };

    const handleClick = () => {
      window.open('https://wa.me/628123456789', '_blank');
    };

  return (
    <div className='form-wrapper'>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Kirim Email</h2>
        <div className="form-group">
          <label htmlFor="nama">Nama *</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telepon">Telepon</label>
          <input
            type="tel"
            id="telepon"
            name="telepon"
            value={formData.telepon || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pesan">Pesan *</label>
          <textarea
            id="pesan"
            name="pesan"
            rows={4}
            value={formData.pesan}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Kirim</button>
        
      </form>
    </div>
    
    <div className="wa-container">
    <h2>Hubungi Kami via WhatsApp</h2>
    <button onClick={handleClick} className="whatsapp-button">
        WhatsApp
      </button>
    <p>Kami siap membantu Saudara/i dengan segala pertanyaan atau kebutuhan.</p>
  </div>
  </div>
  );
};

export default FormComponent;
