import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Loader2,
  Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await registerAPI(formData);

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);

      setError(
        err.response?.data?.message ||
          "Registration failed! Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-800 px-4 py-8">

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-8 shadow-2xl"
      >

        <div className="flex flex-col items-center mb-8">

          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            className="flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 mb-4"
          >
            <Building2 size={34} />
          </motion.div>

          <h2 className="text-2xl font-bold text-white tracking-tight">
            Create Account
          </h2>

          <p className="text-sm text-zinc-400 mt-2 text-center">
            Register to access the Smart Hostel Portal
          </p>

        </div>

       
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            {error}
          </motion.div>
        )}

   
        <form onSubmit={handleSubmit} className="space-y-5">

       
          <div>
            <label className="block mb-2 text-xs font-medium text-zinc-300">
              FULL NAME
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 py-3 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                required
              />

            </div>
          </div>

         
          <div>
            <label className="block mb-2 text-xs font-medium text-zinc-300">
              EMAIL ID
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 py-3 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                required
              />

            </div>
          </div>

     
          <div>
            <label className="block mb-2 text-xs font-medium text-zinc-300">
              PASSWORD
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                autoComplete="new-password"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 py-3 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                required
              />

            </div>
          </div>

         
          <div>
            <label className="block mb-2 text-xs font-medium text-zinc-300">
              SELECT ROLE
            </label>

            <div className="flex gap-4">

              {["Student", "Warden"].map((role) => (
                <button
                  type="button"
                  key={role}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      role,
                    }))
                  }
                  className={`flex-1 rounded-xl border py-3 text-sm font-medium transition-all ${
                    formData.role === role
                      ? "bg-indigo-600/20 border-indigo-500 text-indigo-400 shadow-lg shadow-indigo-500/10"
                      : "bg-zinc-950/30 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                  }`}
                >
                  {role}
                </button>
              ))}

            </div>
          </div>

          
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight size={16} />
              </>
            )}

          </motion.button>

         
          <p className="mt-5 text-center text-xs text-zinc-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-indigo-400 transition hover:text-indigo-300 hover:underline"
            >
              Login Here
            </button>
          </p>

        </form>
      </motion.div>
    </div>
  );
}