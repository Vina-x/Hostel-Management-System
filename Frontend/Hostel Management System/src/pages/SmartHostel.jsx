import { useState } from "react";
import { motion } from "framer-motion";
import {
  BedDouble,
  Bot,
  CheckCircle2,
  ChevronRight,
  Leaf,
  Map,
  MessageCircle,
  Send,
  ShieldCheck,
  Star,
  Wrench,
  X,
} from "lucide-react";

const rooms = [
  {
    id: 201,
    status: "available",
    type: "2 Sharing",
    match: 96,
    features: ["Quiet", "Study Table", "Near Washroom"],
  },
  {
    id: 202,
    status: "occupied",
    type: "3 Sharing",
    match: 82,
    features: ["Balcony", "Study Table"],
  },
  {
    id: 203,
    status: "available",
    type: "2 Sharing",
    match: 91,
    features: ["Quiet", "Balcony"],
  },
  {
    id: 204,
    status: "available",
    type: "2 Sharing",
    match: 88,
    features: ["Study Table", "Near Stairs"],
  },
  {
    id: 205,
    status: "maintenance",
    type: "3 Sharing",
    match: 72,
    features: ["Balcony"],
  },
  {
    id: 206,
    status: "occupied",
    type: "2 Sharing",
    match: 79,
    features: ["Quiet"],
  },
  {
    id: 207,
    status: "available",
    type: "3 Sharing",
    match: 86,
    features: ["Study Table", "Balcony"],
  },
  {
    id: 208,
    status: "available",
    type: "2 Sharing",
    match: 94,
    features: ["Quiet", "Study Table"],
  },
  {
    id: 209,
    status: "occupied",
    type: "3 Sharing",
    match: 76,
    features: ["Near Washroom"],
  },
  {
    id: 210,
    status: "available",
    type: "2 Sharing",
    match: 89,
    features: ["Quiet", "Balcony"],
  },
  {
    id: 211,
    status: "occupied",
    type: "2 Sharing",
    match: 81,
    features: ["Study Table"],
  },
  {
    id: 212,
    status: "available",
    type: "3 Sharing",
    match: 85,
    features: ["Balcony", "Near Stairs"],
  },
];

const statusClasses = {
  available:
    "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
  occupied:
    "border-red-400/30 bg-red-400/10 text-red-400",
  maintenance:
    "border-yellow-400/30 bg-yellow-400/10 text-yellow-400",
};

const complaints = [
  {
    id: "#1042",
    title: "Bathroom water leakage",
    priority: "High",
    progress: 72,
    status: "Maintenance Assigned",
  },
  {
    id: "#1037",
    title: "Fan not working",
    priority: "Medium",
    progress: 45,
    status: "Warden Approved",
  },
];

const healthData = [
  ["Rooms", 95],
  ["Safety", 96],
  ["Mess", 91],
  ["Cleanliness", 88],
  ["Green Score", 84],
];

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
        <Icon size={21} />
      </div>

      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-xs text-zinc-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default function SmartHostel() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAssistant, setShowAssistant] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 I'm HostelVerse Assistant. How can I help you?",
    },
  ]);

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    setMessages((old) => [
      ...old,
      { from: "user", text },
      {
        from: "bot",
        text: getBotReply(text),
      },
    ]);

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#050816] p-4 text-white md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            HOSTELVERSE • SMART ECOSYSTEM
          </p>

          <h1 className="mt-2 text-3xl font-black md:text-5xl">
            Smart Hostel Command Center
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Rooms, maintenance, safety and hostel health — everything in
            one intelligent dashboard.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Stat
            icon={BedDouble}
            title="My Room"
            value="204"
            text="2 Sharing"
          />

          <Stat
            icon={ShieldCheck}
            title="Safety"
            value="96%"
            text="Excellent"
          />

          <Stat
            icon={Wrench}
            title="Complaints"
            value="02"
            text="Active"
          />

          <Stat
            icon={Leaf}
            title="Eco Score"
            value="84"
            text="Very Good"
          />
        </div>

        {/* SMART ROOM MATCH */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
          <SectionTitle
            icon={Star}
            title="Smart Room Match"
            subtitle="Rooms recommended according to your preferences"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {rooms
              .filter((room) => room.status === "available")
              .sort((a, b) => b.match - a.match)
              .slice(0, 3)
              .map((room) => (
                <motion.button
                  key={room.id}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedRoom(room)}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 text-left transition hover:border-cyan-400/40"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-zinc-500">BEST MATCH</p>
                      <h3 className="mt-1 text-2xl font-black">
                        Room {room.id}
                      </h3>
                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-400">
                      {room.match}%
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-zinc-400">
                    {room.type}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.features.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-white/5 px-2 py-1 text-xs text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-sm text-cyan-400">
                    View Room
                    <ChevronRight size={16} />
                  </div>
                </motion.button>
              ))}
          </div>
        </section>

        {/* INTERACTIVE MAP */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
          <SectionTitle
            icon={Map}
            title="Interactive Hostel Map"
            subtitle="Hostel A • Floor 2 • Click a room"
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`rounded-2xl border p-4 transition hover:scale-105 ${statusClasses[room.status]}`}
              >
                <BedDouble className="mx-auto mb-2" size={20} />

                <p className="font-bold">{room.id}</p>

                <p className="mt-1 text-[10px] capitalize opacity-70">
                  {room.status}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-5 text-xs text-zinc-500">
            <Legend color="bg-emerald-400" text="Available" />
            <Legend color="bg-red-400" text="Occupied" />
            <Legend color="bg-yellow-400" text="Maintenance" />
          </div>
        </section>

        {/* ROOM MODAL */}
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1020] p-6"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-cyan-400">ROOM DETAILS</p>
                  <h2 className="mt-1 text-3xl font-black">
                    Room {selectedRoom.id}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedRoom(null)}
                  className="rounded-xl bg-white/5 p-2"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-6 space-y-3">
                <InfoRow label="Status" value={selectedRoom.status} />
                <InfoRow label="Room Type" value={selectedRoom.type} />
                <InfoRow
                  label="Smart Match"
                  value={`${selectedRoom.match}%`}
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedRoom.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-xl bg-cyan-400/10 px-3 py-2 text-xs text-cyan-300"
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>

              {selectedRoom.status === "available" && (
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="mt-6 w-full rounded-xl bg-cyan-400 py-3 font-bold text-black hover:bg-cyan-300"
                >
                  Select This Room
                </button>
              )}
            </motion.div>
          </div>
        )}

        {/* FIX FLOW + HEALTH */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* FIX FLOW */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <SectionTitle
              icon={Wrench}
              title="FixFlow"
              subtitle="Track your complaints"
            />

            <div className="space-y-5">
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-bold">
                        {complaint.title}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        Complaint {complaint.id}
                      </p>
                    </div>

                    <span
                      className={`h-fit rounded-full px-3 py-1 text-xs ${
                        complaint.priority === "High"
                          ? "bg-red-400/10 text-red-400"
                          : "bg-yellow-400/10 text-yellow-400"
                      }`}
                    >
                      {complaint.priority}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-between text-xs">
                    <span className="text-zinc-500">
                      {complaint.status}
                    </span>

                    <span className="text-cyan-400">
                      {complaint.progress}%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${complaint.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HEALTH */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <SectionTitle
              icon={ShieldCheck}
              title="Hostel Health Score"
              subtitle="Overall hostel performance"
            />

            <div className="flex flex-col items-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-cyan-400/20">
                <div className="text-center">
                  <p className="text-5xl font-black text-cyan-400">
                    92
                  </p>
                  <p className="text-xs text-zinc-500">
                    Excellent
                  </p>
                </div>
              </div>

              <div className="mt-7 w-full space-y-4">
                {healthData.map(([name, value]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-zinc-400">{name}</span>
                      <span className="text-cyan-400">{value}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-cyan-400"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ASSISTANT BUTTON */}
        <button
          onClick={() => setShowAssistant(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-4 font-bold text-black shadow-2xl shadow-cyan-400/20 transition hover:scale-105"
        >
          <Bot size={21} />
          Hostel Assistant
        </button>

        {/* ASSISTANT */}
        {showAssistant && (
          <div className="fixed bottom-24 right-5 z-50 w-[calc(100%-40px)] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] shadow-2xl">

            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-400">
                  <Bot size={20} />
                </div>

                <div>
                  <p className="font-bold">Hostel Assistant</p>
                  <p className="text-xs text-emerald-400">
                    ● Online
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowAssistant(false)}
                className="rounded-lg bg-white/5 p-2"
              >
                <X size={18} />
              </button>
            </div>

            <div className="h-72 space-y-3 overflow-y-auto p-4">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${
                    item.from === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      item.from === "user"
                        ? "bg-cyan-400 text-black"
                        : "bg-white/5 text-zinc-300"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask about your hostel..."
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <button
                  onClick={sendMessage}
                  className="rounded-xl bg-cyan-400 px-4 text-black"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function getBotReply(text) {
  const query = text.toLowerCase();

  if (query.includes("room")) {
    return "Your best available room match is Room 201 with a 96% match score. 🛏️";
  }

  if (query.includes("mess") || query.includes("food")) {
    return "Today's dinner includes Paneer, Roti and Salad. Current rating is 4.4 ⭐";
  }

  if (query.includes("complaint")) {
    return "You currently have 2 active complaints. Complaint #1042 is 72% complete. 🔧";
  }

  if (query.includes("fee")) {
    return "Your hostel fee status is PAID. The next due date is September 10.";
  }

  if (query.includes("safety")) {
    return "Hostel safety status is GOOD with a current score of 96%. 🛡️";
  }

  return "I can help you with rooms, mess, complaints, fees and hostel safety. Try asking about one of these.";
}

function Stat({ icon: Icon, title, value, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        <Icon size={20} />
      </div>

      <p className="mt-4 text-sm text-zinc-500">{title}</p>

      <h3 className="mt-1 text-2xl font-black">{value}</h3>

      <p className="mt-1 text-xs text-zinc-600">{text}</p>
    </motion.div>
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

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between rounded-xl bg-white/5 p-3">
      <span className="text-sm text-zinc-500">{label}</span>
      <span className="text-sm font-semibold capitalize">{value}</span>
    </div>
  );
}