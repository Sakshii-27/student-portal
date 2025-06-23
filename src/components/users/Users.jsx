import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Users,
  Mail,
  Phone,
  Globe,
  MoreVertical,
  Activity,
  Grid,
  List,
  ExternalLink,
  User,
} from "lucide-react";
import { fetchUsers } from "../../services/api";

export const UsersPage = () => {
  const [state, setState] = useState({
    users: [],
    loading: true,
    error: "",
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'table'

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const data = await fetchUsers();
        setState({ users: data, loading: false, error: "" });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: error.message || "Failed to load users",
          loading: false,
        }));
      }
    };
    loadUsers();
  }, []);

  const filteredUsers = state.users.filter((user) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      user.name?.toLowerCase().includes(searchLower) ||
      user.email?.toLowerCase().includes(searchLower) ||
      user.phone?.toLowerCase().includes(searchLower) ||
      user.website?.toLowerCase().includes(searchLower)
    );
  });

  if (state.error)
    return (
      <Error message={state.error} onRetry={() => window.location.reload()} />
    );
  if (state.loading) return <Loader />;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
      {/* Dynamic background gradient following mouse */}
      <div
        className="absolute inset-0 opacity-15 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.08), transparent 50%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 60 + 240}, 40%, 50%)`,
              borderRadius: "50%",
              boxShadow: `0 0 ${Math.random() * 8 + 3}px currentColor`,
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
              <div className="text-4xl animate-bounce">👥</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  Students Directory
                </h1>
                <p className="text-gray-300 text-lg font-light">
                  Connect with fellow students in your network •{" "}
                  {filteredUsers.length} members
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 w-64"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-purple-500 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "table"
                      ? "bg-purple-500 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 shadow-xl">
            <Activity className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-medium">
              Directory loaded successfully
            </span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full ml-3 animate-pulse"></div>
          </div>
        </header>

        {/* Content Display */}
        {viewMode === "grid" ? (
          <GridView users={filteredUsers} isVisible={isVisible} />
        ) : (
          <TableView users={filteredUsers} isVisible={isVisible} />
        )}

        {filteredUsers.length === 0 && !state.loading && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300 text-lg font-medium">
              No students found
            </p>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

const GridView = ({ users, isVisible }) => (
  <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {users.map((user, index) => (
      <UserCard
        key={user.id || index}
        user={user}
        index={index}
        isVisible={isVisible}
      />
    ))}
  </section>
);

const TableView = ({ users, isVisible }) => (
  <div
    className={`transform transition-all duration-1000 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ transitionDelay: "300ms" }}
  >
    <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-6 text-gray-300 font-semibold">
                User
              </th>
              <th className="text-left p-6 text-gray-300 font-semibold">
                Contact
              </th>
              <th className="text-left p-6 text-gray-300 font-semibold">
                Website
              </th>
              <th className="text-left p-6 text-gray-300 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id || index}
                className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
              >
                <td className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name ? (
                        user.name.charAt(0).toUpperCase()
                      ) : (
                        <User className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {user.name || "Unknown User"}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {user.email || "No email"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">
                        {user.email || "Not provided"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">
                        {user.phone || "Not provided"}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  {user.website ? (
                    <a
                      href={
                        user.website.startsWith("http")
                          ? user.website
                          : `https://${user.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">{user.website}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">Not provided</span>
                  )}
                </td>
                <td className="p-6">
                  <button className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-300">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const UserCard = ({ user, index, isVisible }) => {
  return (
    <div
      className={`group relative p-6 rounded-3xl bg-white/8 backdrop-blur-xl border border-white/20 hover:border-white/30 hover:bg-white/12 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Header with Avatar and Name */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-110 transition-transform duration-300">
              {user.name ? (
                user.name.charAt(0).toUpperCase()
              ) : (
                <User className="w-6 h-6" />
              )}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {user.name || "Unknown User"}
              </h3>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-300 opacity-0 group-hover:opacity-100">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
            <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-gray-300 text-xs uppercase tracking-wide font-medium mb-1">
                Email
              </p>
              <p className="text-white text-sm font-medium truncate">
                {user.email || "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
            <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-gray-300 text-xs uppercase tracking-wide font-medium mb-1">
                Phone
              </p>
              <p className="text-white text-sm font-medium">
                {user.phone || "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
            <Globe className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-gray-300 text-xs uppercase tracking-wide font-medium mb-1">
                Website
              </p>
              {user.website ? (
                <a
                  href={
                    user.website.startsWith("http")
                      ? user.website
                      : `https://${user.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center space-x-1 transition-colors duration-300"
                >
                  <span className="truncate">{user.website}</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              ) : (
                <p className="text-white text-sm font-medium">Not provided</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
          {user.website && (
            <a
              href={
                user.website.startsWith("http")
                  ? user.website
                  : `https://${user.website}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Error = ({ message, onRetry }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
    <div className="text-center p-8 rounded-3xl bg-white/8 backdrop-blur-xl border border-white/20 max-w-md mx-4">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-white mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-red-400 text-lg mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  </div>
);

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-pink-500/20 rounded-full animate-ping"></div>
      </div>
      <p className="text-white text-xl font-semibold mb-2">
        Loading Students Directory
      </p>
      <p className="text-gray-300">
        Please wait while we fetch the latest data...
      </p>
    </div>
  </div>
);
