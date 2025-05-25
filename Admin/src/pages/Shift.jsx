import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaSync } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon bug with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const ShiftList = () => {
  const [shifts, setShifts] = useState([]);
  const [selectedShift, setSelectedShift] = useState(null);

  useEffect(() => {
    fetchShifts();
  }, []);

  const fetchShifts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/shift/get");
      setShifts(res.data);
    } catch (err) {
      console.error("Failed to fetch shifts", err);
    }
  };

  const updateStatus = async (shiftId, currentStatus) => {
    try {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        let nextStatus =
          currentStatus === "assigned"
            ? "in_progress"
            : currentStatus === "in_progress"
            ? "resolved"
            : null;

        if (!nextStatus) return;

        await axios.put(`http://localhost:5000/api/shift/update/${shiftId}`, {
          status: nextStatus,
          lat,
          lng,
        });

        fetchShifts(); // Refresh data
      });
    } catch (err) {
      console.error("Failed to update shift", err);
    }
  };

  const renderMap = (coords, label) => {
    if (!coords?.lat || !coords?.lng) {
      return (
        <p className="text-sm text-gray-500 italic">
          No {label} location recorded.
        </p>
      );
    }

    return (
      <MapContainer
        center={[coords.lat, coords.lng]}
        zoom={15}
        style={{ height: "200px", width: "100%", borderRadius: "0.5rem" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coords.lat, coords.lng]}>
          <Popup>{label} Location</Popup>
        </Marker>
      </MapContainer>
    );
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">
        Assigned Shifts
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-emerald-100">
            <tr>
              <th className="px-6 py-3">Employee</th>
              <th className="px-6 py-3">Incident</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Start</th>
              <th className="px-6 py-3">End</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {shifts.map((shift) => (
              <tr key={shift._id}>
                <td className="px-6 py-4">{shift.assignedTo?.name}</td>
                <td className="px-6 py-4">{shift.incident?.title}</td>
                <td className="px-6 py-4 capitalize">{shift.status}</td>
                <td className="px-6 py-4">{shift.startTime?.slice(0, 16)}</td>
                <td className="px-6 py-4">{shift.endTime?.slice(0, 16)}</td>
                <td className="px-6 py-4 text-center space-x-4">
                  <button
                    onClick={() => setSelectedShift(shift)}
                    title="View"
                    className="text-emerald-600 hover:text-emerald-900"
                  >
                    <FaEye />
                  </button>
                  {shift.status !== "resolved" && (
                    <button
                      onClick={() => updateStatus(shift._id, shift.status)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Update Status"
                    >
                      <FaSync />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedShift && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedShift(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              ✖
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-800">
              Shift Details
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p>
                  <strong>Employee:</strong> {selectedShift.assignedTo?.name}
                </p>
                <p>
                  <strong>Incident:</strong> {selectedShift.incident?.title}
                </p>
                <p>
                  <strong>Status:</strong> {selectedShift.status}
                </p>
              </div>
              <div>
                <p>
                  <strong>Start:</strong>{" "}
                  {selectedShift.startTime?.slice(0, 16)}
                </p>
                <p>
                  <strong>End:</strong> {selectedShift.endTime?.slice(0, 16)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">
                  Clock-In Location
                </h4>
                {renderMap(selectedShift.clockInLocation, "Clock-In")}
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">
                  Clock-Out Location
                </h4>
                {renderMap(selectedShift.clockOutLocation, "Clock-Out")}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftList;
