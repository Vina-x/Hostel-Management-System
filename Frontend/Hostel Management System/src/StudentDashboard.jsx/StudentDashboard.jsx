import React from "react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Student Dashboard
        </h1>

        <p className="text-zinc-400 mb-8">
          Welcome to Hostel Management System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Room
            </h2>

            <p className="text-zinc-400 mt-2">
              Check your room details
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Complaints
            </h2>

            <p className="text-zinc-400 mt-2">
              Manage your complaints
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Hostel
            </h2>

            <p className="text-zinc-400 mt-2">
              View hostel information
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}