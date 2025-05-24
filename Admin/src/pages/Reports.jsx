import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import axios from "axios";

const Reports = () => {
  const [reports, setReports] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/report/getall`
      );
      if (response.status === 200) {
        setReports(response.data);
      }
    } catch (error) {
      console.log("Error fetching reports", error);
    }
  };

  const handleDelete = (id) => {
    alert(`Delete report ID: ${id} (Feature coming soon)`);
    // Add real delete logic here later
  };

  useEffect(() => {
    fetchData();
    console.log(reports);
  }, []);

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center sm:text-left">
        Submitted Reports
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-emerald-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-emerald-900 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr
                key={report._id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 text-sm text-gray-900">
                  {report.createdBy
                    ? report.createdBy?.username
                    : " Anonymous " || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {report.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {report.category}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 text-xs font-semibold rounded-full 
                      ${
                        report.status === "new"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-center space-x-6">
                  <Link
                    to={`/report/${report._id}`}
                    title="View"
                    className="text-emerald-600 hover:text-emerald-900"
                  >
                    <FaEye className="inline h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(report._id)}
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
    </div>
  );
};

export default Reports;
