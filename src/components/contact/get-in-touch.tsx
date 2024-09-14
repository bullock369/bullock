'use client';

import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address:'',
    message: '',
    subject: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address:'',
    message: '',
    subject: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '', address:'', message: '', subject: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid.';
      isValid = false;
    }
    if (!formData.address) {
      newErrors.address = 'Address is required.';
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = 'Subject is required.';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.statusText}`);
      }

      // Show success toast message
      toast.success('Form submitted successfully!');

      // Clear form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        address:'',
        message: '',
        subject: '',
      });
      setErrors({
        name: '',
        email: '',
        phone: '',
        address:'',
        message: '',
        subject: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again later.');
    }
  };

  return (
    <>
      <div className="contact-area py-120">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-content">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="flaticon-location-pin" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Office Address</h5>
                      <p>178 Jantanagar, Odhav Ahmedabad</p>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Call Us</h5>
                      <p>+91 9429941595</p>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="flaticon-email" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Email Us</h5>
                      <p>rahul.000.888.777@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-info border-0">
                    <div className="contact-info-icon">
                      <i className="flaticon-time" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Open Time</h5>
                      <p>Mon - Sat (10.00AM - 7.00PM)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form">
                  <div className="contact-form-header">
                    <h2>Get In Touch</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page randomised
                      words which don&apos;t look even slightly when looking at its
                      layout.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <div className="error-message">{errors.name}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        placeholder="Your Phone No"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <div className="error-message">{errors.phone}</div>}
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Your Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors.address && <div className="error-message">{errors.address}</div>}
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Your Query"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <div className="error-message">{errors.subject}</div>}
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols={30}
                        rows={5}
                        className="form-control"
                        placeholder="Write Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <div className="error-message">{errors.message}</div>}
                    </div>
                    <button type="submit" className="theme-btn">
                      Send Message <i className="far fa-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
      {/* Toast container to display notifications */}
      <ToastContainer />
    </>
  );
};

export default GetInTouch;
