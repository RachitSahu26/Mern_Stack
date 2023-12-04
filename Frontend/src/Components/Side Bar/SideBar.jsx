// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Sidebar</h1>
      </div>
      <nav>
        <ul className="space-y-4 mt-4">
          <li>
            {/* Replace the anchor tag with Link */}
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="block py-2 px-4 hover:bg-gray-700">Profile</Link>
          </li>
          <li>
            <Link to="/addnote" className="block py-2 px-4 hover:bg-gray-700">Add Note</Link>
          </li>
          <li>
            <Link to="/updatenote" className="block py-2 px-4 hover:bg-gray-700">Update Note</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
