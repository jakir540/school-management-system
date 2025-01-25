"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Define data type for attendance
interface AttendanceData {
  day: string;
  boys: number;
  girls: number;
}

const attendanceData: AttendanceData[] = [
  { day: "Monday", boys: 40, girls: 30 },
  { day: "Tuesday", boys: 35, girls: 25 },
  { day: "Wednesday", boys: 50, girls: 40 },
  { day: "Thursday", boys: 45, girls: 35 },
  { day: "Friday", boys: 60, girls: 50 },
  { day: "Saturday", boys: 30, girls: 20 },
];

const colors = {
  boys: "#4CAF50", // Green for boys
  girls: "#FF5722", // Orange for girls
};

const AttendanceChart: React.FC = () => {
  return (
    <div className="w-full h-full p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Weekly Students Attendance Chart
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={attendanceData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Grid and Axis */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tick={{ fill: "#4A5568", fontWeight: "bold" }}
            tickLine={false}
          />
          <YAxis tick={{ fill: "#4A5568", fontWeight: "bold" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#f5f5f5", border: "none" }}
          />
          <Legend
            wrapperStyle={{
              top: 0,
              left: 25,
              fontSize: "0.9rem",
            }}
          />

          {/* Bar for Boys */}
          <Bar
            dataKey="boys"
            fill={colors.boys}
            barSize={30}
            radius={[10, 10, 0, 0]}
          >
            {attendanceData.map((entry, index) => (
              <Cell key={`cell-boys-${index}`} fill={colors.boys} />
            ))}
          </Bar>

          {/* Bar for Girls */}
          <Bar
            dataKey="girls"
            fill={colors.girls}
            barSize={30}
            radius={[10, 10, 0, 0]}
          >
            {attendanceData.map((entry, index) => (
              <Cell key={`cell-girls-${index}`} fill={colors.girls} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
