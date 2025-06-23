// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GraduationCap } from "lucide-react";
// import { signupUser } from "../../services/api";

// export const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       await signupUser(formData.name, formData.email, formData.password);
//       navigate("/login", {
//         state: { message: "Account created successfully! Please sign in." },
//       });
//     } catch (err) {
//       setError("Failed to create account. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 transition-colors duration-200">
//       <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-200">
//         <div className="text-center mb-8">
//           <GraduationCap className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Join Student Portal
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-2">
//             Create your account to get started
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
//               placeholder="Create a password"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>

//           {error && (
//             <div className="text-red-600 dark:text-red-400 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isLoading ? "Creating Account..." : "Create Account"}
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-green-600 dark:text-green-400 hover:underline font-medium"
//             >
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import {
  GraduationCap,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock signup function for demonstration
const mockSignupUser = async (name, email, password) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simple validation for demo
  if (name && email && password) {
    return { success: true };
  } else {
    return {
      success: false,
      error: "Please fill in all fields correctly",
    };
  }
};

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const result = await mockSignupUser(
        formData.name,
        formData.email,
        formData.password
      );
      if (result.success) {
        // In real app: navigate to login with success message
        alert("Account created successfully! Redirecting to login...");
      } else {
        setError(result.error || "Failed to create account. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  // Theme-based classes
  const themeClasses = {
    dark: {
      background:
        "bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900",
      text: "text-white",
      textSecondary: "text-gray-300",
      textTertiary: "text-gray-400",
      cardBg: "bg-white/8",
      cardBorder: "border-white/20",
      inputBg: "bg-white/10",
      inputBorder: "border-white/20",
      inputFocus: "focus:ring-purple-500/50",
      radialGradient: "rgba(147, 51, 234, 0.08)",
    },
    light: {
      background:
        "bg-gradient-to-br from-slate-700 via-slate-600/60 to-slate-700",
      text: "text-slate-100",
      textSecondary: "text-slate-200",
      textTertiary: "text-slate-300",
      cardBg: "bg-black/20",
      cardBorder: "border-black/30",
      inputBg: "bg-black/15",
      inputBorder: "border-black/25",
      inputFocus: "focus:ring-purple-500/50",
      radialGradient: "rgba(147, 51, 234, 0.12)",
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${currentTheme.background}`}
    >
      {/* Dynamic background gradient following mouse */}
      <div
        className="absolute inset-0 opacity-15 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${currentTheme.radialGradient}, transparent 50%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 60 + 240}, 40%, 50%)`,
              borderRadius: "50%",
              boxShadow: `0 0 ${Math.random() * 8 + 3}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div
          className={`max-w-md w-full ${
            currentTheme.cardBg
          } backdrop-blur-xl border ${
            currentTheme.cardBorder
          } rounded-3xl p-8 transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Theme Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl ${currentTheme.text} hover:scale-105 transition-all duration-300`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto animate-ping opacity-20"></div>
            </div>

            <h2 className={`text-4xl font-black ${currentTheme.text} mb-2`}>
              Join Student Portal
            </h2>
            <p className={`${currentTheme.textSecondary} text-lg font-dark`}>
              Create your account to get started
            </p>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                className={`block text-sm font-semibold ${currentTheme.textSecondary} uppercase tracking-wide`}
              >
                Full Name
              </label>
              <div className="relative">
                <User
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${currentTheme.textTertiary}`}
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl ${currentTheme.text} placeholder-gray-600 focus:outline-none focus:ring-2 ${currentTheme.inputFocus} focus:border-transparent transition-all duration-300`}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                className={`block text-sm font-semibold ${currentTheme.textSecondary} uppercase tracking-wide`}
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${currentTheme.textTertiary}`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl ${currentTheme.text} placeholder-gray-600 focus:outline-none focus:ring-2 ${currentTheme.inputFocus} focus:border-transparent transition-all duration-300`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                className={`block text-sm font-semibold ${currentTheme.textSecondary} uppercase tracking-wide`}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${currentTheme.textTertiary}`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-4 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl ${currentTheme.text} placeholder-gray-600 focus:outline-none focus:ring-2 ${currentTheme.inputFocus} focus:border-transparent transition-all duration-300`}
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${currentTheme.textTertiary} hover:${currentTheme.textSecondary} transition-colors duration-300`}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label
                className={`block text-sm font-semibold ${currentTheme.textSecondary} uppercase tracking-wide`}
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${currentTheme.textTertiary}`}
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-4 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl ${currentTheme.text} placeholder-gray-600 focus:outline-none focus:ring-2 ${currentTheme.inputFocus} focus:border-transparent transition-all duration-300`}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${currentTheme.textTertiary} hover:${currentTheme.textSecondary} transition-colors duration-300`}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div
                className={`${currentTheme.inputBg} border border-red-400/50 rounded-xl p-4 transform transition-all duration-300`}
              >
                <p className="text-red-400 text-sm font-medium text-center">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 rounded-full animate-spin border-t-white"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className={`text-sm ${currentTheme.textSecondary}`}>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors duration-300"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-xl border border-white/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-emerald-300 text-xs font-medium">
                Secure Registration Portal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
