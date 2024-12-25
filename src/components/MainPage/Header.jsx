import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">Skillshare</Link>
        </div>
        
        <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for courses..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </form>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</Link></li>
            {isLoggedIn && (
              <li><Link to="/create-course" className="text-gray-600 hover:text-blue-600 transition-colors">Create Course</Link></li>
            )}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex space-x-4">
              <Link to="/profile" className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                Profile
              </Link>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
