import React from 'react';
import { useLoaderData } from 'react-router';

const EventDetail = () => {
    const eventData = useLoaderData()
    const {title,description,type,thumbnail,location,date} = eventData

    const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    };
    return date.toLocaleString("en-US", options);
  };
    
    return (
        <div className='w-[80%] mx-auto my-20 '>
            <div className='flex flex-col justify-between items-center'>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                <img className='rounded-xl md:w-[620px] h-[350px]' src={thumbnail} alt="" />
                <div className='flex flex-col gap-4 w-[350px] md:w-[450px]'>
                    <p className='text-xl font-medium'>{type}</p>
                    <h1 className='text-3xl font-bold text-shadow-sky-900'>{title}</h1>
                    <p className='text-xl font-normal'>{location}</p>
                    <p className='text-xl font-normal'>{formatDate(date)}</p>
                    <div>
                        <button className='btn w-full bg-blue-950 text-white'>Join The Event</button>
                    </div>
                </div>
            </div>
            </div>
            <p className='text-lg font-normal mt-7 md:max-w-[680px]'>Description: {description}</p>
        </div>
    );
};

export default EventDetail;