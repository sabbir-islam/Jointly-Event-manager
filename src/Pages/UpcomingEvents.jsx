import React from "react";
import { useLoaderData, useSearchParams, useNavigate } from "react-router";
import Event from "./Event";

const UpcomingEvents = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const now = new Date();

  const upcomingEvents = data.filter(event => new Date(event.date) >= now);

  const searchText = searchParams.get("search") || "";
  const eventType = searchParams.get("eventType") || "";

  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    navigate(`/upcoming-events?${params.toString()}`);
  };

  const handleEventTypeChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("eventType", value);
    } else {
      params.delete("eventType");
    }
    navigate(`/upcoming-events?${params.toString()}`);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center my-6 gap-4">
        <input
          type="text"
          placeholder="Search events by name"
          value={searchText}
          onChange={handleSearchChange}
          className="border border-gray-400 rounded px-3 py-1 flex-grow"
        />
        <select
          value={eventType}
          onChange={handleEventTypeChange}
          className="border border-gray-400  rounded px-3 py-1 text-gray-500"
        >
          <option value="">All Event Types</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center my-10 gap-2">
        {upcomingEvents.length === 0 && <p>No upcoming events found.</p>}
        {upcomingEvents.map(event => (
          <Event key={event._id} events={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
