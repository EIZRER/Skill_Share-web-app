import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourses } from '../context/CoursesContext';

const CreateCoursePage = () => {
  const navigate = useNavigate();
  const { addCourse } = useCourses();
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    thumbnail: null,
    videos: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === 'thumbnail') {
      setCourseData(prev => ({
        ...prev,
        thumbnail: file
      }));
    } else if (type === 'video') {
      setCourseData(prev => ({
        ...prev,
        videos: [...prev.videos, file]
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(courseData);
    navigate('/courses');
  };

  return (
    <div className="pt-20 px-4 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8">Create New Course</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={courseData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={courseData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, 'thumbnail')}
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Videos
            </label>
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={(e) => handleFileUpload(e, 'video')}
              className="w-full"
              required
            />
            <div className="mt-2 text-sm text-gray-500">
              You can select multiple video files
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCoursePage; 