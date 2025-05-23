import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import EventItem from './EventItem';

const DayCell = ({ 
  day,  
  isToday, 
  isCurrentMonth, 
  dayEvents, 
  eventCount, 
  hoveredEvent, 
  setHoveredEvent, 
  handleDateClick 
}) => {
  return (
    <div
      className={`min-h-[120px] border-r border-b border-gray-200
        ${!isCurrentMonth 
          ? "bg-gray-50/70 text-gray-300" 
          : isToday 
            ? "bg-indigo-50/80 ring-1 ring-indigo-200 relative z-5" 
            : "bg-white text-gray-800"
        }
        transition-all duration-150 cursor-pointer
        ${isCurrentMonth && !isToday ? "hover:shadow-md hover:scale-[1.02] hover:z-10" : ""}
        group
      `}
      onClick={() => handleDateClick(day)}
      title="Click to see all events"
    >
      {/* Day Header */}
      <div className={`flex justify-between items-center p-1.5 border-b ${isToday ? "border-indigo-100" : "border-gray-50"}`}>
        <div className="flex items-center">
          <span className={`
            text-xs font-medium w-6 h-6 flex items-center justify-center
            ${isToday 
              ? "bg-indigo-600 text-white rounded-full shadow-sm" 
              : isCurrentMonth 
                ? "group-hover:bg-indigo-100 rounded-full transition-colors duration-200" 
                : ""
            }
          `}>
            {day.date()}
          </span>
          {isToday && <span className="ml-1.5 text-[9px] text-indigo-500 font-medium uppercase">Today</span>}
        </div>
        
        {/* Event count badge */}
        {eventCount > 0 && isCurrentMonth && (
          <span className="text-[10px] bg-indigo-100 text-indigo-700 rounded-full px-1.5 py-0.5 font-medium shadow-sm border border-indigo-200/50">
            {eventCount}
          </span>
        )}
      </div>

      {/* Events Container */}
      <div className="space-y-1.5 p-1.5 overflow-y-auto max-h-[80px] scrollbar-thin scrollbar-thumb-gray-200">
        {dayEvents.slice(0, 3).map((event, index) => (
          <EventItem 
            key={index}
            event={event}
            hoveredEvent={hoveredEvent}
            setHoveredEvent={setHoveredEvent}
          />
        ))}
        
        {/* "More events" indicator */}
        {dayEvents.length > 3 && (
          <div className="text-xs text-indigo-600 hover:text-indigo-800 font-medium pl-2 py-0.5 cursor-pointer transition-colors flex items-center hover:translate-x-0.5">
            <PlusIcon className="h-3 w-3 mr-1" />
            <span>{dayEvents.length - 3} more events</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCell;