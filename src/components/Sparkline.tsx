import React, { useEffect, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export default function Sparkline({ data, color = '#3b82f6' }: { data: number[]; color?: string }) {
  const dataset = {
    labels: data.map((_, i) => i),
    datasets: [{
      data,
      borderColor: color,
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.25
    }]
  }

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { tooltip: { enabled: false }, legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { line: { capBezierPoints: true } }
  }

  return (
    <div style={{ width: '100%', height: 36 }}>
      <Line data={dataset as any} options={options} />
    </div>
  )
}
