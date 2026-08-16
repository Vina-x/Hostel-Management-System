import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Page Imports
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import WardenDashboard from './pages/WardenDashboard';
import RoomSelection from './pages/RoomSelection';
import Complaints from './pages/Complaints';

function MainLayout() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="flex bg-zinc-950 min-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/student" element={<ProtectedRoute allowedRoles={['Student']}><StudentDashboard /></ProtectedRoute>} />
            <Route path="/room-selection" element={<ProtectedRoute allowedRoles={['Student']}><RoomSelection /></ProtectedRoute>} />
            <Route path="/complaints" element={<ProtectedRoute><Complaints /></ProtectedRoute>} />
            <Route path="/warden" element={<ProtectedRoute allowedRoles={['Warden', 'Admin']}><WardenDashboard /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to={user.role === 'Warden' ? "/warden" : "/student"} replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}