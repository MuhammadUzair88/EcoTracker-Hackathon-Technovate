// import { Link } from "react-router-dom";
// import heroImage from "/Images/home.png"; // Replace with your own image

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="relative bg-green-700 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-x-28 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               EcoTracker: Empowering Communities to Protect the Environment
//             </h1>
//             <p className="text-lg mb-6 text-white/90">
//               A platform to report, track, and resolve local environmental issues — from illegal dumping to air pollution — by connecting citizens, communities, and authorities.
//             </p>
//             <Link to="/register" className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-md shadow hover:bg-green-100 transition">
//               Get Started
//             </Link>
//           </div>
//           <div>
//             <img
//               src={heroImage}
//               alt="Environment"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center">Why EcoTracker?</h2>
//         <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 mb-12">
//           Many environmental issues go unreported due to lack of tools and awareness. EcoTracker empowers everyday citizens to become environmental stewards — contributing data that helps local governments, researchers, and communities take real action.
//         </p>

//         {/* Features Summary */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Report Issues Easily",
//               desc: "Log environmental incidents with location, photos, and categories. Choose to report anonymously.",
//             },
//             {
//               title: "Visualize Data",
//               desc: "View real-time reports on an interactive map with filters and status tracking.",
//             },
//             {
//               title: "Engage Your Community",
//               desc: "Join forums, plan cleanups, and collaborate with neighbors to drive local impact.",
//             },
//           ].map((feature, idx) => (
//             <div key={idx} className="bg-green-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
//               <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
//               <p className="text-gray-700">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-green-50 py-12 px-6 text-center">
//         <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
//         <p className="text-gray-700 mb-6">
//           Join EcoTracker and start creating a cleaner, healthier future for your neighborhood.
//         </p>
//         <Link
//           to="/report"
//           className="bg-green-700 text-white px-6 py-3 font-medium rounded-md hover:bg-green-800 transition"
//         >
//           Report an Issue
//         </Link>
//       </section>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "/Images/home.png"; // Ensure this path is correct

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-green-700 text-white min-h-[85vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // fills the section
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-green-900/40 "></div>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            EcoTracker: Empowering Communities to Protect the Environment
          </h1>
          <p className="text-xl mb-6 text-white/90">
            A platform to report, track, and resolve local environmental issues — from illegal dumping to air pollution — by connecting citizens, communities, and authorities.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-md shadow hover:bg-green-100 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Why EcoTracker?</h2>
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          Many environmental issues go unreported due to lack of tools and awareness. EcoTracker empowers everyday citizens to become environmental stewards — contributing data that helps local governments, researchers, and communities take real action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Report Issues Easily",
              desc: "Log environmental incidents with location, photos, and categories. Choose to report anonymously.",
            },
            {
              title: "Visualize Data",
              desc: "View real-time reports on an interactive map with filters and status tracking.",
            },
            {
              title: "Engage Your Community",
              desc: "Join forums, plan cleanups, and collaborate with neighbors to drive local impact.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-green-100 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-50 py-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-gray-700 mb-6">
            Join EcoTracker and start creating a cleaner, healthier future for your neighborhood.
          </p>
          <Link
            to="/report"
            className="bg-green-700 text-white px-6 py-3 font-medium rounded-md hover:bg-green-800 transition"
          >
            Report an Issue
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
