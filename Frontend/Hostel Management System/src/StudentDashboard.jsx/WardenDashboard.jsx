import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, CheckSquare } from 'lucide-react';

export default function WardenDashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 text-white space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Warden Dashboard</h1>
        <p className="text-xs text-zinc-400 mt-1">Control and manage all hostel operations</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Students Card */}
        <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-blue-600/10 text-blue-400 rounded-xl"><Users size={24} /></div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">Total Students</p>
            <p className="text-lg font-bold">128 Students</p>
          </div>
        </div>
        {/* New Complaints Card */}
        <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-rose-600/10 text-rose-400 rounded-xl"><FileText size={24} /></div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">New Complaints</p>
            <p className="text-lg font-bold">04 Pending</p>
          </div>
        </div>
        {/* Today's Attendance Card */}
        <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-emerald-600/10 text-emerald-400 rounded-xl"><CheckSquare size={24} /></div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">Today's Attendance</p>
            <p className="text-lg font-bold text-emerald-400">92% Complete</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}