// import { useState } from "react";
// import { useAuth } from "../context/UserContext";

// export default function Login() {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(form.email, form.password);
//       alert("Logged in successfully!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="w-full mb-4 p-3 border rounded-xl"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           className="w-full mb-6 p-3 border rounded-xl"
//           required
//         />
//         <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useAuth } from "../context/UserContext";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(form.email, form.password);
//       alert("Logged in successfully!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md"
//       >
//         <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">EcoTracker Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="w-full mb-4 p-3 border rounded-xl focus:outline-green-600"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           className="w-full mb-6 p-3 border rounded-xl focus:outline-green-600"
//           required
//         />
//         <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl font-semibold transition">
//           Login
//         </button>
//         <p className="text-sm text-center mt-4 text-green-900">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-green-800 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { useAuth } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      alert("Logged in successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl">
        <div className="hidden md:flex items-center justify-center w-1/2 p-4">
          <img
            src="/Images/login-eco.svg" // Place your image in public/images/
            alt="Login Illustration"
            className="max-w-full h-auto"
          />
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">EcoTracker Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mb-4 p-3 border rounded-xl focus:outline-green-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full mb-6 p-3 border rounded-xl focus:outline-green-600"
            required
          />
          <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl font-semibold transition">
            Login
          </button>
          <p className="text-sm text-center mt-4 text-green-900">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-800 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
