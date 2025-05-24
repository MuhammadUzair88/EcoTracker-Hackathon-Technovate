import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function CreateStaff() {
  const [staff, setStaff] = useState([]);
  const { incidentId } = useParams();
  const navigate = useNavigate();

  const fetchStaff = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/staff/get");
      setStaff(res.data.staff);
    } catch (error) {
      console.error("Failed to fetch staff", error.message);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const [formData, setFormData] = useState({
    assignedTo: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      assignedTo: formData.assignedTo,
      incident: incidentId,
      startTime: formData.startTime,
      endTime: formData.endTime,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/shift/create",
        payload
      );
      if (res.status === 201 || res.status === 200) {
        alert("Shift created successfully!");
        navigate("/"); // Redirect after creation
      }
    } catch (error) {
      console.error("Error creating shift:", error);
      alert("Failed to create shift.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-green-50 shadow-lg p-6 rounded-xl space-y-5 mt-10"
    >
      <h2 className="text-2xl font-bold text-green-700 mb-4">Create Shift</h2>

      {/* Assigned Staff */}
      <div>
        <label className="block text-green-800 font-medium mb-1">
          Assign To
        </label>
        <select
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="" disabled>
            Select Staff
          </option>
          {staff.map((staff) => (
            <option key={staff._id} value={staff._id}>
              {staff.name}
            </option>
          ))}
        </select>
      </div>

      {/* Start Time */}
      <div>
        <label className="block text-green-800 font-medium mb-1">
          Start Time
        </label>
        <input
          type="datetime-local"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* End Time */}
      <div>
        <label className="block text-green-800 font-medium mb-1">
          End Time
        </label>
        <input
          type="datetime-local"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
        >
          Create Shift
        </button>
      </div>
    </form>
  );
}
