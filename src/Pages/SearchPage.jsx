import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('q');

  // Dummy data for demonstration
  const dummyCourses = [
    { id: 1, title: 'Web Development Basics', instructor: 'John Doe', price: '$29.99' },
    { id: 2, title: 'Advanced Web Design', instructor: 'Jane Smith', price: '$39.99' },
    { id: 3, title: 'UI/UX Fundamentals', instructor: 'Mike Johnson', price: '$24.99' },
  ];

  useEffect(() => {
    // Simulate search functionality
    const results = dummyCourses.filter(course => 
      course.title.toLowerCase().includes(query?.toLowerCase() || '')
    );
    setSearchResults(results);
  }, [query]);

  return (
    <div className="pt-24 px-4 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for: {query}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(course => (
            <div 
              key={course.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={`https://via.placeholder.com/300x200?text=${course.title}`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">By {course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{course.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {searchResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No courses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
