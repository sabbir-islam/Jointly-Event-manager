import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import MyEvents from "./MyEvents";

const ManageEvent = () => {
  const eventsData = useLoaderData();
  const { user } = use(AuthContext);

  const myEvents = eventsData.filter((event) => event.userEmail === user?.email);

  console.log("Filtered Events:", myEvents);

  console.log("User email:", user?.email);

  return (
    <div className="w-[80%] mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 my-10">
      {myEvents.map((ev) => (
        <MyEvents key={ev._id} ev={ev}></MyEvents>
      ))}
    </div>
  );
};

export default ManageEvent;
