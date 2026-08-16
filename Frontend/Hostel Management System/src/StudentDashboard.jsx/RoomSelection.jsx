import React, { useState, useEffect } from 'react';
import { fetchRoomsAPI } from '../services/api';
import RoomCard from '../components/RoomCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function RoomSelection() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const { data } = await fetchRoomsAPI();
        setRooms(data);
      } catch (err) {
        console.error("An error occurred while loading rooms", err);
      } finally {
        setLoading(false);
      }
    };
    loadRooms();
  }, []);

  return (
    <div className="p-6 text-white space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Animated Room Selection (Room Selection)</h1>
        <p className="text-xs text-zinc-400 mt-1">Check availability and book your desired room</p>
      </div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rooms.length === 0 ? (
            <p className="text-zinc-500 text-sm col-span-4">No rooms are currently available.</p>
          ) : (
            rooms.map((room) => (
              <RoomCard key={room._id} room={room} onSelect={() => alert(`Room ${room.roomNumber} selected!`)} />
            ))
          )}
        </div>
      )}
    </div>
  );
}