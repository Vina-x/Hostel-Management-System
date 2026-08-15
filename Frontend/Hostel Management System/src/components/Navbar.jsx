import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">

        <div>
          <h1 className="text-lg font-bold">
            Hostel Management
          </h1>

          <p className="text-xs text-zinc-500">
            Smart Hostel System
          </p>
        </div>

        {user && (
          <div className="flex items-center gap-3">

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">
                {user.name}
              </p>

              <p className="text-xs text-zinc-500">
                {user.role}
              </p>
            </div>

            <button
              onClick={logout}
              className="rounded-lg bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              Logout
            </button>

          </div>
        )}

      </div>
    </header>
  );
}