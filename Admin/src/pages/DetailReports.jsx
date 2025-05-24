import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const DetailReports = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/report/get/${id}`
      );
      if (response.status === 200) {
        setReport(response.data);
      }
    } catch (error) {
      console.error("Error fetching report", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    try {
      setVerifying(true);
      const response = await axios.post(
        `http://localhost:5000/api/report/change/${id}`
      );
      if (response.status === 200) {
        fetchData(); // Refresh the report status after verification
      }
    } catch (error) {
      console.error("Error verifying report", error);
    } finally {
      setVerifying(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-emerald-600 text-xl font-semibold">
        Loading report details...
      </div>
    );
  }

  if (!report) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        Failed to load report details.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-6">
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/70 border border-emerald-200 rounded-3xl shadow-2xl p-8 space-y-6">
        <h2 className="text-5xl font-extrabold text-center text-emerald-800 mb-6">
          Report Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Report Details */}
          <div className="space-y-5">
            <h3 className="text-3xl font-bold text-gray-800">{report.title}</h3>
            <p className="text-gray-600">
              <span className="font-semibold">Reporter:</span>{" "}
              {report.createdBy?.username || "Anonymous"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Description:</span>{" "}
              {report.description}
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium transition ${
                  report.status?.toLowerCase() === "new"
                    ? "bg-red-100 text-red-800"
                    : report.status?.toLowerCase() === "verified"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {report.status}
              </span>
            </p>

            {/* Verify Report button if status is 'new' */}
            {report.status?.toLowerCase() === "new" && (
              <button
                onClick={handleVerify}
                disabled={verifying}
                className={`mt-4 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition duration-300 ${
                  verifying && "opacity-70 cursor-not-allowed"
                }`}
              >
                <FaCheckCircle className="text-lg" />
                {verifying ? "Verifying..." : "Verify Report"}
              </button>
            )}

            {/* Create Shift button if status is 'verified' */}
            {report.status?.toLowerCase() === "verified" && (
              <button
                onClick={() => navigate(`/create-shift/${report._id}`)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition duration-300"
              >
                Create Shift
              </button>
            )}

            {report.photoUrl ? (
              <img
                src={report.photoUrl}
                alt={`Report: ${report.title}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg border border-gray-200"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400 rounded-xl shadow-inner border border-gray-200">
                No image provided
              </div>
            )}
          </div>

          {/* Map Section */}
          <div className="h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <MapContainer
              center={[report.latitude, report.longitude]}
              zoom={13}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[report.latitude, report.longitude]}>
                <Popup>{report.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReports;
