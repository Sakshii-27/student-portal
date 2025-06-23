import { useState, useEffect } from "react";
import { fetchUsers } from "../services/api";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Failed to load users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const refreshUsers = () => {
    loadUsers();
  };

  const getUserById = (id) => {
    return users.find((user) => user.id === id);
  };

  const searchUsers = (query) => {
    if (!query) return users;

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    users,
    loading,
    error,
    refreshUsers,
    getUserById,
    searchUsers,
  };
};
