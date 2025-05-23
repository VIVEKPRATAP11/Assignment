
export const countEventsByDay = (events) => {
  const counts = {};
  events.forEach(event => {
    if (!counts[event.date]) counts[event.date] = 0;
    counts[event.date]++;
  });
  return counts;
};