import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
    }`;

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-zinc-800 bg-zinc-950 p-5 md:block">

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
          H
        </div>

        <div>
          <h2 className="font-bold">
            HostelHub
          </h2>

          <p className="text-xs text-zinc-500">
            Management
          </p>
        </div>

      </div>

      {/* Menu */}
      <nav className="space-y-2">

        <NavLink
          to="/student"
          className={linkClass}
        >
          🏠
          Dashboard
        </NavLink>

        <NavLink
          to="/room-selection"
          className={linkClass}
        >
          🛏️
          Room Selection
        </NavLink>

        <NavLink
          to="/complaints"
          className={linkClass}
        >
          📢
          Complaints
        </NavLink>

        {(user?.role === "Warden" ||
          user?.role === "Admin") && (
          <NavLink
            to="/warden"
            className={linkClass}
          >
            👨‍💼
            Warden Dashboard
          </NavLink>
        )}

      </nav>

    </aside>
  );
}