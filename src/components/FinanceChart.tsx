"use client";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 2000, expenses: 9800 },
  { name: "Apr", revenue: 2780, expenses: 3908 },
  { name: "May", revenue: 1890, expenses: 4800 },
  { name: "Jun", revenue: 2390, expenses: 5800 },
  { name: "Jul", revenue: 3490, expenses: 4300 },
  { name: "Aug", revenue: 3090, expenses: 3300 },
  { name: "Sep", revenue: 3290, expenses: 5300 },
  { name: "Oct", revenue: 3690, expenses: 1500 },
  { name: "Nov", revenue: 4890, expenses: 4700 },
  { name: "Dec", revenue: 6290, expenses: 3900 },
];

const FinanceChart = () => {
  return (
    <ResponsiveContainer height={400} width="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" stroke="#333" />
        <YAxis stroke="#333" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#4CAF50"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="#F44336"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FinanceChart;
