import Announcement from "@/components/Announcement";
import EventCalendar from "@/components/EventCalender";
import StudentCalender from "@/components/StudentCalender";
import React from "react";

const StudentPage = () => {
  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      {/* left side */}
      <div className="min-h-screen bg-gray-50 py-10 px-6 w-[75%]">
        <div className="w-full bg-white rounded-full p-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-6 ">
            Schedule (4A)
          </h1>
          <StudentCalender />
        </div>
      </div>

      {/* right side */}
      <div className="w-[30%] bg-gray-100 flex flex-col gap-4">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
