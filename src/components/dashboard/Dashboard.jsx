import { useAuth } from "../../context/AuthContext";
import { SummaryCard } from "./SummaryCard";
import { RecentActivity } from "./RecentActivity";
import { QuickStats } from "./QuickStats";
import { UpcomingEvents } from "./UpcomingEvents";

const SUMMARY_CARDS = [
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

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name || "Student"}! 🎓
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's an overview of your academic performance and progress.
          </p>
        </header>

        {/* Summary Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {SUMMARY_CARDS.map((card) => (
            <SummaryCard key={`${card.title}-${card.value}`} card={card} />
          ))}
        </section>

        {/* Main Content Area */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RecentActivity />
          <QuickStats />
        </section>

        {/* Upcoming Events */}
        <section>
          <UpcomingEvents />
        </section>
      </div>
    </div>
  );
};
