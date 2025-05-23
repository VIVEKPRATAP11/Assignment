import React, { useState } from "react";
import dayjs from "dayjs";
import eventsData from "../data/events.json";
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/solid';

import CalendarHeader from "./CalendarHeader";
import WeekDaysRow from "./WeekDaysRow";
import DaysGrid from "./DaysGrid";
import CalendarFooter from "./CalendarFooter";
import EventDetailModal from "./EventDetailModal";
import { countEventsByDay } from "../utils/eventUtils";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [viewType, setViewType] = useState("month"); // month, week, day
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDayDetail, setShowDayDetail] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const startDay = currentDate.startOf("month").startOf("week");
  const endDay = currentDate.endOf("month").endOf("week");

  const generateDays = () => {
    let date = startDay.clone();
    const days = [];
    while (date.isBefore(endDay, "day") || date.isSame(endDay, "day")) {
      days.push(date.clone());
      date = date.add(1, "day");
    }
    return days;
  };

  const days = generateDays();

  const handlePrevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const handleNextMonth = () => setCurrentDate(currentDate.add(1, "month"));
  const handleToday = () => setCurrentDate(dayjs());
  
  const handleDateClick = (day) => {
    setSelectedDate(day);
    setShowDayDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDayDetail(false);
    setTimeout(() => setSelectedDate(null), 100);
  };
  
  const eventCounts = countEventsByDay(eventsData);
  const today = dayjs();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* App Bar with gradient */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5" />
          <h1 className="text-lg font-medium">Calendar</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md border border-white/30 hover:bg-white/30 transition-colors">
            {dayjs().format("MMM D, YYYY")}
          </span>
        </div>
      </div>
      
      <CalendarHeader 
        currentDate={currentDate}
        viewType={viewType}
        setViewType={setViewType}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleToday={handleToday}
      />

      {/* Calendar Body */}
      <div className="p-2 md:p-4 bg-gradient-to-b from-white to-gray-50">
        <WeekDaysRow />
        
        {/* Hint message */}
        <div className="flex items-center justify-center py-2 text-xs text-indigo-600 bg-indigo-50/70 rounded-md mb-2 backdrop-blur-sm border border-indigo-100/50">
          <span className="italic">Hover or tap on any date to see full details</span>
        </div>

        <DaysGrid 
          days={days}
          today={today}
          currentDate={currentDate}
          eventsData={eventsData}
          eventCounts={eventCounts}
          hoveredEvent={hoveredEvent}
          setHoveredEvent={setHoveredEvent}
          handleDateClick={handleDateClick}
        />
      </div>
      
      <CalendarFooter />

      {showDayDetail && selectedDate && (
        <EventDetailModal
          selectedDate={selectedDate}
          today={today}
          eventsData={eventsData}
          handleCloseDetail={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default Calendar;