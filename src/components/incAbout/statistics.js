import React, { useState } from "react";
import {
  ComposedChart,
  PieChart,
  Pie,
  AreaChart,
  Area,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  ScatterChart,
  Scatter,
} from "recharts";

const data = [
  {
    name: "3.5k",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "4k",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "4.5k",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "5k",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "5.5k",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "6k",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const ldata = [
  {
    name: "2017",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2018",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2019",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2020",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2021",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2022",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2023",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const bdata = [
  {
    name: "2018",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2019",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2020",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2021",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2022",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2023",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const sdata = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

function Stastics() {
  return (
    <div className="outer">
      <div className="card-group homepg">
        <div className="card inner border border-light shadow-lg p-1 mb-1  pb-1 bg-white rounded">
          <div className="card-body inner-text">
            <h6 className="card-title stattext">
              <LineChart
                width={230}
                height={240}
                data={ldata}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 2,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="uv"
                  stroke="#82ca9d"
                />
              </LineChart>
            </h6>
          </div>
        </div>
        <div className="card inner shadow-lg p-1 mb-1  pb-1 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h6 className="card-title">
              <BarChart
                width={220}
                height={250}
                data={bdata}
                margin={{
                  top: 5,
                  right: 1,
                  left: 1,
                  bottom: 2,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#579bb1" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </h6>
          </div>
        </div>
        <div className="card inner shadow-lg p-1 mb-1  pb-1 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h6 className="card-title">
              <ResponsiveContainer width="100%" height={230}>
                <ScatterChart
                  margin={{
                    top: 5,
                    right: 5,
                    bottom: 2,
                    left: 5,
                  }}
                >
                  <CartesianGrid />
                  <XAxis type="number" dataKey="x" name="stature" />
                  <YAxis type="number" dataKey="y" name="weight" unit="k" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="A school" data={sdata} fill="#579bb1" />
                </ScatterChart>
              </ResponsiveContainer>
            </h6>
          </div>
        </div>
      </div>

      <div className="card-group homepg">
        <div className="card inner border border-light shadow-lg p-1 mb-1  pb-1 bg-white rounded">
          <div className="card-body inner-text">
            <h6 className="card-title stattext">
              <AreaChart
                width={230}
                height={200}
                data={ldata}
                margin={{
                  top: 5,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#579bb1"
                  fill="#579bb1"
                />
              </AreaChart>
            </h6>
          </div>
        </div>
        <div className="card inner shadow-lg p-1 mb-1  pb-1 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h6 className="card-title">
              <ComposedChart
                width={250}
                height={200}
                data={data}
                margin={{
                  top: 5,
                  right: 5,
                  bottom: 5,
                  left: 5,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#579bb1"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={15} fill="#579bb1" />
                <Line type="monotone" dataKey="uv" stroke="#579bb1" />
                <Scatter dataKey="cnt" fill="white" />
              </ComposedChart>
            </h6>
          </div>
        </div>
        <div className="card inner shadow-lg p-1 mb-1  pb-1 bg-white rounded border border-light align-middle">
          <div className="card-body inner-text">
            <h6 className="card-title align-middle">
              <PieChart width={600} height={185}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx={100}
                  cy={100}
                  outerRadius={50}
                  fill="#579bb1"
                  label
                />
              </PieChart>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stastics;
