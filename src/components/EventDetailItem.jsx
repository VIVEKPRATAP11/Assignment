import React from 'react';
import { ClockIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/solid';

const EventDetailItem = ({ event, index }) => {
  return (
    <div 
      className="p-4 rounded-md flex items-start bg-white border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
    >
      <div 
        className="w-1 self-stretch mr-3 rounded-full" 
        style={{backgroundColor: event.color}}
      ></div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="text-base font-medium text-gray-800">{event.title}</h4>
          <div 
            className="px-2 py-0.5 rounded text-xs font-medium shadow-sm" 
            style={{backgroundColor: `${event.color}20`, color: event.color}}
          >
            {event.startTime === "all-day" 
              ? "All day" 
              : `${event.startTime} - ${event.endTime}`
            }
          </div>
        </div>
        
        <div className="mt-3 text-sm text-gray-600 space-y-2">
          <div className="flex items-center text-gray-500">
            <ClockIcon className="h-3.5 w-3.5 mr-2" style={{color: event.color}} />
            <span>{event.startTime === "all-day" 
              ? "All day event" 
              : `${event.startTime} - ${event.endTime} (${event.duration || '1 hour'})`
            }</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPinIcon className="h-3.5 w-3.5 mr-2" style={{color: event.color}} />
            <span>{event.location || 'Main Office'}</span>
          </div>
          
          <div className="flex items-start text-gray-500">
            <TagIcon className="h-3.5 w-3.5 mr-2 mt-0.5" style={{color: event.color}} />
            <span>{event.category || 'Meeting'}</span>
          </div>
        </div>
        
        {/* Notes or description */}
        <div className="mt-3 text-sm text-gray-500">
          {index % 2 === 0 ? (
            <div className="p-2 bg-gray-50 rounded border-l-2 border-gray-200 italic">
              "Meeting notes and discussion points for the agenda. Follow up with team members regarding project timeline and deliverables."
            </div>
          ) : ""}
        </div>
      </div>
    </div>
  );
};

export default EventDetailItem;