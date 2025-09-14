import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Brand Name */}
        <h1 className="text-2xl font-bold tracking-wide">School Payments</h1>
        
        {/* Nav Links */}
        <div className="flex space-x-4">
          <Link 
            to="/" 
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Register
          </Link>
          <Link 
            to="/create-payment" 
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Create Payment
          </Link>
        </div>
      </div>
    </nav>
  );
}
