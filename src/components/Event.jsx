import React from "react";

const Event = ({ event }) => (
  <div
    className="rounded-lg px-2 py-1 text-xs text-white shadow-md truncate"
    style={{ backgroundColor: event.color || "#4f46e5" }}
  >
    <div className="font-semibold truncate">{event.title}</div>
    <div className="opacity-80">{event.startTime} - {event.endTime}</div>
  </div>
);

export default Event;
