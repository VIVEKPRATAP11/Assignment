import React from 'react';

const WeekDaysRow = () => {
  return (
    <div className="grid grid-cols-7 text-center border-b border-gray-100">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div key={d} className="text-xs font-medium text-gray-500 py-2 tracking-wider">
          {d}
        </div>
      ))}
    </div>
  );
};

export default WeekDaysRow;