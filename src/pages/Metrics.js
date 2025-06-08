// src/pages/Metrics.js
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Metrics = () => {
  const [hovered, setHovered] = useState(false);

  // 📊 Bar chart data
  const metricData = {
    labels: ["Image", "Audio", "Video"],
    datasets: [
      {
        label: "PSNR (dB)",
        data: [42.87, 38.1, 40.26],
        backgroundColor: "#ffc107",
      },
      {
        label: "BER",
        data: [0.012, 0.019, 0.015],
        backgroundColor: "#17a2b8",
      },
      {
        label: "Accuracy (%)",
        data: [97.4, 94.6, 95.8],
        backgroundColor: "#28a745",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "white" } },
      title: {
        display: true,
        text: "Media-Wise Performance Metrics",
        color: "white",
      },
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" } },
    },
  };

  const lineData = {
    labels: ["Image", "Audio", "Video"],
    datasets: [
      {
        label: "Untampered Accuracy (%)",
        data: [99.2, 97.5, 98.6],
        borderColor: "#28a745",
        backgroundColor: "#28a74555",
        tension: 0.4,
      },
      {
        label: "Tampered Accuracy (%)",
        data: hovered ? [95.3, 91.7, 93.0] : [97.4, 94.6, 95.8],
        borderColor: "#ffc107",
        backgroundColor: "#ffc10755",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "white" } },
      title: {
        display: true,
        text: "Accuracy: Tampered vs Untampered Media",
        color: "white",
      },
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: {
        ticks: { color: "white" },
        suggestedMin: 85,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="bg-dark text-light py-5">
      <div className="container text-center">
        <h1 className="mb-4 text-warning" data-aos="fade-down">
          Performance Metrics
        </h1>
        <p
          className="lead mb-5"
          data-aos="fade-up"
          style={{ maxWidth: "850px", margin: "0 auto" }}
        >
          EchoMark was rigorously evaluated using both objective quality metrics
          and real-world tampering scenarios. The results demonstrate high
          reliability and imperceptibility across all media types.
        </p>

        {/* 🔍 Metrics Summary Cards */}
        <div className="row justify-content-center mb-4" data-aos="fade-up">
          <div
            className="col-md-8 p-4 rounded shadow"
            style={{ backgroundColor: "#2c2f33" }}
          >
            <h5 className="text-warning">
              📈 PSNR – Peak Signal-to-Noise Ratio
            </h5>
            <p className="small mb-2">
              Measures perceptual quality after watermarking. Higher PSNR =
              better quality.
            </p>
            <p className="small">
              <strong>Result:</strong> &gt; 38 dB — watermarking is visually
              imperceptible.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-4" data-aos="fade-up">
          <div
            className="col-md-8 p-4 rounded shadow"
            style={{ backgroundColor: "#2c2f33" }}
          >
            <h5 className="text-warning">🎯 Extraction Accuracy</h5>
            <p className="small mb-2">
              Measures success in retrieving watermark. Higher = more reliable.
            </p>
            <p className="small">
              <strong>Result:</strong> Over 94% success even after tampering.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-4" data-aos="fade-up">
          <div
            className="col-md-8 p-4 rounded shadow"
            style={{ backgroundColor: "#2c2f33" }}
          >
            <h5 className="text-warning">🧮 Bit Error Rate (BER)</h5>
            <p className="small mb-2">
              Shows how many bits were altered. Lower = better.
            </p>
            <p className="small">
              <strong>Result:</strong> BER ≈ 0.01, indicating high reliability.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-4" data-aos="fade-up">
          <div
            className="col-md-8 p-4 rounded shadow"
            style={{ backgroundColor: "#2c2f33" }}
          >
            <h5 className="text-warning">
              🧠 SSIM – Structural Similarity Index
            </h5>
            <p className="small mb-2">
              Detects changes between original and tampered frames in video.
            </p>
            <p className="small">
              <strong>Result:</strong> SSIM ≈ 0.97, proving minimal quality
              loss.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-4" data-aos="fade-up">
          <div
            className="col-md-8 p-4 rounded shadow"
            style={{ backgroundColor: "#2c2f33" }}
          >
            <h5 className="text-warning">🧪 Tamper Resilience</h5>
            <ul
              className="small text-start mx-auto mt-2"
              style={{ maxWidth: "650px" }}
            >
              <li>📉 JPEG compression up to 60%</li>
              <li>🔊 Audio bitrate drop (320 → 128 kbps)</li>
              <li>🎬 Video cropping and reframing</li>
              <li>🌫️ Noise and blur applied</li>
            </ul>
          </div>
        </div>

        {/* 📋 Table */}
        <div className="container mt-4" data-aos="fade-up">
          <h2 className="text-warning mb-4">Quantitative Comparison</h2>
          <div className="table-responsive">
            <table className="table table-dark table-bordered border-warning">
              <thead className="text-center">
                <tr>
                  <th>Media Type</th>
                  <th>PSNR (Mean ± SD)</th>
                  <th>BER (Mean ± SD)</th>
                  <th>Accuracy (Mean ± SD)</th>
                  <th>Samples (N)</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>🖼️ Image</td>
                  <td>42.87 ± 1.94</td>
                  <td>0.012 ± 0.004</td>
                  <td>97.4% ± 1.3%</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>🔊 Audio</td>
                  <td>38.10 ± 2.32</td>
                  <td>0.019 ± 0.005</td>
                  <td>94.6% ± 2.1%</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>🎥 Video</td>
                  <td>40.26 ± 2.05</td>
                  <td>0.015 ± 0.003</td>
                  <td>95.8% ± 1.7%</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 📊 Bar Chart */}
        <div className="container mt-5" data-aos="fade-up">
          <h2 className="text-warning mb-4">Performance Visualized</h2>
          <div
            className="rounded p-3 shadow"
            style={{ backgroundColor: "#2c2f33", height: "400px" }}
          >
            <Bar data={metricData} options={barOptions} />
          </div>
        </div>

        {/* 📉 Interactive Line Chart */}
        <div
          className="container mt-5"
          data-aos="fade-up"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-warning mb-4">
            Accuracy Comparison (Interactive)
          </h2>
          <div
            className="rounded p-3 shadow"
            style={{ backgroundColor: "#2c2f33", height: "400px" }}
          >
            <Line data={lineData} options={lineOptions} />
          </div>
          <p className="mt-3 small text-light">
            Hover to simulate tampering effect on watermark extraction accuracy.
          </p>
        </div>

        <hr className="border-warning opacity-50 my-5" />
      </div>
    </div>
  );
};

export default Metrics;
