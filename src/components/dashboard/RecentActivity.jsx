import { BookOpen, Award, Calendar } from "lucide-react";

export const RecentActivity = () => {
  const activities = [
    {
      title: "Assignment Submitted",
      description: "Data Structures Project - 2 hours ago",
      icon: BookOpen,
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Quiz Completed",
      description: "Mathematics Quiz - Score: 95% - 1 day ago",
      icon: Award,
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Class Attended",
      description: "Computer Science Lecture - 2 days ago",
      icon: Calendar,
      iconColor: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const IconComponent = activity.icon;
          return (
            <div
              key={index}
              className={`flex items-center p-3 ${activity.bgColor} rounded-lg`}
            >
              <IconComponent className={`h-5 w-5 ${activity.iconColor} mr-3`} />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
