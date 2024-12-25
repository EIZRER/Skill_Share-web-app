import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCourses } from '../../context/CoursesContext';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const courseScrollRef = useRef(null);
  const { courses } = useCourses();

  const featuredCourses = courses.slice(0, 4);

  const progressCourses = courses.slice(0, 3).map(course => ({
    ...course,
    progress: Math.floor(Math.random() * 100),
    lastAccessed: '2024-03-15'
  }));

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Courses in Progress Section */}
      <section className="bg-[#9DCCFF] py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Courses in Progress</h2>
            <Link to="/courses" className="text-sm text-gray-700 hover:text-gray-900">
              View All Courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {progressCourses.map(course => (
              <div 
                key={course.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold mb-2 truncate" title={course.title}>
                    {course.title}
                  </h3>
                  <div className="w-full bg-gray-200 h-1.5 rounded mb-2">
                    <div 
                      className="bg-blue-600 h-1.5 rounded transition-all duration-500" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">{course.progress}% Complete</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Continue →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredCourses.map(course => (
              <div 
                key={course.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={course.image} 
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
        </div>
      </section>
    </div>
  );
};

export default MainPage;
