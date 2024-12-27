import React, { useState } from 'react';
import './Contact.css';
import contact from '../../assets/contact me.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'; // Import emailjs

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.send('service_2wp0sza', 'template_0faw6si', formData, '1xPVZegvtwU-E-XYS')
      .then((response) => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields after success
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contact} alt="Fashion Models" />
      </div>
      <div className="contact-form">
        <h1 className='contact1'>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Contact Me</button>
        </form>
      </div>
      <div className="contact-info">
        <p><strong>Contact</strong></p>
        <p>muhammedsafnadck5@gmail.com</p>
        <p>+91 7306 538 130</p>
        <p><strong>Based in</strong></p>
        <p>Kerala, India</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/muhammed-safnad-ck-697317341/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/safnadck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
