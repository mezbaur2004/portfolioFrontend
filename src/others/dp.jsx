import React from 'react';
import profile from "../lib/profile.json";

const Dp = () => {
    return (
        <div className="circular-image-container">
            <img src={profile.photo} alt={profile.name} className="circular-image" />
        </div>
    );
};

export default Dp;
