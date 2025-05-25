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
            Empowering communities to report and resolve local environmental
            issues through collaboration, data, and action.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-xl mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <a
                href="/report"
                className="hover:text-green-300 transition-colors"
              >
                Report Incident
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:text-green-300 transition-colors"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-bold text-xl mb-3">Contact</h4>
          <ul className="space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-300" />
              <a href="/" className="hover:text-green-300 transition-colors">
                support@ecotracker.org
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-green-300" />
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
              >
                @EcoTrackerApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-green-300" />
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
              >
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
