import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-white flex items-center justify-between px-6 py-3 border-b border-gray-200 shadow-sm">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dgtfgihga/image/upload/v1756018783/Screenshot_2025-08-24_122836_pg4krw.png"
          alt="RideFlow Logo"
          className="h-12 object-contain"
        />
      </Link>
      <ul className="flex items-center space-x-6">
        <li>
          <a
            href="/"
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/cars"
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Cars
          </a>
        </li>
        <li>
          <a
            href="/bookings"
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            My Bookings
          </a>
        </li>
      </ul>
      <button
        onClick={logout}
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
