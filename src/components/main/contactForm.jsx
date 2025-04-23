import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // React Router hook for navigation

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Combine all the data into the message field
        const combinedMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
        `;

        // Create a new object to send to emailjs
        const dataToSend = {
            name: formData.name,
            email: formData.email,
            message: combinedMessage, // This is the combined message
        };

        // Use emailjs to send the combined data
        emailjs.send('service_3frv55p', 'template_zdrp7ii', dataToSend, 'm2FbwP8KXotwIWMDa')
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true); // Show success message
            }, (error) => {
                console.log(error.text);
            });

        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    // Function to navigate back to homepage
    const goToHomePage = () => {
        navigate('/'); // Navigates to homepage
    };

    return (
        <div className="container">
            <h2 className="section-title text-warning">Contact Me</h2>

            {/* If form is submitted, show thank-you message */}
            {isSubmitted ? (
                <div>
                    <p>Thank you for contacting me! I will get back to you soon.</p>
                    {/* Button to navigate to homepage */}
                    <button className="btn btn-primary btn-lg" onClick={goToHomePage}>
                        Go to Homepage
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
