import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/summary");
        if (res.data.success) {
          setSummary(res.data.data);
        }
      } catch (error) {
        alert("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading)
    return (
      <div className="p-8 flex justify-center items-center h-screen">
        <span className="text-lg text-gray-600 animate-pulse">Loading...</span>
      </div>
    );

  if (!summary)
    return (
      <div className="p-8 text-center text-red-500 font-semibold">
        No data available.
      </div>
    );

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-green-800">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white border-l-4 border-green-500 p-6 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Incidents by Status
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {["new", "verified", "in_progress", "resolved"].map((status) => (
              <li key={status} className="flex justify-between">
                <span className="capitalize">{status.replace("_", " ")}:</span>
                <span className="font-bold text-green-700">
                  {summary.incidentsByStatus[status] || 0}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Card title="Total Staff" count={summary.totalStaff} />
        <Card title="Total Users" count={summary.totalUsers} />
        <Card title="Active Shifts" count={summary.activeShifts} />
      </div>

      {/* Recent Incidents Table */}
      <div className="bg-white p-6 rounded-2xl shadow overflow-auto">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">
          Recent Incidents
        </h2>
        <table className="w-full text-sm md:text-base text-left">
          <thead>
            <tr className="border-b border-green-300 text-gray-600">
              <th className="py-3 px-2">Title</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {summary.recentIncidents.map((incident) => (
              <tr
                key={incident._id}
                className="border-b hover:bg-green-50 transition"
              >
                <td className="py-3 px-2">{incident.title}</td>
                <td className="py-3 px-2 capitalize text-green-700 font-medium">
                  {incident.status.replace("_", " ")}
                </td>
                <td className="py-3 px-2 text-gray-600">
                  {new Date(incident.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Reusable card component
const Card = ({ title, count }) => (
  <div className="bg-white border-l-4 border-green-500 p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col justify-center items-center">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
    <span className="text-5xl font-bold text-green-700">{count}</span>
  </div>
);
