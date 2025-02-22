import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendenceChart";
import CounterChart from "@/components/CounterChart";
import EventCalender from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  const userCards = [
    {
      type: "Student",
      icon: "fa-user-graduate", // Font Awesome class
    },
    {
      type: "Teacher",
      icon: "fa-chalkboard-teacher", // Font Awesome class
    },
    {
      type: "Admin",
      icon: "fa-user-cog", // Font Awesome class
    },
    {
      type: "Parent",
      icon: "fa-users", // Font Awesome class
    },
  ];

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      {/* left side */}
      <div className="min-h-screen bg-gray-50 py-10 px-6 w-[75%]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userCards.map((card) => (
            <UserCard key={card.type} type={card.type} icon={card.icon} />
          ))}
        </div>

        <div className="flex gap-4 flex-col lg:flex-row py-5">
          {/* COUNT CHART */}
          <div className="w-full lg:w-[40%] h-[400px]">
            <CounterChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-[75%] h-[400px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* right side */}
      <div className="w-[30%] bg-gray-100 flex flex-col gap-4">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
