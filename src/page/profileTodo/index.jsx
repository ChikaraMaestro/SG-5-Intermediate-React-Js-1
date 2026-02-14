import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileCard from './partials/ProfileCard';
import TodoList from './partials/Todolist';
import Navbar from '../../components/navbar';

const ProfileTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-flex flex flex-col items-center w-full p-6!">
        <Navbar isDarkMode={isDarkMode} />

        <Routes>
          <Route 
            path="/" 
            element={<ProfileCard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} 
          />
          <Route 
            path="/todo" 
            element={<TodoList isDarkMode={isDarkMode} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default ProfileTodo;