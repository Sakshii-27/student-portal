import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  Calendar,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Heart,
  Star,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { FeatureCard } from "./FeatureCard";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const { user } = useAuth();
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

  const features = [
    {
      title: "AI-Powered Analytics",
      description:
        "Get personalized insights and predictions about your academic performance with our advanced AI algorithms.",
      icon: TrendingUp,
      iconColor: "text-emerald-400",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
      glowColor: "shadow-emerald-500/20",
    },
    {
      title: "Smart Collaboration",
      description:
        "Connect with study groups, share resources, and collaborate on projects with intelligent matching.",
      icon: Users,
      iconColor: "text-violet-400",
      bgColor: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
      glowColor: "shadow-violet-500/20",
    },
    {
      title: "Adaptive Learning",
      description:
        "Personalized study plans and smart reminders that adapt to your learning style and schedule.",
      icon: Award,
      iconColor: "text-amber-400",
      bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
      glowColor: "shadow-amber-500/20",
    },
  ];

  const stats = [
    { label: "Active Students", value: "12,847", icon: Users },
    { label: "Success Rate", value: "94.2%", icon: TrendingUp },
    { label: "Study Hours", value: "2.3M+", icon: BookOpen },
    { label: "Satisfaction", value: "4.9/5", icon: Heart },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic background gradient following mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 60 + 240}, 70%, 60%)`,
              borderRadius: "50%",
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute border border-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              borderRadius:
                i % 2 === 0 ? "50%" : `${Math.random() * 30 + 10}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${
                Math.random() * 20 + 15
              }s infinite ease-in-out alternate, rotate ${
                Math.random() * 30 + 20
              }s infinite linear`,
              background: `linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-white/90 mr-2">
              Student Portal
            </span>
            {user?.role && (
              <>
                <div className="w-1 h-1 bg-white/30 rounded-full mx-2"></div>
                <span className="text-sm font-medium text-purple-300">
                  {user.role}
                </span>
              </>
            )}
            <Sparkles className="w-4 h-4 ml-2 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-pulse">
              Future of
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text relative">
              Education
              <div className="absolute -top-2 -right-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Your gateway to{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              organized learning , performance tracking,{" "}
            </span>
            and{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              academic success.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/dashboard"
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <BookOpen className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Launch Dashboard
              <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link
              to="/users"
              className="group relative inline-flex items-center px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Users className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Explore Community
              <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                stat.label === "Success Rate"
                  ? "hover:shadow-green-500/20"
                  : stat.label === "Satisfaction"
                  ? "hover:shadow-red-500/20"
                  : "hover:shadow-blue-500/20"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon
                className={`w-8 h-8 mx-auto mb-3 ${
                  stat.label === "Success Rate"
                    ? "text-green-400"
                    : stat.label === "Satisfaction"
                    ? "text-red-400"
                    : "text-blue-400"
                }`}
              />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                feature.glowColor
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-8 h-8 ${feature.iconColor} group-hover:rotate-12 transition-transform duration-300`}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Welcome Section */}
        <div className="relative rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-12 text-center overflow-hidden shadow-2xl shadow-purple-500/30">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 animate-pulse"
                style={{
                  width: `${Math.random() * 150 + 50}px`,
                  height: `${Math.random() * 150 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Star
                className="w-8 h-8 text-yellow-300 mr-2 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Welcome, {user?.name || "Future Scholar"}!
              </h2>
              <div className="ml-3 text-4xl animate-bounce">✨</div>
            </div>

            <p className="text-purple-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Your personalized learning ecosystem awaits. Dive into advanced
              analytics, connect with brilliant minds, and transform your
              academic potential into reality.
            </p>

            <Link
              to="/dashboard"
              className="group inline-flex items-center px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-purple-100/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
              Begin Your Journey
              <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes wave {
          0%,
          50%,
          100% {
            transform: rotate(0deg);
          }
          10%,
          30% {
            transform: rotate(-10deg);
          }
          20%,
          40% {
            transform: rotate(12deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};
