import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { LoginPage } from './components/auth/Login';
import { SignupPage } from './components/auth/Signup';
import { HomePage } from './components/home/Home';
import { UsersPage } from './components/users/Users';
import { DashboardPage } from './components/dashboard/Dashboard';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

const App = () => {
  return (
    <DarkModeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <Routes>
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/users" element={<UsersPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/" element={<Navigate to="/home" replace />} />
                    </Routes>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </DarkModeProvider>
  );
};

export default App;