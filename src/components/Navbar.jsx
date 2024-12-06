import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 px-6 border border-gray-300">
      <img src="/images/logo.png" className="h-16 w-16" alt="Logo" />
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/" className="font-semibold text-md text-yellow-800 hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="font-semibold text-md text-yellow-800 hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link to="/places" className="font-semibold text-md text-yellow-800 hover:text-blue-500">Places</Link>
        </li>
        <li>
          <Link to="/contact" className="font-semibold text-md text-yellow-800 hover:text-blue-500">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
