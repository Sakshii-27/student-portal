import { User } from "lucide-react";

export const UserCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 p-6 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-3">
          <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {user.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{user.username}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium w-16">Email:</span>
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium w-16">Phone:</span>
          <span>{user.phone.split(" ")[0]}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium w-16">Website:</span>
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline truncate"
          >
            {user.website}
          </a>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium w-16">City:</span>
          <span>{user.address.city}</span>
        </div>
      </div>
    </div>
  );
};
