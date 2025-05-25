// import { useState } from "react";
// import { useAuth } from "../context/UserContext";

// export default function Register() {
//   const { register } = useAuth();
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     isAnonymous: false,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await register(form);
//       alert("Registered successfully!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error during registration");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         {["username", "email", "password"].map((field) => (
//           <input
//             key={field}
//             type={field === "password" ? "password" : "text"}
//             placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//             value={form[field]}
//             onChange={(e) => setForm({ ...form, [field]: e.target.value })}
//             className="w-full mb-4 p-3 border rounded-xl"
//             required
//           />
//         ))}
//         <label className="flex items-center gap-2 mb-4">
//           <input
//             type="checkbox"
//             checked={form.isAnonymous}
//             onChange={(e) =>
//               setForm({ ...form, isAnonymous: e.target.checked })
//             }
//           />
//           Register as Anonymous
//         </label>
//         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";

export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    isAnonymous: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("Registered successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Error during registration");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center">
        <img
          src="/Images/register-eco.svg" // 🔁 Replace with your eco SVG path
          alt="Eco Icon"
          className="w-28 h-28 mb-4"
        />
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Create an Account</h2>
        
        <form onSubmit={handleSubmit} className="w-full">
          {["username", "email", "password"].map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="w-full mb-4 p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
              required
            />
          ))}

          <label className="flex items-center gap-2 mb-4 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={form.isAnonymous}
              onChange={(e) =>
                setForm({ ...form, isAnonymous: e.target.checked })
              }
            />
            Register as Anonymous
          </label>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition">
            Register
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
