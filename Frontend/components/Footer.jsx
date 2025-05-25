// // components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="bg-green-700 text-white text-sm py-6 mt-10">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div>
//           <h4 className="font-semibold text-lg mb-2">About EcoTracker</h4>
//           <p>
//             Empowering communities to report and resolve local environmental issues through collaboration, data, and action.
//           </p>
//         </div>
//         <div>
//           <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
//           <ul className="space-y-1">
//             <li><a href="/report" className="hover:underline">Report Incident</a></li>
//             <li><a href="/map" className="hover:underline">View Map</a></li>
//             <li><a href="/community" className="hover:underline">Community Forum</a></li>
//             <li><a href="/login" className="hover:underline">Login</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold text-lg mb-2">Contact</h4>
//           <p>Email: support@ecotracker.org</p>
//           <p>Twitter: @EcoTrackerApp</p>
//           <p>GitHub: github.com/EcoTracker</p>
//         </div>
//       </div>
//       <div className="text-center pt-4 mt-4 border-t border-white/20">
//         &copy; {new Date().getFullYear()} EcoTracker. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// components/Footer.jsx
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white text-sm py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h4 className="font-bold text-xl mb-3">About EcoTracker</h4>
          <p className="text-white/80 leading-relaxed">
            Empowering communities to report and resolve local environmental issues 
            through collaboration, data, and action.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-xl mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href="/report" className="hover:text-green-300 transition-colors">Report Incident</a>
            </li>
            <li>
              <a href="/map" className="hover:text-green-300 transition-colors">View Map</a>
            </li>
            <li>
              <a href="/community" className="hover:text-green-300 transition-colors">Community Forum</a>
            </li>
            <li>
              <a href="/login" className="hover:text-green-300 transition-colors">Login</a>
            </li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div>
          <h4 className="font-bold text-xl mb-3">Contact</h4>
          <ul className="space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-300" />
              <a href="mailto:support@ecotracker.org" className="hover:text-green-300 transition-colors">
                support@ecotracker.org
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-green-300" />
              <a href="https://twitter.com/EcoTrackerApp" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                @EcoTrackerApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-green-300" />
              <a href="https://github.com/EcoTracker" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                github.com/EcoTracker
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-6 mt-8 border-t border-white/20 text-white/70">
        &copy; {new Date().getFullYear()} EcoTracker. All rights reserved.
      </div>
    </footer>
  );
}
