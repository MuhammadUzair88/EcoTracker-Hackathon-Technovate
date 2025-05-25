import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useAuth } from "../context/UserContext";

// Fix Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const statusColors = {
  new: "bg-gray-600/60",
  verified: "bg-blue-600/60",
  in_progress: "bg-yellow-500/90",
  resolved: "bg-green-600/60",
};

const UserDashboard = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/report/get/${user.id}`
        );
        setReports(response.data);
      } catch (error) {
        console.error("Failed to fetch reports", error);
      }
    };
    fetchReports();
  }, [user.id]);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-10 bg-green-50 min-h-screen">
      {!selectedReport ? (
        <>
          <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
            📋 My Reported Incidents
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {reports.map((report) => (
              <div
                key={report._id}
                className="bg-white border-l-4 border-green-600 p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-green-800 capitalize mb-2">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-1">
                    📂 <strong>Category:</strong> {report.category}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    🏷 <strong>Status:</strong>{" "}
                    <span
                      className={`text-white px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[report.status]
                      }`}
                    >
                      {report.status.replace("_", " ")}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedReport(report)}
                  className="mt-4 bg-green-700 hover:bg-green-800 text-white text-sm py-2 rounded-md shadow"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* Back button */}
          <button
            onClick={() => setSelectedReport(null)}
            className="mb-6 text-sm text-blue-600 hover:underline"
          >
            ← Back to all reports
          </button>

          {/* Centered Title and Time */}
          <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">
            {selectedReport.title}
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            🕓 Submitted: {new Date(selectedReport.createdAt).toLocaleString()}
          </p>

          {/* Report content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left: Report Details */}
            <div className="space-y-3">
              <p className="text-md text-gray-700">
                📂 <strong>Category:</strong> {selectedReport.category}
              </p>
              <p className="text-md text-gray-700">
                🏷 <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-white text-sm ${
                    statusColors[selectedReport.status]
                  }`}
                >
                  {selectedReport.status.replace("_", " ")}
                </span>
              </p>
              <p className="text-lg text-gray-700">
                📝 <strong>Description:</strong> {selectedReport.description}
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex flex-col items-center justify-start">
              {selectedReport.photoUrl ? (
                <>
                  <img
                    src={selectedReport.photoUrl}
                    alt="Incident"
                    className="w-full max-h-80 object-contain rounded-lg shadow bg-gray-100"
                  />
                  <a
                    href={selectedReport.photoUrl}
                    download={`report_${selectedReport._id}.jpg`}
                    className="text-sm text-blue-600 hover:underline mt-2"
                  >
                    ⬇️ View Image
                  </a>
                </>
              ) : (
                <div className="text-sm text-gray-500 italic">
                  📷 No image uploaded for this report.
                </div>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="h-80 w-full rounded-lg overflow-hidden">
            <MapContainer
              center={[selectedReport.latitude, selectedReport.longitude]}
              zoom={16}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[selectedReport.latitude, selectedReport.longitude]}
              />
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
