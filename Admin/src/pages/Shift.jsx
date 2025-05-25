import React, { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

const dummyShifts = [
  {
    _id: "1",
    employeeName: "John Doe",
    incidentTitle: "Illegal Waste Dumping",
    status: "assigned",
    start_time: "2025-05-24 08:00",
    end_time: "2025-05-24 12:00",
  },
  {
    _id: "2",
    employeeName: "Jane Smith",
    incidentTitle: "Air Quality Concern",
    status: "completed",
    start_time: "2025-05-24 13:00",
    end_time: "2025-05-24 17:00",
  },
];

const ShiftList = () => {
  const [shifts, setShifts] = useState(dummyShifts);
  const [selectedShift, setSelectedShift] = useState(null);

  const closeModal = () => {
    setSelectedShift(null);
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8 sm:px-6 lg:px-8 relative">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center sm:text-left">
        Assigned Shifts
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-emerald-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Incident
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Start Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                End Time
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shifts.map((shift) => (
              <tr
                key={shift._id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 text-sm text-gray-900">
                  {shift.employeeName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {shift.incidentTitle}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 text-xs font-semibold rounded-full ${
                      shift.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {shift.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {shift.start_time}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {shift.end_time}
                </td>
                <td className="px-6 py-4 text-sm text-center space-x-6">
                  <button
                    title="View"
                    onClick={() => setSelectedShift(shift)}
                    className="text-emerald-600 hover:text-emerald-900"
                  >
                    <FaEye className="inline h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(shift._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash className="inline h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Popup */}
      {selectedShift && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold text-emerald-900 mb-4">
              Shift Details
            </h3>
            <div className="space-y-3">
              <p>
                <strong>Employee:</strong> {selectedShift.employeeName}
              </p>
              <p>
                <strong>Incident:</strong> {selectedShift.incidentTitle}
              </p>
              <p>
                <strong>Status:</strong> {selectedShift.status}
              </p>
              <p>
                <strong>Start Time:</strong> {selectedShift.start_time}
              </p>
              <p>
                <strong>End Time:</strong> {selectedShift.end_time}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftList;
