import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";
import { useAuth } from "../context/UserContext";

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

  const { user, setUser } = useAuth();

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
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-10 bg-green-50 min-h-screen">
      {!selectedReport ? (
        <>
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            📋 My Reported Incidents
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {reports.map((report) => (
              <div
                key={report._id}
                className="bg-white border-l-4 p-6 rounded-xl shadow-sm hover:shadow-lg border-green-600 transition duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl font-semibold text-green-800 capitalize">
                      {report.title}
                    </h3>
                    <p className="text-sm text-gray-600 capitalize">
                      📂 <strong>Category:</strong> {report.category}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 capitalize">
                      🏷 <strong>Status:</strong>{" "}
                      <span
                        className={`text-white px-4 py-1 rounded-3xl ${
                          statusColors[report.status]
                        }`}
                      >
                        {report.status.replace("_", " ")}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedReport(report)}
                    className="text-sm bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded-md shadow transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6">
          <button
            onClick={() => setSelectedReport(null)}
            className="mb-4 text-sm text-blue-600 hover:underline"
          >
            ← Back to all reports
          </button>
          <h2 className="text-2xl font-bold text-green-700 mb-1">
            {selectedReport.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            🕓 Submitted: {new Date(selectedReport.createdAt).toLocaleString()}
          </p>
          <p className="text-md text-gray-700 mb-1">
            📂 <strong>Category:</strong> {selectedReport.category}
          </p>
          <p className="text-md text-gray-700 mb-1">
            🏷 <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded text-white text-sm ${
                statusColors[selectedReport.status]
              }`}
            >
              {selectedReport.status.replace("_", " ")}
            </span>
          </p>
          <p className="text-md text-gray-700 mb-4">
            📝 <strong>Description:</strong> {selectedReport.description}
          </p>
          {selectedReport.photoUrl && (
            <div className="mb-6">
              <img
                src={selectedReport.photoUrl}
                alt="Incident"
                className="w-full max-h-64 object-cover rounded-md shadow"
              />
              <a
                href={selectedReport.photoUrl}
                download={`report_${selectedReport._id}.jpg`}
                className="text-sm text-blue-600 hover:underline mt-2 inline-block"
              >
                ⬇️ Download Image
              </a>
            </div>
          )}
          <div className="h-64 w-full rounded-lg overflow-hidden">
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
