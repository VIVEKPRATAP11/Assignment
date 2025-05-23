import React from 'react';
import DayCell from './DayCell';

const DaysGrid = ({ 
  days, 
  today, 
  currentDate, 
  eventsData, 
  eventCounts, 
  hoveredEvent, 
  setHoveredEvent, 
  handleDateClick 
}) => {
  return (
    <div className="grid grid-cols-7 border-l border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {days.map((day) => {
        const dateStr = day.format("YYYY-MM-DD");
        const isToday = day.isSame(today, "day");
        const isCurrentMonth = day.month() === currentDate.month();
        const dayEvents = eventsData.filter((e) => e.date === dateStr);
        const eventCount = eventCounts[dateStr] || 0;

        return (
          <DayCell 
            key={dateStr}
            day={day}
            dateStr={dateStr}
            isToday={isToday}
            isCurrentMonth={isCurrentMonth}
            dayEvents={dayEvents}
            eventCount={eventCount}
            hoveredEvent={hoveredEvent}
            setHoveredEvent={setHoveredEvent}
            handleDateClick={handleDateClick}
          />
        );
      })}
    </div>
  );
};

export default DaysGrid;