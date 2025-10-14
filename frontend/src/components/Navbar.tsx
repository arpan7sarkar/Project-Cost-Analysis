import React from 'react';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar: React.FC = () => {
  const { user } = useUser();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">Project Pedictor</Link>
        <div className="flex items-center space-x-6">
          <div className="space-x-4">
            <Link to="/" className="hover:text-green-300">Dashboard</Link>
            <Link to="/projects" className="hover:text-green-300">Projects</Link>
            <Link to="/predict" className="hover:text-green-300">Predict</Link>
            <Link to="/reports" className="hover:text-green-300">Reports</Link>
            <Link to="/community" className="hover:text-green-300">Community</Link>
          </div>
          <div className="flex items-center space-x-3">
            {user && (
              <span className="text-sm text-gray-300">
                Welcome, {user.firstName || user.username}
              </span>
            )}
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
