import React from "react";
import { motion } from "framer-motion";

export default function LoadingSkeleton() {
  return (
    <div className="w-full space-y-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="relative flex h-16 w-full items-center justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"
        >
          <div className="flex w-2/3 items-center gap-4">
            
            <div className="h-10 w-10 shrink-0 rounded-xl bg-zinc-800 animate-pulse" />

            <div className="w-10/12 space-y-2">
              <div className="h-3 w-1/3 rounded bg-zinc-800 animate-pulse" />
              <div className="h-2 w-1/2 rounded bg-zinc-800 animate-pulse" />
            </div>

          </div>

         
          <div className="h-6 w-16 rounded-lg bg-zinc-800 animate-pulse" />

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>
      ))}
    </div>
  );
}