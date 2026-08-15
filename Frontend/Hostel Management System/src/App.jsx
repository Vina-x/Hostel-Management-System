import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentDashboard from "./StudentDashboard.jsx/StudentDashboard";
import RoomSelection from "./StudentDashboard.jsx/RoomSelection";
import Complaints from "./StudentDashboard.jsx/Complaints";
import WardenDashboard from "./StudentDashboard.jsx/WardenDashboard";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


function MainLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      
      <Sidebar />

      <div className="min-h-screen md:ml-64">
        
        <Navbar />

        <main className="p-4 md:p-6">
          <Routes>

            {/* Student Dashboard */}
            <Route
              path="/student"
              element={
                <ProtectedRoute allowedRoles={["Student"]}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />

            {/* Room Selection */}
            <Route
              path="/room-selection"
              element={
                <ProtectedRoute allowedRoles={["Student"]}>
                  <RoomSelection />
                </ProtectedRoute>
              }
            />

            {/* Complaints */}
            <Route
              path="/complaints"
              element={
                <ProtectedRoute
                  allowedRoles={["Student", "Warden", "Admin"]}
                >
                  <Complaints />
                </ProtectedRoute>
              }
            />

            {/* Warden Dashboard */}
            <Route
              path="/warden"
              element={
                <ProtectedRoute
                  allowedRoles={["Warden", "Admin"]}
                >
                  <WardenDashboard />
                </ProtectedRoute>
              }
            />

            {/* Default */}
            <Route
              path="*"
              element={
                <Navigate
                  to={
                    user.role === "Warden" ||
                    user.role === "Admin"
                      ? "/warden"
                      : "/student"
                  }
                  replace
                />
              }
            />

          </Routes>
        </main>

      </div>
    </div>
  );
}


function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/student" replace />
          ) : (
            <Login />
          )
        }
      />

      {/* Register */}
      <Route
        path="/register"
        element={
          user ? (
            <Navigate to="/student" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* Protected Layout */}
      <Route
        path="/*"
        element={<MainLayout />}
      />

    </Routes>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}