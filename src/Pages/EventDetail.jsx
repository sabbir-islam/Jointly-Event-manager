import React from 'react';
import { useLoaderData } from 'react-router';

const EventDetail = () => {
    const eventData = useLoaderData()
    console.log(eventData);
    
    return (
        <div>
            
        </div>
    );
};

export default EventDetail;