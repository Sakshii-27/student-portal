export const QuickStats = () => {
  const stats = [
    {
      label: "Overall Progress",
      value: "80%",
      width: "80%",
      color: "bg-blue-600 dark:bg-blue-500",
    },
    {
      label: "Assignments Completed",
      value: "24/30",
      width: "80%",
      color: "bg-green-600 dark:bg-green-500",
    },
    {
      label: "Monthly Attendance",
      value: "90%",
      width: "90%",
      color: "bg-yellow-600 dark:bg-yellow-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Quick Stats
      </h2>
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {stat.label}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {stat.value}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${stat.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: stat.width }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
