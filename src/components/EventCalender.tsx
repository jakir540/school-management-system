"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <div className="w-full max-w-2xl p-6 shadow-lg rounded-2xl bg-white dark:bg-gray-900">
        <Calendar
          onChange={onChange}
          value={value}
          className="modern-calendar rounded-xl p-4 w-full"
          tileClassName={({ date, view }) =>
            view === "month" && date.getDay() === 0
              ? "text-red-500 font-bold"
              : ""
          }
        />
      </div>

      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center">
          Upcoming Events
        </h2>
        {Events.map((event) => (
          <div
            key={event.id}
            className="p-4 shadow-md rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {event.date}
            </p>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;

const Events = [
  {
    id: 1,
    date: "2025-02-10",
    title: "Science Fair",
    description:
      "An exhibition where students showcase their science projects and experiments.",
  },
  {
    id: 2,
    date: "2025-03-15",
    title: "Annual Sports Day",
    description:
      "A fun-filled day with various sports competitions and activities.",
  },
  {
    id: 3,
    date: "2025-04-25",
    title: "Parent-Teacher Meeting",
    description:
      "A meeting for parents and teachers to discuss students' progress.",
  },
  {
    id: 4,
    date: "2025-05-10",
    title: "Art Exhibition",
    description:
      "A showcase of students' artistic talents, including paintings and crafts.",
  },
  {
    id: 5,
    date: "2025-06-20",
    title: "Graduation Ceremony",
    description:
      "A celebration for graduating students with speeches and awards.",
  },
  {
    id: 6,
    date: "2025-08-30",
    title: "Back to School Orientation",
    description: "An orientation session for new students and their parents.",
  },
  {
    id: 7,
    date: "2025-10-05",
    title: "Cultural Festival",
    description:
      "A festival celebrating different cultures through performances and food.",
  },
  {
    id: 8,
    date: "2025-12-15",
    title: "Winter Concert",
    description:
      "A musical event featuring student performances to celebrate the holiday season.",
  },
];
