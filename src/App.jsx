import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import CreateCoursePage from './pages/CreateCoursePage';
import SearchPage from './pages/SearchPage';
import CoursesPage from './pages/CoursesPage';
import Header from './components/MainPage/Header';
import { CoursesProvider } from './context/CoursesContext';

function App() {
  return (
    <Router>
      <CoursesProvider>
        <div className="font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/create-course" element={<CreateCoursePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </CoursesProvider>
    </Router>
  );
}

export default App;
