import React from 'react';
import { Link } from 'react-router-dom';
import { useCourses } from '../context/CoursesContext';

const CoursesPage = () => {
  const { courses } = useCourses();

  return (
    <div className="pt-24 px-4 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Courses</h1>
          <Link 
            to="/create-course"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Course
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No courses available yet.</p>
            <Link 
              to="/create-course"
              className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
            >
              Create your first course
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <div 
                key={course.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {course.thumbnail ? (
                  <img 
                    src={URL.createObjectURL(course.thumbnail)} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No thumbnail</span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold">${course.price}</span>
                    <Link 
                      to={`/course/${course.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage; 