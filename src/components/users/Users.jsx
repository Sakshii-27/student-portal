import { useState, useEffect } from "react";
import { fetchUsers } from "../../services/api";
import { UserCard } from "../layout/UserCard";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to load users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (error)
    return (
      <div className="text-red-600 dark:text-red-400 text-center p-6">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Students Directory
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with fellow students in your network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};
