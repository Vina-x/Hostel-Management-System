import React, { useState, useEffect } from 'react';
import { fileComplaintAPI, fetchComplaintsAPI } from '../services/api';
import ComplaintCard from '../components/ComplaintCard';

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', category: 'Plumbing' });

  const loadComplaints = async () => {
    try {
      const { data } = await fetchComplaintsAPI();
      setComplaints(data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { loadComplaints(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fileComplaintAPI(form);
      alert('Complaint registered successfully!');
      setForm({ title: '', description: '', category: 'Plumbing' });
      loadComplaints();
    } catch (err) { alert('An error occurred while registering the complaint!'); }
  };

  return (
    <div className="p-6 text-white space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Complaint Redressal Center (Complaints)</h1>
        <p className="text-xs text-zinc-400 mt-1">Submit your issues here and track their status</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Register New Complaint Form */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Register a New Complaint</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Subject (Title)</label>
              <input type="text" value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} className="w-full p-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-sm" placeholder="e.g., Fan is not working" required />
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Category</label>
              <select value={form.category} onChange={(e)=>setForm({...form, category: e.target.value})} className="w-full p-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-sm text-zinc-300">
                <option value="Plumbing">Plumbing (Tap Repair)</option>
                <option value="Electrical">Electrical (Light/Fan)</option>
                <option value="Food">Food (Mess Meals)</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Detailed Description</label>
              <textarea value={form.description} onChange={(e)=>setForm({...form, description: e.target.value})} rows="4" className="w-full p-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-sm" placeholder="Write your issue in detail..." required></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-indigo-600 font-medium rounded-xl text-sm">Submit Complaint</button>
          </form>
        </div>
        
        {/* Past Complaints List */}
        <div className="lg:grid-cols-2 lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">Previous Complaints Status</h2>
          {complaints.length === 0 ? (
            <p className="text-zinc-500 text-sm">No complaints have been registered yet.</p>
          ) : (
            complaints.map((c) => <ComplaintCard key={c._id} complaint={c} />)
          )}
        </div>
      </div>
    </div>
  );
}