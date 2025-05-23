import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/solid';

const CalendarHeader = ({ 
  currentDate, 
  viewType, 
  setViewType, 
  handlePrevMonth, 
  handleNextMonth, 
  handleToday 
}) => {
  return (
    <div className="flex flex-col border-b border-gray-200 bg-white shadow-sm">
      <div className="p-4 md:p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevMonth}
            className="text-gray-400 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            onClick={handleNextMonth}
            className="text-gray-400 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next month"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 ml-2">
            {currentDate.format("MMMM YYYY")}
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex border border-gray-300 rounded-md overflow-hidden shadow-sm">
              {["month", "week", "day"].map((type) => (
                <button 
                  key={type}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    viewType === type 
                      ? "bg-indigo-50 text-indigo-600 border-b-2 border-indigo-500" 
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setViewType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleToday}
            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm border border-indigo-100"
          >
            Today
          </button>
        </div>
      </div>
      
      {/* Location info */}
      <div className="px-6 pb-3 flex items-center text-sm text-gray-500">
        <MapPinIcon className="h-4 w-4 mr-1 text-indigo-400" />
        <span>34 West 15th Street, NY</span>
      </div>
    </div>
  );
};

export default CalendarHeader;