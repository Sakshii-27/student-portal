// Application Constants
export const APP_NAME = "Student Portal";

// Demo credentials
export const DEMO_CREDENTIALS = {
  email: "student@portal.com",
  password: "password",
};

// API endpoints
export const API_ENDPOINTS = {
  USERS: "/users",
  POSTS: "/posts",
  COMMENTS: "/comments",
};

// Navigation routes
export const ROUTES = {
  HOME: "/home",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ROOT: "/",
};

// Dashboard summary cards data
export const DASHBOARD_CARDS = [
  {
    title: "GPA",
    value: "3.85",
    subtitle: "Current Semester",
    icon: "Award",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
  },
  {
    title: "Attendance",
    value: "90%",
    subtitle: "This Month",
    icon: "Calendar",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    title: "Subjects",
    value: "12/15",
    subtitle: "Completed",
    icon: "BookOpen",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
];

// Recent activity data
export const RECENT_ACTIVITIES = [
  {
    icon: "BookOpen",
    title: "Assignment Submitted",
    description: "Data Structures Project - 2 hours ago",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: "Award",
    title: "Quiz Completed",
    description: "Mathematics Quiz - Score: 95% - 1 day ago",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: "Calendar",
    title: "Class Attended",
    description: "Computer Science Lecture - 2 days ago",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
];

// Upcoming events data
export const UPCOMING_EVENTS = [
  {
    date: "Tomorrow",
    dateColor: "text-blue-600 dark:text-blue-400",
    title: "Physics Lab",
    description: "Room 204 - 2:00 PM",
  },
  {
    date: "This Week",
    dateColor: "text-green-600 dark:text-green-400",
    title: "Math Exam",
    description: "Hall A - Friday 10:00 AM",
  },
  {
    date: "Next Week",
    dateColor: "text-purple-600 dark:text-purple-400",
    title: "Project Presentation",
    description: "Conference Room - Monday 3:00 PM",
  },
];

// Progress stats
export const PROGRESS_STATS = [
  {
    label: "Overall Progress",
    percentage: 80,
    color: "bg-blue-600 dark:bg-blue-500",
  },
  {
    label: "Assignments Completed",
    percentage: 80,
    value: "24/30",
    color: "bg-green-600 dark:bg-green-500",
  },
  {
    label: "Monthly Attendance",
    percentage: 90,
    color: "bg-yellow-600 dark:bg-yellow-500",
  },
];

// Home page feature cards
export const HOME_FEATURES = [
  {
    icon: "Award",
    title: "Track Performance",
    description:
      "Monitor your GPA, attendance, and academic progress in real-time.",
    iconColor: "text-yellow-500",
  },
  {
    icon: "Users",
    title: "Connect with Peers",
    description:
      "View and connect with other students in your academic network.",
    iconColor: "text-blue-500",
  },
  {
    icon: "Calendar",
    title: "Stay Organized",
    description:
      "Keep track of assignments, schedules, and important academic dates.",
    iconColor: "text-green-500",
  },
];
