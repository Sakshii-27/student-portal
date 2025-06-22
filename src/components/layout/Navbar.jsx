import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  User,
  BookOpen,
  Users,
  Home,
  LogOut,
  Moon,
  Sun,
  GraduationCap,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useDarkMode } from "../../hooks/useDarkMode";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Student Portal
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/home")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/users"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/users")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Users</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/dashboard")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <User className="h-5 w-5" />
              <span className="hidden sm:block font-medium">{user?.name}</span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/home"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
              isActive("/home")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/users"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
              isActive("/users")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Users</span>
          </Link>
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
              isActive("/dashboard")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
