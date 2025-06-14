import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";

const EditEvent = () => {
  const evData = useLoaderData();

  const [formData, setFormData] = useState({
    title:  "",
    description: "",
    type: "",
    thumbnail: "",
    location: "",
    date: null,
  });

  useEffect(() => {
  if (evData) {
    setFormData({
      title: evData.title || "",
      description: evData.description || "",
      type: evData.type || "",
      thumbnail: evData.thumbnail || "",
      location: evData.location || "",
      date: new Date(evData.date), 
    });
  }
}, [evData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
    };
    console.log("Event Data:", updatedData);

    axios
      .put(`https://jointly-event-management.vercel.app/events/${evData._id}`, updatedData)
      .then((res) => {
        toast.success("Event Updated Successfully");
        console.log(res.data);
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="md:w-[80%] mx-auto mt-20">
        <div>
          <div className="bg-[#537D5D] rounded-t-2xl p-8">
            <h1 className="text-2xl font-semiboldbold text-white text-center font1">
              Create a Event
            </h1>
          </div>
          <div className="bg-[#537D5D] pb-5 rounded-b-2xl">
            <div className="max-w-2xl mx-auto px-4">
              <form onSubmit={handleUpdate} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  value={formData.title}
                  required
                />

                <textarea
                  name="description"
                  placeholder="Event Description"
                  className="textarea textarea-bordered w-full"
                  onChange={handleChange}
                  value={formData.description}
                  required
                />

                <select
                  name="type"
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  value={formData.type}
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Donation">Donation</option>
                </select>

                <input
                  type="text"
                  name="thumbnail"
                  placeholder="Thumbnail Image URL"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  value={formData.thumbnail}
                  required
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  value={formData.location}
                  required
                />
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  placeholderText="Select a future date"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="submit"
                  className="btn text-white bg-3 border-0 w-full"
                >
                  Submit Event
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
