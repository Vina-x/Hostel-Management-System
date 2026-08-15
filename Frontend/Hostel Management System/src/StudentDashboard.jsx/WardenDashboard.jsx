import React from "react";

export default function WardenDashboard() {
  const students = [
    {
      id: 1,
      name: "Aarav Sharma",
      room: "A-101",
      status: "Active",
    },
    {
      id: 2,
      name: "Riya Patel",
      room: "A-102",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Verma",
      room: "B-204",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sneha Joshi",
      room: "C-301",
      status: "Active",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">

      <div className="mb-8">
        <p className="text-blue-400">
          Warden Panel
        </p>

        <h1 className="mt-1 text-3xl font-bold">
          Hostel Overview
        </h1>

        <p className="mt-2 text-zinc-500">
          Monitor hostel activities and students.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <Card
          icon="👨‍🎓"
          title="Total Students"
          value="500"
        />

        <Card
          icon="🛏️"
          title="Total Rooms"
          value="250"
        />

        <Card
          icon="📢"
          title="Complaints"
          value="24"
        />

        <Card
          icon="💰"
          title="Fees Collected"
          value="92%"
        />

      </div>

      {/* Students */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

        <div className="flex items-center justify-between border-b border-zinc-800 p-6">

          <div>
            <h2 className="text-xl font-bold">
              Recent Students
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Recently registered hostel students
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-700">
            Add Student
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-zinc-950 text-sm text-zinc-500">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Room</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody>

              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-t border-zinc-800"
                >

                  <td className="px-6 py-4 font-medium">
                    {student.name}
                  </td>

                  <td className="px-6 py-4 text-zinc-400">
                    {student.room}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        student.status === "Active"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="text-3xl">
        {icon}
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-1 text-3xl font-bold">
        {value}
      </h3>

    </div>
  );
}