// File: src/components/RSVPForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RSVPForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example using Formspree (replace with your form ID)
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      onSubmitSuccess();
    } else {
      alert('There was a problem submitting your RSVP. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mx-auto animate-fade-in" style={{ maxWidth: '500px' }}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Will you attend?</option>
          <option value="yes">Yes, can't wait!</option>
          <option value="no">Sadly, I can't</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="dark" className="w-100">Submit</Button>
    </Form>
  );
};

export default RSVPForm;
