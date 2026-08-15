import { useState } from "react";
import { Search, Plus, MapPin, Clock, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

const initialItems = [
  {
    id: 1,
    name: "Blue Water Bottle",
    category: "Bottle",
    location: "Hostel A - 2nd Floor",
    time: "Today, 9:30 AM",
    status: "Found",
  },
  {
    id: 2,
    name: "Black Calculator",
    category: "Study",
    location: "Library",
    time: "Yesterday, 4:20 PM",
    status: "Found",
  },
  {
    id: 3,
    name: "Student ID Card",
    category: "ID",
    location: "Main Gate",
    time: "Yesterday, 7:10 PM",
    status: "Found",
  },
];

export default function LostFound() {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
  });

  const filteredItems = items.filter((item) =>
    `${item.name} ${item.category} ${item.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const addItem = (e) => {
    e.preventDefault();

    if (!form.name || !form.category || !form.location) {
      return;
    }

    const newItem = {
      id: Date.now(),
      ...form,
      time: "Just now",
      status: "Found",
    };

    setItems((prev) => [newItem, ...prev]);

    setForm({
      name: "",
      category: "",
      location: "",
    });

    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#050816] p-4 text-white md:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-bold tracking-[0.3em] text-cyan-400">
            HOSTELVERSE
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Lost & Found
          </h1>

          <p className="mt-3 text-zinc-400">
            Find lost belongings or report something you found.
          </p>
        </div>

        {/* Search + Add */}
        <div className="flex flex-col gap-3 md:flex-row">

          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search item, category or location..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 outline-none transition focus:border-cyan-400"
            />
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            <Plus size={20} />
            Report Item
          </button>

        </div>

        {/* Add Form */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={addItem}
            className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="mb-5 text-xl font-bold">
              Report Found Item
            </h2>

            <div className="grid gap-4 md:grid-cols-3">

              <input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Item name"
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                placeholder="Category"
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
                placeholder="Found location"
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400"
              />

            </div>

            <button
              type="submit"
              className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black"
            >
              Submit Report
            </button>
          </motion.form>
        )}

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

          <Stat
            title="Total Items"
            value={items.length}
          />

          <Stat
            title="Found"
            value={items.filter((i) => i.status === "Found").length}
          />

          <Stat
            title="This Week"
            value="08"
          />

          <Stat
            title="Returned"
            value="14"
          />

        </div>

        {/* Items */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >

              <div className="flex items-start justify-between">

                <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
                  <PackageSearch size={25} />
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
                  {item.status}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold">
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                {item.category}
              </p>

              <div className="mt-5 space-y-3 text-sm text-zinc-400">

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {item.location}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {item.time}
                </div>

              </div>

              <button className="mt-5 w-full rounded-xl bg-white/5 py-3 text-sm font-semibold transition hover:bg-cyan-400 hover:text-black">
                I Found This Item
              </button>

            </motion.div>
          ))}

        </div>

        {filteredItems.length === 0 && (
          <div className="mt-10 text-center text-zinc-500">
            No matching items found.
          </div>
        )}

      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm text-zinc-500">{title}</p>
      <p className="mt-2 text-3xl font-black text-cyan-400">
        {value}
      </p>
    </div>
  );
}