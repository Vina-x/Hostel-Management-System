import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Utensils,
  Wrench,
  ShieldCheck,
  Bell,
  Activity,
  Users,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BedDouble,
    title: "Room Radar",
    text: "Find available rooms instantly with a smart visual room map.",
  },
  {
    icon: Utensils,
    title: "Mess Pulse",
    text: "Check today's menu and share your food experience.",
  },
  {
    icon: Wrench,
    title: "FixFlow",
    text: "Track maintenance complaints from submitted to resolved.",
  },
  {
    icon: Bell,
    title: "Campus Feed",
    text: "Never miss hostel announcements, events or important updates.",
  },
  {
    icon: Activity,
    title: "Live Analytics",
    text: "View hostel occupancy and activity through interactive cards.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    text: "Separate access for students, wardens and administrators.",
  },
];

const stats = [
  ["98%", "Complaint Resolution"],
  ["24/7", "Hostel Support"],
  ["500+", "Students"],
  ["100%", "Digital Management"],
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              <Building2 className="text-cyan-400" size={23} />
            </div>

            <div>
              <h1 className="text-xl font-black">
                Hostel<span className="text-cyan-400">Verse</span>
              </h1>

              <p className="text-[10px] uppercase tracking-[3px] text-zinc-500">
                Smart Hostel OS
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              Join HostelVerse
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={15} />
              The future of hostel management
            </div>

            <h2 className="text-5xl font-black leading-[1.05] md:text-7xl">

              Your Hostel.

              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Reimagined.
              </span>

            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              HostelVerse brings rooms, complaints, mess, fees,
              notifications and hostel activities into one intelligent
              digital space.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/register"
                className="group flex items-center gap-2 rounded-2xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
              >
                Enter HostelVerse

                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/login"
                className="rounded-2xl border border-white/10 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Explore Dashboard
              </Link>

            </div>

          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">

              {/* Header */}
              <div className="mb-5 flex items-center justify-between">

                <div>
                  <p className="text-xs text-zinc-500">
                    HOSTEL COMMAND CENTER
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Good morning 👋
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Activity size={20} />
                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-zinc-500">
                    OCCUPANCY
                  </p>

                  <p className="mt-2 text-3xl font-black text-cyan-400">
                    82%
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    +4.2% this month
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-zinc-500">
                    OPEN ROOMS
                  </p>

                  <p className="mt-2 text-3xl font-black text-violet-400">
                    24
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Ready to book
                  </p>
                </div>

              </div>

              {/* Room Radar */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">

                <div className="mb-4 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <BedDouble size={18} className="text-cyan-400" />
                    <span className="font-semibold">
                      Room Radar
                    </span>
                  </div>

                  <span className="text-xs text-green-400">
                    LIVE
                  </span>

                </div>

                <div className="grid grid-cols-6 gap-2">

                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 rounded-lg ${
                        i === 5 || i === 11 || i === 18
                          ? "bg-cyan-400/20 border border-cyan-400/40"
                          : "bg-white/5 border border-white/5"
                      }`}
                    />
                  ))}

                </div>

              </div>

              {/* Activity */}
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
                    <Wrench size={18} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Maintenance
                    </p>

                    <p className="text-xs text-zinc-500">
                      3 active complaints
                    </p>
                  </div>

                </div>

                <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs text-orange-400">
                  Active
                </span>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">

          {stats.map(([number, label]) => (
            <div
              key={label}
              className="border-r border-white/10 px-6 py-8 text-center last:border-r-0"
            >
              <p className="text-3xl font-black text-cyan-400">
                {number}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                {label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">
            Everything connected
          </p>

          <h3 className="mt-4 text-4xl font-black md:text-5xl">
            More than a hostel app.
          </h3>

          <p className="mt-5 text-zinc-400">
            A complete digital ecosystem designed for modern hostel life.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h4 className="text-xl font-bold">
                  {feature.title}
                </h4>

                <p className="mt-3 leading-7 text-zinc-500">
                  {feature.text}
                </p>

              </motion.div>
            );

          })}

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">

        <div className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-10 text-center md:p-16">

          <Users className="mx-auto mb-5 text-cyan-400" size={35} />

          <h3 className="text-3xl font-black md:text-5xl">
            Ready to experience
            <span className="text-cyan-400"> HostelVerse?</span>
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            One login. One dashboard. Complete hostel control.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            Create Your Account
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center">

        <p className="font-bold">
          Hostel<span className="text-cyan-400">Verse</span>
        </p>

        <p className="mt-2 text-sm text-zinc-600">
          Smart Hostel Management System © 2026
        </p>

      </footer>

    </div>
  );
}