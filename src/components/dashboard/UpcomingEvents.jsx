import { Calendar } from "lucide-react";

export const UpcomingEvents = () => {
  const events = [
    {
      time: "Tomorrow",
      title: "Physics Lab",
      details: "Room 204 - 2:00 PM",
      timeColor: "text-blue-600 dark:text-blue-400",
    },
    {
      time: "This Week",
      title: "Math Exam",
      details: "Hall A - Friday 10:00 AM",
      timeColor: "text-green-600 dark:text-green-400",
    },
    {
      time: "Next Week",
      title: "Project Presentation",
      details: "Conference Room - Monday 3:00 PM",
      timeColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center mb-2">
              <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className={`text-sm font-medium ${event.timeColor}`}>
                {event.time}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {event.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
