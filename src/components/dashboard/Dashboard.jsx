import {
  Award,
  Calendar,
  BookOpen,
  TrendingUp,
  Users,
  Clock,
  Target,
  Zap,
  Brain,
  Star,
  ChevronRight,
  Activity,
  Bell,
  Search,
  Filter,
  MoreVertical,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  AlertCircle,
  Coffee,
  Flame,
} from "lucide-react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  // Mock user data
  const user = {
    name: "Sakshi",
    role: "Computer Science Student",
    avatar: "👨‍💻",
  };

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const SUMMARY_CARDS = [
    {
      title: "GPA Score",
      value: "3.85",
      subtitle: "Current Semester",
      change: "+0.12",
      trend: "up",
      icon: Award,
      color: "text-amber-400",
      bgGradient: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
      glowColor: "shadow-amber-500/20",
      progress: 85,
    },
    {
      title: "Attendance",
      value: "94.2%",
      subtitle: "This Month",
      change: "+2.1%",
      trend: "up",
      icon: Calendar,
      color: "text-emerald-400",
      bgGradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
      glowColor: "shadow-emerald-500/20",
      progress: 94,
    },
    {
      title: "Courses",
      value: "12/15",
      subtitle: "Completed",
      change: "+2",
      trend: "up",
      icon: BookOpen,
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
      glowColor: "shadow-blue-500/20",
      progress: 80,
    },
    {
      title: "Study Streak",
      value: "23 Days",
      subtitle: "Personal Best",
      change: "+5",
      trend: "up",
      icon: Flame,
      color: "text-red-400",
      bgGradient: "from-red-500/20 via-pink-500/10 to-rose-500/20",
      glowColor: "shadow-red-500/20",
      progress: 76,
    },
  ];

  const recentActivities = [
    {
      title: "Completed Data Structures Assignment",
      time: "2 hours ago",
      type: "assignment",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Joined Machine Learning Study Group",
      time: "4 hours ago",
      type: "collaboration",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Upcoming: Algorithms Exam",
      time: "Tomorrow, 2:00 PM",
      type: "exam",
      icon: AlertCircle,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Coffee Chat with Prof. Smith",
      time: "Friday, 3:30 PM",
      type: "meeting",
      icon: Coffee,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ];

  const upcomingEvents = [
    {
      title: "Computer Networks Midterm",
      date: "Oct 28",
      time: "10:00 AM",
      location: "Room 204",
      type: "exam",
      priority: "high",
    },
    {
      title: "React.js Workshop",
      date: "Oct 30",
      time: "2:00 PM",
      location: "Virtual",
      type: "workshop",
      priority: "medium",
    },
    {
      title: "Team Project Presentation",
      date: "Nov 02",
      time: "3:30 PM",
      location: "Auditorium",
      type: "presentation",
      priority: "high",
    },
  ];

  const quickStats = [
    { label: "Hours Studied", value: "127h", icon: Clock, trend: "+12%" },
    { label: "Assignments", value: "24/27", icon: Target, trend: "+3" },
    { label: "Study Sessions", value: "89", icon: Brain, trend: "+15%" },
    { label: "Collaboration", value: "12", icon: Users, trend: "+4" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Dynamic background gradient following mouse */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 50%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 60 + 240}, 50%, 60%)`,
              borderRadius: "50%",
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header Section */}
        <header
          className={`mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <div className="text-4xl animate-bounce">{user.avatar}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-2">
                  Welcome back, {user?.name || "Student"}!
                </h1>
                <p className="text-gray-300 text-lg font-light">
                  {user.role} •{" "}
                  {currentTime.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dashboard..."
                  className="pl-10 pr-4 py-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="p-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 shadow-xl">
            <Activity className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-medium">
              All systems performing optimally
            </span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full ml-3 animate-pulse"></div>
          </div>
        </header>

        {/* Enhanced Summary Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SUMMARY_CARDS.map((card, index) => (
            <div
              key={`${card.title}-${card.value}`}
              className={`group relative p-6 rounded-3xl bg-gradient-to-br ${
                card.bgGradient
              } backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                card.glowColor
              } cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    {card.trend === "up" ? (
                      <ArrowUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-400" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        card.trend === "up" ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {card.change}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-gray-300 text-sm font-medium mb-1">
                    {card.title}
                  </h3>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {card.value}
                  </div>
                  <p className="text-gray-400 text-xs">{card.subtitle}</p>
                </div>

                {/* Progress bar */}
                <div className="relative">
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${card.bgGradient} transition-all duration-1000 ease-out`}
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 -top-6 text-xs text-gray-400">
                    {card.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Main Content Area */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Recent Activity */}
          <div
            className={`p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Activity className="w-6 h-6 mr-3 text-purple-400" />
                Recent Activity
              </h2>
              <button className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-300">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`p-2 rounded-xl ${activity.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                      {activity.title}
                    </p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className={`p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />
                Quick Stats
              </h2>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-white/5 border border-white/20 rounded-xl px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
                <option value="This Semester">This Semester</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-xs text-green-400 font-medium">
                      {stat.trend}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section
          className={`p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-emerald-400" />
              Upcoming Events
            </h2>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${
                    event.priority === "high"
                      ? "bg-red-400"
                      : event.priority === "medium"
                      ? "bg-yellow-400"
                      : "bg-green-400"
                  } transition-all duration-300 group-hover:w-2`}
                ></div>

                <div className="ml-4">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        event.type === "exam"
                          ? "bg-red-500/20 text-red-300"
                          : event.type === "workshop"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-purple-500/20 text-purple-300"
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-xs text-gray-400">{event.date}</span>
                  </div>

                  <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
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

export default Dashboard;
