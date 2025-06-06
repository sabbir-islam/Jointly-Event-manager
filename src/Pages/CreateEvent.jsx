import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    thumbnail: "",
    location: "",
    date: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      ...formData,
    };
    console.log("Event Data:", eventData);

    axios
      .post("https://jointly-event-management.vercel.app/events", eventData)
      .then((res) => {
        toast.success("Event Created Successfully");
        console.log(res.data);
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <div className="md:w-[80%] mx-auto mt-20">
      <div>
        <div className="bg-[#537D5D] rounded-t-2xl p-8">
          <h1 className="text-2xl font-semiboldbold text-white text-center font1">
            Create a Event
          </h1>
        </div>
        <div className="bg-[#537D5D] pb-5 rounded-b-2xl">
          <div className="max-w-2xl mx-auto px-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Event Description"
                className="textarea textarea-bordered w-full"
                onChange={handleChange}
                required
              />

              <select
                name="type"
                className="select select-bordered w-full"
                onChange={handleChange}
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
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
                onChange={handleChange}
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
  );
};

export default CreateEvent;
