'use client';

import { useEffect, useState } from 'react';

// Pages are prerendered when the site is built, so the server's year is
// passed in for the first render (hydration must match it), then replaced
// with the visitor's current year.
const CurrentYear = ({ initial }) => {
    const [year, setYear] = useState(initial);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return year;
};

export default CurrentYear;
