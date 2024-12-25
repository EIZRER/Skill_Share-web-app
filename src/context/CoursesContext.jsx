import React, { createContext, useState, useContext, useEffect } from 'react';
import coursesData from '../Data/courses.json';

const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(() => {
    // Load courses from localStorage, if none exist, use the predefined courses
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : coursesData.courses;
  });

  // Save courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const addCourse = (newCourse) => {
    setCourses(prevCourses => [...prevCourses, { 
      ...newCourse, 
      id: `course-${Date.now()}`,
      chapters: [],
      level: "Beginner",
      duration: "0 hours"
    }]);
  };

  const getCourseById = (id) => {
    return courses.find(course => course.id === id);
  };

  const searchCourses = (query) => {
    return courses.filter(course => 
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <CoursesContext.Provider value={{ 
      courses, 
      addCourse, 
      getCourseById,
      searchCourses 
    }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => useContext(CoursesContext); 