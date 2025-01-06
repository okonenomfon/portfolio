import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_fpd91cp';
    const templateID = 'template_4uurjss';
    const userID = 'j9ewaJ3GR9b_hw-rn';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setFormStatus('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setFormStatus('Failed to send your message. Please try again.');
        console.error('Error sending email:', error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-[#f9f9f9]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        {formStatus && <p className={`mb-4 ${formStatus.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>{formStatus}</p>}

        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
