import React, { useState } from "react";

export default function Complaints() {
  const [complaint, setComplaint] = useState("");
  const [complaints, setComplaints] = useState([]);

  const submitComplaint = (e) => {
    e.preventDefault();

    if (!complaint.trim()) {
      return;
    }

    setComplaints((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: complaint,
        status: "Pending",
      },
    ]);

    setComplaint("");
  };

  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="text-3xl font-bold">
        Complaints
      </h1>

      <p className="mt-2 text-zinc-500">
        Submit and track your hostel complaints.
      </p>

      <form
        onSubmit={submitComplaint}
        className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
      >

        <label className="text-sm font-medium">
          Complaint
        </label>

        <textarea
          value={complaint}
          onChange={(e) =>
            setComplaint(e.target.value)
          }
          placeholder="Write your complaint..."
          rows="5"
          className="mt-3 w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
        >
          Submit Complaint
        </button>

      </form>

      <div className="mt-8 space-y-4">

        {complaints.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 p-8 text-center text-zinc-500">
            No complaints submitted yet.
          </div>
        ) : (
          complaints.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >

              <div className="flex items-start justify-between gap-4">

                <p className="text-zinc-300">
                  {item.text}
                </p>

                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                  {item.status}
                </span>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}