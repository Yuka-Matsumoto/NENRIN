'use client';

import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = ({ jobId }) => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/apply', { jobId });
        setStatus(response.data.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">応募する</button>
            {status && <p>{status}</p>}
        </form>
    );
};

export default ApplicationForm;
