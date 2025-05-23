import React from 'react';
import { ChevronRightIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const CalendarFooter = () => {
  return (
    <div className="p-4 border-t border-gray-200 flex justify-between items-center text-xs bg-white">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-600">
          <UserGroupIcon className="h-3.5 w-3.5 mr-1.5 text-indigo-500" />
          <span className="font-medium">25 out of 30 members</span>
        </div>
        <div className="flex items-center text-gray-600">
          <ClockIcon className="h-3.5 w-3.5 mr-1.5 text-indigo-500" />
          <span className="font-medium">3:00 PM - 4:00 PM</span>
        </div>
      </div>
      <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center hover:translate-x-[-2px] transition-transform">
        <span>Full Event Schedule</span>
        <ChevronRightIcon className="h-3 w-3 ml-1" />
      </button>
    </div>
  );
};

export default CalendarFooter;