import React from "react";
import { useLoaderData } from "react-router";

const JoinedEvents = () => {
  const joinedData = useLoaderData();
  return (
    <div className="w-[80%] mx-auto my-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>No</label>
              </th>
              <th>Event Name</th>
              <th>Type</th>
              <th>location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {joinedData.map((j, index) => (
              <tr>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={j.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{j.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-base font-bold">{j.type}</p>
                </td>
                <td>
                  <p className="text-base font-bold ml-5">
                    {j.location}
                  </p>
                </td>
                {/* <th>
                  <Link to={`/all-plant/${p._id}`}>
                    <button className="btn btn-ghost btn-xs bg-green-900 text-gray-200">
                      Details
                    </button>
                  </Link>
                </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JoinedEvents;
