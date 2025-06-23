// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GraduationCap } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
// import { loginUser } from "../../services/api";

// export const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const result = await loginUser(email, password);
//       if (result.success) {
//         login(email, password);
//         navigate("/dashboard");
//       } else {
//         setError(
//           result.error ||
//             "Invalid credentials. Use student@portal.com / password"
//         );
//       }
//     } catch (err) {
//       setError("An error occurred during login");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 transition-colors duration-200">
//       <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-200">
//         <div className="text-center mb-8">
//           <GraduationCap className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Welcome Back
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-2">
//             Sign in to your student portal
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
//               placeholder="student@portal.com"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
//               placeholder="Enter your password"
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
//             className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isLoading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

// <div className="mt-6 text-center">
//   <p className="text-sm text-gray-600 dark:text-gray-400">
//     Don't have an account?{" "}
//     <Link
//       to="/signup"
//       className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
//     >
//       Sign up
//     </Link>
//   </p>
// </div>

//         <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//           <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
//             Demo credentials: student@portal.com / password
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
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";

// Mock auth functions for demonstration
const mockAuth = {
  login: (email, password) => {
    console.log("Login attempted with:", { email, password });
    return true;
  },
};

const mockLoginUser = async (email, password) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email === "student@portal.com" && password === "password") {
    return { success: true };
  } else {
    return {
      success: false,
      error: "Invalid credentials. Use student@portal.com / password",
    };
  }
};

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await loginUser(email, password);
      if (result.success) {
        login(email, password);
        navigate("/dashboard");
      } else {
        setError(
          result.error ||
            "Invalid credentials. Use student@portal.com / password"
        );
      }
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  //   const handleSubmit = async () => {
  //     if (!email || !password) {
  //       setError("Please fill in all fields");
  //       return;
  //     }

  //     setIsLoading(true);
  //     setError("");

  //     try {
  //       const result = await mockLoginUser(email, password);
  //       if (result.success) {
  //         mockAuth.login(email, password);
  //         // In real app: navigate("/dashboard");
  //         alert("Login successful! Redirecting to dashboard...");
  //       } else {
  //         setError(
  //           result.error ||
  //             "Invalid credentials. Use student@portal.com / password"
  //         );
  //       }
  //     } catch (err) {
  //       setError("An error occurred during login");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto animate-ping opacity-20"></div>
            </div>

            <h2 className={`text-4xl font-black ${currentTheme.text} mb-2`}>
              Welcome Back
            </h2>
            <p className={`${currentTheme.textSecondary} text-lg font-dark`}>
              Sign in to your student portal
            </p>
          </div>

          <div className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl ${currentTheme.text} placeholder-gray-600 focus:outline-none focus:ring-2 ${currentTheme.inputFocus} focus:border-transparent transition-all duration-300`}
                  placeholder="student@portal.com"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-12 pr-12 py-4 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl ${currentTheme.text} placeholder-gray-600 focus:outline-none focus:ring-2 ${currentTheme.inputFocus} focus:border-transparent transition-all duration-300`}
                  placeholder="Enter your password"
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
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 rounded-full animate-spin border-t-white"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className={`text-sm ${currentTheme.textSecondary}`}>
              Don't have an account?{" "}
              {/* <button className="text-purple-400 hover:text-purple-300 font-semibold hover:underline transition-colors duration-300">
                Sign up
              </button> */}
              <Link
                to="/signup"
                className="text-purple-400 hover:text-purple-300 font-semibold hover:underline transition-colors duration-300"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div
            className={`mt-6 p-4 ${currentTheme.inputBg} backdrop-blur-xl border ${currentTheme.inputBorder} rounded-xl`}
          >
            <div className="text-center">
              <p
                className={`text-xs ${currentTheme.textTertiary} uppercase tracking-wide font-medium mb-2`}
              >
                Demo Credentials
              </p>
              <div className="space-y-1">
                <p
                  className={`text-sm ${currentTheme.textSecondary} font-mono`}
                >
                  📧 student@portal.com
                </p>
                <p
                  className={`text-sm ${currentTheme.textSecondary} font-mono`}
                >
                  🔒 password
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-emerald-300 text-xs font-medium">
                Secure Login Portal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
