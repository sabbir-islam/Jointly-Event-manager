import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const MyEvents = ({ ev }) => {
  const { title, thumbnail ,date ,location,type ,_id} = ev

  return (
    <div>
      <div>
        <img
          className="w-[400px] h-[280px] rounded-t-xl"
          src={thumbnail}
          alt=""
        />
        <div className="flex flex-col justify-start items-start bg-5 p-4 md:w-[400px] h-[280px] rounded-b-xl gap-3">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-medium text-gray-500 flex flex-col">
              {" "}
              {date} <span className="">{type} Event</span>
            </p>
            <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
            <p className="text-base font-medium text-gray-500 flex items-center gap-2">
              {" "}
              <FaLocationDot size={20} /> {location}
            </p>
          </div>
          <div>
            <Link to={`/my-events/${_id}`}>
              <button className="btn bg-slate-900 text-white">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
