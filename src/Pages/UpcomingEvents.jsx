import React from 'react';
import { useLoaderData } from 'react-router';
import Event from './Event';

const UpcomingEvents = () => {
    const data = useLoaderData()
    const now = new Date();

    const upcomingEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= now;
  });

  
    
    return (
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-center my-10 gap-2 '>
            {
                upcomingEvents.map((events)=><Event events={events}></Event>)
            }
        </div>
    );
};

export default UpcomingEvents;