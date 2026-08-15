import React from "react";
import { motion } from "framer-motion";
import { BedDouble, Building2, Users } from "lucide-react";

export default function RoomCard({ room, onSelect }) {
  const isFull = room?.status === "Full";

  const capacity = room?.capacity || 0;
  const occupiedBeds = room?.students?.length || 0;
  const bedsLeft = Math.max(capacity - occupiedBeds, 0);

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 ${
        isFull
          ? "border-rose-900/50 bg-rose-950/10"
          : "border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/40 hover:bg-zinc-900/60"
      }`}
    >
     
      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
            isFull
              ? "border-rose-500/20 bg-rose-500/10 text-rose-400"
              : "border-indigo-500/20 bg-indigo-500/10 text-indigo-400"
          }`}
        >
          <Building2 size={21} />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${
            isFull
              ? "bg-rose-500/10 text-rose-400"
              : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {room?.status || "Available"}
        </span>
      </div>

     
      <div className="mt-5">
        <h3 className="text-xl font-bold text-white">
          Room {room?.roomNumber || "N/A"}
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
          <Building2 size={13} />
          Floor {room?.floor ?? "N/A"}
        </p>
      </div>

     
      <div className="mt-5 flex items-center justify-between border-t border-zinc-800/80 pt-4">

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800/80 text-zinc-400">
            <Users size={15} />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wide text-zinc-600">
              Capacity
            </p>

            <p className="text-xs font-medium text-zinc-300">
              {occupiedBeds}/{capacity}
            </p>
          </div>
        </div>

      
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wide text-zinc-600">
              Beds Left
            </p>

            <p
              className={`text-xs font-semibold ${
                bedsLeft === 0
                  ? "text-rose-400"
                  : "text-emerald-400"
              }`}
            >
              {bedsLeft}
            </p>
          </div>

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              bedsLeft === 0
                ? "bg-rose-500/10 text-rose-400"
                : "bg-emerald-500/10 text-emerald-400"
            }`}
          >
            <BedDouble size={15} />
          </div>
        </div>

      </div>

      
      {!isFull && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}