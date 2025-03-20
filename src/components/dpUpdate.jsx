import { useState, useEffect } from 'react';
import URL from "../others/variables.js"
import axios from 'axios';
import '../css/dpUpdate.css'; // Ensure this CSS file exists for styling

const DpUpdate = () => {
    const [dpData, setDpData] = useState(''); // State to hold the image URL
    const [preview, setPreview] = useState(''); // Preview of the entered image URL
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isNew, setIsNew] = useState(true); // Determine if it's create or update

    useEffect(() => {
        const fetchDpData = async () => {
            try {
                const token = localStorage.getItem('jwt'); // Retrieve the token
                if (!token) {
                    setError('No token found');
                    return;
                }

                const response = await axios.get(`${URL}/about`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data && response.data.dp) {
                    setDpData(response.data.dp); // Set the DP URL if it exists
                    setPreview(response.data.dp); // Set the preview to the existing DP URL
                    setIsNew(false); // If data exists, it's an update
                } else {
                    setIsNew(true); // No data means it's a new DP creation
                }
            } catch (err) {
                setError('Error fetching DP data');
                console.error('Error fetching DP data:', err);
            }
        };

        fetchDpData();
    }, []);

    const handleInputChange = (e) => {
        const dpUrl = e.target.value;
        setDpData(dpUrl); // Set the input value as the DP URL
        setPreview(dpUrl); // Update the preview with the new URL
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        const token = localStorage.getItem('jwt');

        if (!token) {
            setError('No token found');
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };

            const dpPayload = { dp: dpData }; // Prepare payload with the DP URL

            // PUT request for both creating and updating DP
            const response = await axios.put(`${URL}/about`, dpPayload, config);

            if (response.status === 200 || response.status === 201) {
                setSuccess('DP updated successfully');
                setIsNew(false); // Set to false as the DP now exists
                setDpData(response.data.dp); // Update local state with the new DP
            } else {
                setError('Unexpected response status: ' + response.status);
            }
        } catch (err) {
            setError('Error updating DP');
            console.error('Error updating DP:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dp-update-container">
            <h2>{isNew ? 'Add Display Picture Link' : 'Update Display Picture Link'}</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            {/* Display existing DP preview if it exists */}
            {!isNew && (
                <div className="existing-dp">
                    <h3>Current Display Picture:</h3>
                    <img src={preview} alt="Current DP" className="dp-preview" />
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="dp">Display Picture URL</label>
                    <input
                        type="text"
                        id="dp"
                        name="dp"
                        value={dpData}
                        onChange={handleInputChange}
                        placeholder="Enter image URL"
                        required
                    />
                </div>
                {preview && (
                    <div className="preview-container">
                        <h3>New DP Preview:</h3>
                        <img src={preview} alt="New DP Preview" className="dp-preview" />
                    </div>
                )}
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : isNew ? 'Add' : 'Update'}
                </button>
            </form>
        </div>
    );
};

export default DpUpdate;
