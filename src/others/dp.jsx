import React, { useState, useEffect } from 'react';
import axios from 'axios';
import URL from "./variables.js"
import dp from '/photo_2.jpg'

const Dp = () => {
    const [imageSrc, setImageSrc] = useState(''); // State to hold the image source
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(''); // Error state

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`${URL}/dp`); // Fetch image from the API
                setImageSrc(response.data.dp); // Assuming the API returns an object with the key 'dp' containing the image URL
            } catch (err) {
                setImageSrc(dp)
                //setError('Error fetching image');
                //console.error('Error fetching image:', err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchImage();
    }, []);

    return (
        <div className="circular-image-container">
            {loading ? ( // Conditional rendering based on loading state
                <p>Loading...</p>
            ) : error ? ( // Display error if there is one
                <p className="error-message">{error}</p>
            ) : (
                <img src={imageSrc} alt="Display" className="circular-image" /> // Display the fetched image
            )}
        </div>
    );
};

export default Dp;
