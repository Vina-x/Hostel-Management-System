import { useState } from "react";
import {
  BedDouble,
  Utensils,
  Wrench,
  Leaf,
  ShieldCheck,
  Map,
  QrCode,
  Star,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  { id: 101, status: "available" },
  { id: 102, status: "occupied" },
  { id: 103, status: "available" },
  { id: 104, status: "maintenance" },
  { id: 105, status: "occupied" },
  { id: 106, status: "available" },
  { id: 107, status: "occupied" },
  { id: 108, status: "available" },
  { id: 109, status: "maintenance" },
  { id: 110, status: "available" },
  { id: 111, status: "occupied" },
  { id: 112, status: "available" },
];

const statusStyle = {
  available:
    "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
  occupied:
    "bg-red-500/15 border-red-500/30 text-red-400",
  maintenance:
    "bg-yellow-500/15 border-yellow-500/30 text-yellow-400",
};

export default function SmartDashboard() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="min-h-screen bg-[#050816] text-white p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-cyan-400 text-sm font-semibold">
            HOSTELVERSE • SMART HOSTEL OS
          </p>

          <h1 className="text-3xl md:text-5xl font-black mt-2">
            Good Morning 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            Your complete hostel overview is here.
          </p>
        </div>

        {/* TOP STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <StatCard
            icon={BedDouble}
            title="My Room"
            value="204"
            subtitle="2 Sharing"
          />

          <StatCard
            icon={CheckCircle2}
            title="Fees"
            value="PAID"
            subtitle="Next due: Sep 10"
          />

          <StatCard
            icon={Wrench}
            title="Complaints"
            value="01"
            subtitle="In Progress"
          />

          <StatCard
            icon={ShieldCheck}
            title="Safety"
            value="GOOD"
            subtitle="All systems normal"
          />

        </div>

        {/* ROOM RADAR */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7"
        >

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
                <Map size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Live Room Radar
                </h2>

                <p className="text-xs text-zinc-500">
                  Hostel A • Floor 2
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs">
              ● LIVE
            </span>

          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">

            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`h-20 rounded-2xl border transition hover:scale-105 ${statusStyle[room.status]}`}
              >
                <BedDouble className="mx-auto mb-1" size={19} />

                <span className="font-bold">
                  {room.id}
                </span>

                <p className="text-[10px] capitalize opacity-70">
                  {room.status}
                </p>
              </button>
            ))}

          </div>

          <div className="flex flex-wrap gap-5 mt-6 text-xs text-zinc-400">

            <Legend
              color="bg-emerald-400"
              text="Available"
            />

            <Legend
              color="bg-red-400"
              text="Occupied"
            />

            <Legend
              color="bg-yellow-400"
              text="Maintenance"
            />

          </div>

          {selectedRoom && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5"
            >
              <div className="flex justify-between">

                <div>
                  <p className="text-xs text-zinc-500">
                    SELECTED ROOM
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    Room {selectedRoom.id}
                  </h3>

                  <p className="text-zinc-400 capitalize">
                    Status: {selectedRoom.status}
                  </p>
                </div>

                {selectedRoom.status === "available" && (
                  <button className="self-center rounded-xl bg-cyan-400 px-5 py-2 font-bold text-black">
                    Select Room
                  </button>
                )}

              </div>
            </motion.div>
          )}

        </motion.section>

        {/* SMART CARDS */}
        <div className="grid lg:grid-cols-3 gap-5 mt-6">

          {/* MESS PULSE */}
          <SmartCard
            icon={Utensils}
            title="Mess Pulse"
            color="text-orange-400"
          >

            <div className="space-y-4">

              <Meal
                name="Breakfast"
                food="Poha • Tea • Banana"
                rating="4.2"
              />

              <Meal
                name="Lunch"
                food="Dal • Rice • Roti"
                rating="4.5"
              />

              <Meal
                name="Dinner"
                food="Paneer • Roti • Salad"
                rating="4.4"
              />

            </div>

          </SmartCard>

          {/* FIX FLOW */}
          <SmartCard
            icon={Wrench}
            title="FixFlow"
            color="text-yellow-400"
          >

            <div className="space-y-5">

              <Progress
                title="Complaint #1042"
                status="In Progress"
                value={65}
              />

              <Progress
                title="Complaint #1037"
                status="Assigned"
                value={35}
              />

              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={17} />
                12 complaints resolved
              </div>

            </div>

          </SmartCard>

          {/* HEALTH SCORE */}
          <SmartCard
            icon={ActivityIcon}
            title="Hostel Health"
            color="text-cyan-400"
          >

            <div className="text-center">

              <div className="relative mx-auto h-32 w-32">

                <div className="absolute inset-0 rounded-full border-8 border-cyan-400/10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-4xl font-black text-cyan-400">
                      92
                    </p>

                    <p className="text-xs text-zinc-500">
                      Excellent
                    </p>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 text-left">

                <MiniScore name="Rooms" value="95%" />
                <MiniScore name="Mess" value="91%" />
                <MiniScore name="Safety" value="96%" />
                <MiniScore name="Clean" value="88%" />

              </div>

            </div>

          </SmartCard>

        </div>

        {/* GREEN SCORE + DIGITAL PASS */}
        <div className="grid lg:grid-cols-2 gap-5 mt-6">

          {/* GREEN SCORE */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6"
          >

            <div className="flex items-center gap-3 mb-6">

              <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400">
                <Leaf size={22} />
              </div>

              <div>
                <h2 className="font-bold text-xl">
                  Green Hostel Score
                </h2>

                <p className="text-xs text-zinc-500">
                  Environmental performance
                </p>
              </div>

            </div>

            <div className="flex items-center gap-6">

              <div className="text-5xl font-black text-emerald-400">
                84
              </div>

              <div className="flex-1 space-y-4">

                <GreenBar
                  name="Water Saving"
                  value={74}
                />

                <GreenBar
                  name="Electricity"
                  value={82}
                />

                <GreenBar
                  name="Waste Management"
                  value={91}
                />

              </div>

            </div>

          </motion.div>

          {/* DIGITAL HOSTEL PASS */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-violet-400/20 bg-violet-400/[0.04] p-6"
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-xs text-violet-400 font-semibold">
                  DIGITAL HOSTEL PASS
                </p>

                <h2 className="text-2xl font-black mt-2">
                  Vina Parmar
                </h2>

                <p className="text-zinc-400 mt-1">
                  Room 204 • Hostel A
                </p>

              </div>

              <div className="rounded-2xl bg-white p-3">
                <QrCode className="text-black" size={65} />
              </div>

            </div>

            <div className="mt-6 flex justify-between text-xs text-zinc-500">
              <span>VALID STUDENT</span>
              <span>ID: HV-204</span>
            </div>

          </motion.div>

        </div>

        {/* QUICK ACTIONS */}
        <section className="mt-6">

          <h2 className="text-xl font-bold mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Action
              icon={BedDouble}
              title="Find Room"
            />

            <Action
              icon={Wrench}
              title="New Complaint"
            />

            <Action
              icon={Utensils}
              title="Mess Menu"
            />

            <Action
              icon={ShieldCheck}
              title="Safety Center"
            />

          </div>

        </section>

      </div>
    </div>
  );
}


/* COMPONENTS */

function StatCard({ icon: Icon, title, value, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >

      <div className="flex items-center justify-between">

        <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400">
          <Icon size={20} />
        </div>

        <span className="text-xs text-zinc-600">
          LIVE
        </span>

      </div>

      <p className="text-zinc-500 text-sm mt-5">
        {title}
      </p>

      <h3 className="text-2xl font-black mt-1">
        {value}
      </h3>

      <p className="text-xs text-zinc-600 mt-1">
        {subtitle}
      </p>

    </motion.div>
  );
}


function SmartCard({ icon: Icon, title, color, children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
    >

      <div className="flex items-center gap-3 mb-6">

        <div className={`p-3 rounded-xl bg-white/5 ${color}`}>
          <Icon size={21} />
        </div>

        <h2 className="text-xl font-bold">
          {title}
        </h2>

      </div>

      {children}

    </motion.div>
  );
}


function Meal({ name, food, rating }) {
  return (
    <div className="flex items-center justify-between">

      <div>
        <p className="font-semibold">
          {name}
        </p>

        <p className="text-xs text-zinc-500 mt-1">
          {food}
        </p>
      </div>

      <div className="flex items-center gap-1 text-yellow-400 text-sm">
        <Star size={14} fill="currentColor" />
        {rating}
      </div>

    </div>
  );
}


function Progress({ title, status, value }) {
  return (
    <div>

      <div className="flex justify-between text-sm mb-2">

        <span>{title}</span>

        <span className="text-yellow-400">
          {status}
        </span>

      </div>

      <div className="h-2 rounded-full bg-white/5 overflow-hidden">

        <div
          className="h-full bg-yellow-400 rounded-full"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}


function MiniScore({ name, value }) {
  return (
    <div className="rounded-xl bg-white/5 p-3">
      <p className="text-xs text-zinc-500">
        {name}
      </p>

      <p className="font-bold mt-1">
        {value}
      </p>
    </div>
  );
}


function GreenBar({ name, value }) {
  return (
    <div>

      <div className="flex justify-between text-xs mb-1">
        <span className="text-zinc-400">{name}</span>
        <span className="text-emerald-400">{value}%</span>
      </div>

      <div className="h-1.5 rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-emerald-400"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}


function Action({ icon: Icon, title }) {
  return (
    <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-cyan-400/30 hover:bg-cyan-400/5">

      <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
        <Icon size={19} />
      </div>

      <span className="font-semibold text-sm">
        {title}
      </span>

    </button>
  );
}


function Legend({ color, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      {text}
    </div>
  );
}


function ActivityIcon(props) {
  return <Activity {...props} />;
}