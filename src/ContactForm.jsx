import React, { useState ,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {

  useEffect(() => {
    AOS.init({ duration: 1500}); // Adjust duration and other options as needed
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
   
    try {
        setSubmitting(true);
  
        const response = await fetch('https://formspree.io/f/xvoepeyy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully');
          setSuccess(true);
          // Reset form after submission
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('Error submitting form');
          setSuccess(false);
        }
      } catch (error) {
        console.error('Error submitting form', error);
        setSuccess(false);
      } finally {
        setSubmitting(false);
      }
  };

  return (
    <div id="contact" className="bg-white w-full mb-5" data-aos="fade-up">
      <div className="bg-gradient-to-r from-indigo-900 to-gray-800  p-8 rounded-md shadow-md mx-auto max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Contact Me</h2>
        {success ? (
          <div className="text-green-600 text-center mb-4">Email has been sent successfully!</div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
