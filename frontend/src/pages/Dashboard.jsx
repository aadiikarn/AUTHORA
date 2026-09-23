import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/authService";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      try {
        const data = await getCurrentUser(token);
        setUser(data.user);
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <nav className="dashboard-nav">
        <div>
          <h2>AUTHORA</h2>
          <span>Secure Access. Simple Experience.</span>
        </div>

        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <main className="dashboard-content">
        <div className="welcome-card">
          <p className="dashboard-label">AUTHENTICATED USER</p>

          <h1>
            Welcome, {user?.username} 👋
          </h1>

          <p>
            You have successfully accessed the protected
            AUTHORA dashboard.
          </p>
        </div>

        <div className="user-card">
          <h3>Account Information</h3>

          <div className="user-info">
            <div>
              <span>Username</span>
              <strong>{user?.username}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{user?.email}</strong>
            </div>

            <div>
              <span>Account ID</span>
              <strong>{user?._id}</strong>
            </div>
          </div>
        </div>

        <div className="security-card">
          <div className="security-icon">✓</div>

          <div>
            <h3>Authentication Active</h3>
            <p>
              Your session is protected using JWT
              authentication.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;