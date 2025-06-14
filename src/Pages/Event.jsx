import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const Event = ({ events }) => {
  const { title, thumbnail ,date ,location,type ,_id} = events;

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
    <div>
        <img
          className="w-[400px] h-[280px] rounded-t-xl"
          src={thumbnail}
          alt=""
        />
      <div className="flex flex-col justify-start items-start bg-5 p-4 md:w-[400px] h-[280px] rounded-b-xl gap-3">
        <div className="flex flex-col gap-3">
            <p className="text-lg font-medium text-gray-500 flex flex-col"> {formatDate(date)} <span className="">{type} Event</span></p>
            <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
            <p className="text-base font-medium text-gray-500 flex items-center gap-2"> <FaLocationDot size={20} /> {location}</p>
        </div>
        <div>
            <Link to={`/upcoming-events/${_id}`}><button className="btn bg-slate-900 text-white">View event</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
