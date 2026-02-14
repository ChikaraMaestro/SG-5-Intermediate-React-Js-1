import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDarkMode }) => {
  const location = useLocation(); 

  const linkStyle = (path) => `px-4 py-2 rounded-lg font-medium transition-colors ${
    location.pathname === path 
      ? "bg-blue-500 text-white" 
      : isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-200"
  }`;

  return (
    <nav className={`flex justify-center gap-4 mb-8 p-4 rounded-2xl shadow-sm ${
      isDarkMode ? "bg-[#1f212d]" : "bg-white"
    }`}>
      <Link to="/" className={linkStyle("/")}>
        Profile
      </Link>
      <Link to="/todo" className={linkStyle("/todo")}>
        Todo List
      </Link>
    </nav>
  );
};

export default Navbar;