import React from 'react';

const EventItem = ({ event, hoveredEvent, setHoveredEvent }) => {
  return (
    <div 
      onMouseEnter={() => setHoveredEvent(event.title)}
      onMouseLeave={() => setHoveredEvent(null)}
      className="flex items-center text-xs py-1 px-2 rounded-sm hover:shadow-sm transition-all duration-200 hover:translate-x-0.5" 
      style={{
        backgroundColor: hoveredEvent === event.title ? `${event.color}20` : `${event.color}10`,
        borderLeft: `2px solid ${event.color}`
      }}
      title={`${event.title}: ${event.startTime} - ${event.endTime}`}
    >
      <div className="w-1.5 h-1.5 mr-1.5 rounded-full" style={{backgroundColor: event.color}}></div>
      <div className="flex-1 truncate">
        {event.startTime !== "all-day" ? (
          <span className="flex items-center">
            <span className="font-medium mr-1 group-hover:text-gray-900" style={{color: event.color}}>
              {event.startTime.substring(0, 5)}
            </span>
            <span className="truncate text-gray-700">
              {event.title}
            </span>
          </span>
        ) : (
          <span className="flex items-center">
            <span className="text-[9px] uppercase font-bold mr-1 tracking-wide" style={{color: event.color}}>
              All day
            </span>
            <span className="truncate text-gray-700">
              {event.title}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default EventItem;