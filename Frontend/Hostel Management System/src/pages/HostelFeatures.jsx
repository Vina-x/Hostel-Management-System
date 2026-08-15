import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Package,
  Utensils,
  Wallet,
  CalendarDays,
  Megaphone,
  Trophy,
  ShieldAlert,
  Star,
  Clock,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";

// ======================================================
// AUTH
// ======================================================

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// ======================================================
// PAGES
// ======================================================

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LostFound from "./pages/LostFound";
import SmartDashboard from "./pages/SmartDashboard";
import SmartHostel from "./pages/SmartHostel";

// ======================================================
// STUDENT DASHBOARD
// ======================================================

import StudentDashboard from "./StudentDashboard.jsx/StudentDashboard";
import Complaints from "./StudentDashboard.jsx/Complaints";
import ManageRooms from "./StudentDashboard.jsx/ManageRooms";
import ManageStudents from "./StudentDashboard.jsx/ManageStudents";
import MyRoom from "./StudentDashboard.jsx/MyRoom";
import RoomSelection from "./StudentDashboard.jsx/RoomSelection";


// ======================================================
// APP
// ======================================================

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>

          {/* ==================================================
              HOME
          ================================================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ==================================================
              AUTH
          ================================================== */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />


          {/* ==================================================
              SMART HOSTEL FEATURES
          ================================================== */}

          <Route
            path="/hostel-features"
            element={<HostelFeatures />}
          />

          <Route
            path="/smart-dashboard"
            element={<SmartDashboard />}
          />

          <Route
            path="/smart-hostel"
            element={<SmartHostel />}
          />

          <Route
            path="/lost-found"
            element={<LostFound />}
          />


          {/* ==================================================
              STUDENT DASHBOARD
          ================================================== */}

          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />


          {/* ==================================================
              COMPLAINTS
          ================================================== */}

          <Route
            path="/student-dashboard/complaints"
            element={
              <ProtectedRoute>
                <Complaints />
              </ProtectedRoute>
            }
          />


          {/* ==================================================
              MANAGE ROOMS
          ================================================== */}

          <Route
            path="/student-dashboard/manage-rooms"
            element={
              <ProtectedRoute>
                <ManageRooms />
              </ProtectedRoute>
            }
          />


          {/* ==================================================
              MANAGE STUDENTS
          ================================================== */}

          <Route
            path="/student-dashboard/manage-students"
            element={
              <ProtectedRoute>
                <ManageStudents />
              </ProtectedRoute>
            }
          />


          {/* ==================================================
              MY ROOM
          ================================================== */}

          <Route
            path="/student-dashboard/my-room"
            element={
              <ProtectedRoute>
                <MyRoom />
              </ProtectedRoute>
            }
          />


          {/* ==================================================
              ROOM SELECTION
          ================================================== */}

          <Route
            path="/student-dashboard/room-selection"
            element={
              <ProtectedRoute>
                <RoomSelection />
              </ProtectedRoute>
            }
          />


          {/* ==================================================
              404
          ================================================== */}

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}


// ======================================================
// HOSTEL FEATURES PAGE
// ======================================================

function HostelFeatures() {

  const [mealRating, setMealRating] = useState(0);
  const [activeTab, setActiveTab] = useState("all");

  // ======================================================
  // DATA
  // ======================================================

  const notices = [
    {
      title: "Water Supply Maintenance",
      type: "Important",
      time: "Today • 4:00 PM",
    },
    {
      title: "Hostel Cultural Night",
      type: "Event",
      time: "22 August",
    },
    {
      title: "Monthly Room Inspection",
      type: "General",
      time: "25 August",
    },
  ];

  const parcels = [
    {
      company: "Amazon",
      id: "PKG-2041",
      status: "Ready for Pickup",
      date: "Today",
    },
    {
      company: "Flipkart",
      id: "PKG-2048",
      status: "In Transit",
      date: "Expected Tomorrow",
    },
  ];

  const events = [
    {
      title: "Hostel Cultural Night",
      date: "22 Aug",
      location: "Main Auditorium",
    },
    {
      title: "Sports Day",
      date: "28 Aug",
      location: "College Ground",
    },
    {
      title: "Coding Workshop",
      date: "30 Aug",
      location: "Seminar Hall",
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "Aarav",
      points: 920,
    },
    {
      rank: 2,
      name: "Vina",
      points: 850,
    },
    {
      rank: 3,
      name: "Riya",
      points: 790,
    },
    {
      rank: 4,
      name: "Aditya",
      points: 720,
    },
  ];


  // ======================================================
  // FILTERED DATA
  // ======================================================

  const featureCards = [
    {
      category: "student",
      icon: Package,
      title: "My Parcels",
      value: "02",
      text: "1 ready for pickup",
      iconClass: "text-violet-400 bg-violet-400/10",
    },
    {
      category: "student",
      icon: Wallet,
      title: "Fee Status",
      value: "PAID",
      text: "Next due: Sep 10",
      iconClass: "text-emerald-400 bg-emerald-400/10",
    },
    {
      category: "student",
      icon: Trophy,
      title: "My Points",
      value: "850",
      text: "Rank #2",
      iconClass: "text-yellow-400 bg-yellow-400/10",
    },
    {
      category: "safety",
      icon: ShieldAlert,
      title: "Safety",
      value: "96%",
      text: "All systems normal",
      iconClass: "text-cyan-400 bg-cyan-400/10",
    },
  ];

  const filteredCards =
    activeTab === "all"
      ? featureCards
      : featureCards.filter(
          (card) => card.category === activeTab
        );


  // ======================================================
  // UI
  // ======================================================

  return (
    <div className="min-h-screen bg-[#050816] p-4 text-white md:p-8">

      <div className="mx-auto max-w-7xl">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-8">

          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            HOSTELVERSE
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Smart Hostel Features
          </h1>

          <p className="mt-3 text-zinc-400">
            Everything you need for a smarter hostel experience.
          </p>

        </div>


        {/* ==================================================
            FEATURE NAVIGATION
        ================================================== */}

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">

          {["all", "student", "hostel", "safety"].map(
            (tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-5 py-2 text-sm capitalize transition ${
                  activeTab === tab
                    ? "bg-cyan-400 text-black"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>

            )
          )}

        </div>


        {/* ==================================================
            FEATURE CARDS
        ================================================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {filteredCards.map((card) => (

            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              value={card.value}
              text={card.text}
              iconClass={card.iconClass}
            />

          ))}

        </div>


        {/* ==================================================
            MAIN GRID
        ================================================== */}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">


          {/* ==================================================
              PARCEL TRACKER
          ================================================== */}

          <Panel
            icon={Package}
            title="Parcel Tracker"
            subtitle="Track your hostel deliveries"
          >

            <div className="space-y-4">

              {parcels.map((parcel) => (

                <motion.div
                  key={parcel.id}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-violet-400/10 p-3 text-violet-400">
                        <Package size={20} />
                      </div>

                      <div>

                        <h3 className="font-bold">
                          {parcel.company}
                        </h3>

                        <p className="text-xs text-zinc-500">
                          {parcel.id}
                        </p>

                      </div>

                    </div>


                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        parcel.status === "Ready for Pickup"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-yellow-400/10 text-yellow-400"
                      }`}
                    >
                      {parcel.status}
                    </span>

                  </div>


                  <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">

                    <Clock size={14} />

                    {parcel.date}

                  </div>

                </motion.div>

              ))}

            </div>

          </Panel>


          {/* ==================================================
              MESS
          ================================================== */}

          <Panel
            icon={Utensils}
            title="Mess Pulse"
            subtitle="Today's menu & student rating"
          >

            <div className="space-y-4">

              <Meal
                name="Breakfast"
                food="Poha • Tea • Banana"
                rating="4.2"
              />

              <Meal
                name="Lunch"
                food="Dal • Rice • Roti • Salad"
                rating="4.5"
              />

              <Meal
                name="Dinner"
                food="Paneer • Roti • Salad"
                rating="4.4"
              />

            </div>


            <div className="mt-6 border-t border-white/10 pt-5">

              <p className="text-sm font-semibold">
                Rate today's food
              </p>


              <div className="mt-3 flex gap-2">

                {[1, 2, 3, 4, 5].map(
                  (number) => (

                    <button
                      key={number}
                      onClick={() =>
                        setMealRating(number)
                      }
                      className={`transition ${
                        number <= mealRating
                          ? "text-yellow-400"
                          : "text-zinc-700"
                      }`}
                    >

                      <Star
                        size={24}
                        fill={
                          number <= mealRating
                            ? "currentColor"
                            : "none"
                        }
                      />

                    </button>

                  )
                )}

              </div>


              {mealRating > 0 && (

                <p className="mt-2 text-xs text-emerald-400">
                  Thanks! Your {mealRating}/5 rating was recorded.
                </p>

              )}

            </div>

          </Panel>


          {/* ==================================================
              EVENTS
          ================================================== */}

          <Panel
            icon={CalendarDays}
            title="Upcoming Events"
            subtitle="Never miss hostel activities"
          >

            <div className="space-y-3">

              {events.map((event) => (

                <motion.div
                  key={event.title}
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >

                  <div className="min-w-[60px] rounded-xl bg-cyan-400/10 p-3 text-center text-cyan-400">

                    <p className="text-xs">
                      AUG
                    </p>

                    <p className="text-xl font-black">
                      {event.date.split(" ")[0]}
                    </p>

                  </div>


                  <div className="flex-1">

                    <h3 className="font-bold">
                      {event.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">

                      <MapPin size={13} />

                      {event.location}

                    </div>

                  </div>


                  <button
                    className="rounded-xl bg-white/5 px-3 py-2 text-xs transition hover:bg-cyan-400 hover:text-black"
                  >
                    Join
                  </button>

                </motion.div>

              ))}

            </div>

          </Panel>


          {/* ==================================================
              LEADERBOARD
          ================================================== */}

          <Panel
            icon={Trophy}
            title="Hostel Leaderboard"
            subtitle="Friendly community points"
          >

            <div className="space-y-3">

              {leaderboard.map((student) => (

                <div
                  key={student.rank}
                  className={`flex items-center gap-4 rounded-2xl p-4 ${
                    student.name === "Vina"
                      ? "border border-cyan-400/20 bg-cyan-400/5"
                      : "bg-white/[0.03]"
                  }`}
                >

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 font-black">
                    {student.rank}
                  </div>


                  <div className="flex-1">

                    <p className="font-semibold">

                      {student.name}

                      {student.name === "Vina" && (

                        <span className="ml-2 text-xs text-cyan-400">
                          YOU
                        </span>

                      )}

                    </p>

                    <p className="text-xs text-zinc-500">
                      Hostel Points
                    </p>

                  </div>


                  <p className="font-black text-yellow-400">
                    {student.points}
                  </p>

                </div>

              ))}

            </div>

          </Panel>

        </div>


        {/* ==================================================
            NOTICE BOARD
        ================================================== */}

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-orange-400/10 p-3 text-orange-400">
                <Megaphone size={21} />
              </div>

              <div>

                <h2 className="text-xl font-bold">
                  Smart Notice Board
                </h2>

                <p className="text-xs text-zinc-500">
                  Important hostel announcements
                </p>

              </div>

            </div>


            <button
              className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
            >
              <Plus size={18} />
            </button>

          </div>


          <div className="grid gap-4 md:grid-cols-3">

            {notices.map((notice) => (

              <div
                key={notice.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >

                <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs text-orange-400">
                  {notice.type}
                </span>

                <h3 className="mt-4 font-bold">
                  {notice.title}
                </h3>

                <p className="mt-2 text-xs text-zinc-500">
                  {notice.time}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* ==================================================
            EMERGENCY CENTER
        ================================================== */}

        <section className="mt-6 rounded-3xl border border-red-400/20 bg-red-400/[0.03] p-6">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-red-400/10 p-4 text-red-400">
                <ShieldAlert size={28} />
              </div>

              <div>

                <h2 className="text-xl font-bold">
                  Emergency Center
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Quick access to important contacts
                </p>

              </div>

            </div>


            <div className="flex flex-wrap gap-3">

              <EmergencyButton
                icon={Phone}
                title="Security"
                number="100"
              />

              <EmergencyButton
                icon={Phone}
                title="Ambulance"
                number="108"
              />

              <EmergencyButton
                icon={Phone}
                title="Warden"
                number="Contact"
              />

            </div>

          </div>

        </section>


        {/* ==================================================
            FOOTER
        ================================================== */}

        <div className="py-10 text-center text-xs text-zinc-600">
          HostelVerse • Smart Hostel Ecosystem
        </div>

      </div>

    </div>
  );
}


// ======================================================
// FEATURE CARD
// ======================================================

function FeatureCard({
  icon: Icon,
  title,
  value,
  text,
  iconClass,
}) {
  return (

    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >

      <div
        className={`w-fit rounded-xl p-3 ${iconClass}`}
      >
        <Icon size={20} />
      </div>


      <p className="mt-4 text-sm text-zinc-500">
        {title}
      </p>


      <h3 className="mt-1 text-2xl font-black">
        {value}
      </h3>


      <p className="mt-1 text-xs text-zinc-600">
        {text}
      </p>

    </motion.div>

  );
}


// ======================================================
// PANEL
// ======================================================

function Panel({
  icon: Icon,
  title,
  subtitle,
  children,
}) {
  return (

    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
          <Icon size={21} />
        </div>


        <div>

          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <p className="text-xs text-zinc-500">
            {subtitle}
          </p>

        </div>

      </div>


      {children}

    </section>

  );
}


// ======================================================
// MEAL
// ======================================================

function Meal({
  name,
  food,
  rating,
}) {
  return (

    <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] p-4">

      <div>

        <p className="font-semibold">
          {name}
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          {food}
        </p>

      </div>


      <div className="flex items-center gap-1 text-yellow-400">

        <Star
          size={15}
          fill="currentColor"
        />

        <span className="text-sm font-bold">
          {rating}
        </span>

      </div>

    </div>

  );
}


// ======================================================
// EMERGENCY BUTTON
// ======================================================

function EmergencyButton({
  icon: Icon,
  title,
  number,
}) {
  return (

    <button
      className="flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 transition hover:bg-red-400/10"
    >

      <Icon
        size={18}
        className="text-red-400"
      />


      <div className="text-left">

        <p className="text-xs text-zinc-500">
          {title}
        </p>

        <p className="text-sm font-bold">
          {number}
        </p>

      </div>

    </button>

  );
}