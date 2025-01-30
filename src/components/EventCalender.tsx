"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="p-3 mt-5 shadow-lg rounded-2xl bg-white dark:bg-gray-900">
      <Calendar
        onChange={onChange}
        value={value}
        className="modern-calendar rounded-xl p-4"
        tileClassName={({ date, view }) =>
          view === "month" && date.getDay() === 0
            ? "text-red-500 font-bold"
            : ""
        }
      />
    </div>
  );
};

export default EventCalendar;
