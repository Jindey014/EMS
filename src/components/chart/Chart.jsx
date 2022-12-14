import React from 'react'
import './Chart.scss'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'March', Total: 25 },
  { name: 'April', Total: 50 },
  { name: 'May', Total: 20 },
  { name: 'June', Total: 35 },
  { name: 'July', Total: 30 },
  { name: 'August', Total: 45 },
]

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last six Months(Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis
            label={{
              stroke: 'gray',
              value: 'Amount In Lakhs',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="gray"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
