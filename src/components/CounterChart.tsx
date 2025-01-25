"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const CounterChart = () => {
  const data = [
    { name: "Boys", value: 450 },
    { name: "Girls", value: 550 },
  ];

  const COLORS = ["#C3EBFA", "#FAE27C"];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-6"></div>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#FAE27C"
            dataKey="value"
            animationDuration={1000} // Smooth transition
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              paddingTop: 20,
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Footer Section */}
      <div className="mt-6 text-center text-gray-500 text-sm"></div>
    </div>
  );
};

export default CounterChart;
