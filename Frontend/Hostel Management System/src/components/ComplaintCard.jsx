import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ComplaintCard({ complaint }) {
  const isResolved = complaint.status === 'Resolved';

  return (
    <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl flex items-start justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-indigo-400">
            {complaint.category}
          </span>

          <h4 className="text-sm font-bold text-white">
            {complaint.title}
          </h4>
        </div>

        <p className="text-xs text-zinc-400">
          {complaint.description}
        </p>
      </div>

      <div
        className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-lg ${
          isResolved
            ? 'bg-emerald-500/10 text-emerald-400'
            : 'bg-amber-500/10 text-amber-400'
        }`}
      >
        {isResolved ? (
          <CheckCircle size={14} />
        ) : (
          <AlertCircle size={14} />
        )}

        {complaint.status}
      </div>
    </div>
  );
}