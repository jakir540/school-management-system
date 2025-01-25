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
  { day: "Mon", boys: 40, girls: 30 },
  { day: "Tues", boys: 35, girls: 25 },
  { day: "Wed", boys: 50, girls: 40 },
  { day: "Thu", boys: 45, girls: 35 },
  { day: "Fri", boys: 60, girls: 50 },
  { day: "Sat", boys: 30, girls: 20 },
];

const colors = {
  boys: "#4CAF50", // Green for boys
  girls: "#FF5722", // Orange for girls
};

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AttendanceChart: React.FC = () => {
  return (
    <div className="w-full h-full p-6 bg-gray-100 rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={attendanceData}
          margin={{
            bottom: 5,
          }}
        >
          {/* Grid and Axis */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fill: "#4A5568" }} tickLine={false} />
          {/* <YAxis tick={{ fill: "#4A5568", fontWeight: "bold" }} /> */}
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
            shape={TriangleBar}
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
            shape={TriangleBar}
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
