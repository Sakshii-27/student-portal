import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Calendar } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { FeatureCard } from "./FeatureCard";

export const HomePage = () => {
  const { user } = useAuth();

  const features = [
    {
      title: "Track Performance",
      description:
        "Monitor your GPA, attendance, and academic progress in real-time.",
      icon: Award,
      iconColor: "text-yellow-500",
    },
    {
      title: "Connect with Peers",
      description:
        "View and connect with other students in your academic network.",
      icon: Users,
      iconColor: "text-blue-500",
    },
    {
      title: "Stay Organized",
      description:
        "Keep track of assignments, schedules, and important academic dates.",
      icon: Calendar,
      iconColor: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Welcome to Student Portal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Manage your academic details in one place. Access your dashboard,
            view your performance, connect with peers, and stay on top of your
            educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Go to Dashboard
            </Link>
            <Link
              to="/users"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              View Users
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hello, {user?.name}! 👋
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            Ready to explore your academic dashboard and connect with your
            fellow students?
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};
