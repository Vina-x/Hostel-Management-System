import React, { useState } from "react";

export default function RoomSelection() {
  const [selected, setSelected] = useState("");

  const rooms = [
    { id: "A-101", beds: 2, available: true },
    { id: "A-102", beds: 3, available: true },
    { id: "B-201", beds: 2, available: false },
    { id: "B-204", beds: 2, available: true },
    { id: "C-301", beds: 4, available: true },
    { id: "C-305", beds: 3, available: false },
  ];

  return (
    <div className="mx-auto max-w-7xl">

      <h1 className="text-3xl font-bold">
        Room Selection
      </h1>

      <p className="mt-2 text-zinc-500">
        Select an available room.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {rooms.map((room) => (
          <button
            key={room.id}
            disabled={!room.available}
            onClick={() => setSelected(room.id)}
            className={`rounded-2xl border p-6 text-left transition ${
              !room.available
                ? "cursor-not-allowed border-zinc-800 bg-zinc-900 opacity-50"
                : selected === room.id
                ? "border-blue-500 bg-blue-500/10"
                : "border-zinc-800 bg-zinc-900 hover:border-blue-500/50"
            }`}
          >

            <div className="flex items-center justify-between">

              <span className="text-2xl">
                🛏️
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  room.available
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {room.available
                  ? "Available"
                  : "Occupied"}
              </span>

            </div>

            <h2 className="mt-5 text-xl font-bold">
              Room {room.id}
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {room.beds} beds
            </p>

          </button>
        ))}

      </div>

      {selected && (
        <div className="mt-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
          <p className="text-blue-400">
            Selected Room
          </p>

          <p className="mt-1 text-xl font-bold">
            {selected}
          </p>

          <button
            onClick={() =>
              alert(`Room ${selected} selected successfully!`)
            }
            className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Confirm Room
          </button>
        </div>
      )}

    </div>
  );
}