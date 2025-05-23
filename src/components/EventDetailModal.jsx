import React from 'react';
import { XMarkIcon, PlusIcon, CalendarIcon, ClockIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/solid';
import EventDetailItem from './EventDetailItem';

const EventDetailModal = ({ selectedDate, today, eventsData, handleCloseDetail }) => {
  const dateStr = selectedDate.format("YYYY-MM-DD");
  const dayEvents = eventsData.filter((e) => e.date === dateStr);
  
  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCloseDetail();
      }}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden border border-gray-200 opacity-100 scale-100 transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-indigo-50 to-blue-50">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {selectedDate.format("dddd, MMMM D, YYYY")}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {selectedDate.isSame(today, 'day') ? 'Today • ' : ''}{selectedDate.format("Week w, YYYY")}
            </p>
          </div>
          <button 
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 hover:rotate-90 transition-all"
            onClick={handleCloseDetail} 
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[60vh] bg-gray-50/50">
          {dayEvents.length === 0 ? (
            <div className="py-12 text-center text-gray-500 flex flex-col items-center">
              <CalendarIcon className="h-12 w-12 text-gray-300 mb-3" />
              <p>No events scheduled for this day</p>
              <button
                className="mt-4 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-md text-sm font-medium flex items-center hover:scale-105 transition-transform"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Add Event
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {dayEvents.map((event, index) => (
                <EventDetailItem 
                  key={index} 
                  event={event} 
                  index={index} 
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end bg-white">
          <button 
            onClick={handleCloseDetail}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors mr-2 shadow-sm hover:scale-105"
          >
            Close
          </button>
          <button 
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-md text-sm font-medium transition-colors shadow-md flex items-center hover:scale-105"
          >
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;