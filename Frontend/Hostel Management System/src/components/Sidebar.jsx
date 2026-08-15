import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  LogOut,
  User,
  Bed,
  AlertTriangle
} from 'lucide-react';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = {
    Student: [
      {
        icon: <LayoutDashboard size={20} />,
        label: 'Dashboard',
        path: '/student'
      },
      {
        icon: <Bed size={20} />,
        label: 'Room Selection',
        path: '/room-selection'
      },
      {
        icon: <AlertTriangle size={20} />,
        label: 'Complaints',
        path: '/complaints'
      }
    ],

    Warden: [
      {
        icon: <LayoutDashboard size={20} />,
        label: 'Overview',
        path: '/warden'
      },
      {
        icon: <Bed size={20} />,
        label: 'Manage Rooms',
        path: '/warden/rooms'
      },
      {
        icon: <AlertTriangle size={20} />,
        label: 'Complaints',
        path: '/complaints'
      }
    ]
  };

  const currentMenu =
    menuItems[user?.role] || menuItems.Student;

  return (
    <div className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col justify-between p-4 text-white">
      <div>
        <div className="flex items-center gap-3 px-2 py-4 border-b border-zinc-800 mb-6">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
            H
          </div>

          <span className="font-semibold tracking-wide">
            Hostel Smart
          </span>
        </div>

        <nav className="space-y-1">
          {currentMenu.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-zinc-800 pt-4 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <User size={18} className="text-zinc-500" />

          <div>
            <p className="text-xs font-semibold">
              {user?.name || 'User'}
            </p>

            <p className="text-[10px] text-zinc-500 font-medium uppercase">
              {user?.role}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-all"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}