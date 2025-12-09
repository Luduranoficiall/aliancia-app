"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { themeV2 } from "ui/themeV2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Estatisticas() {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    datasets: [
      {
        label: "Crescimento da Rede",
        data: [30, 60, 140, 210, 340],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255,215,0,0.2)",
        borderWidth: 4,
        tension: 0.4
      }
    ]
  };

  const options = {
    scales: {
      x: { ticks: { color: "#FFD700" } },
      y: { ticks: { color: "#FFD700" } }
    },
    plugins: {
      legend: { labels: { color: "#FFD700" } }
    }
  } as const;

  return (
    <main style={{ background: "#000", minHeight: "100vh", padding: 40 }}>
      <h1 style={{ color: "#FFD700", fontSize: 36 }}>Estatísticas</h1>
      <Line data={data} options={options} />
    </main>
  );
}
