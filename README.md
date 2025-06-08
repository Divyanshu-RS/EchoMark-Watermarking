# EchoMark – Watermarking Surveillance for Law Enforcement


**EchoMark** is a forensic-grade watermarking system designed to ensure the authenticity and integrity of digital surveillance media — images, audio, and video. Built for **law enforcement and digital forensics**, it provides **imperceptible, tamper-resistant, and reversible watermarking** modules with performance-tested results.

---

## 🌐 Live Website

👉 [**Visit EchoMark Website**](https://echomark-watermarking.vercel.app/)

---

## 📦 Download

You can download the latest version of the EchoMark installer via:

🔗 [GitHub Release Assets](https://github.com/Divyanshu-RS/EchoMark-Watermarking/releases/download/v1.0.0/EchoMark.Watermarking.exe)

---

## 🔍 Features

- 🔒 **Image Watermarking (Reversible)**  
  Spatial domain embedding using a weighted-sum method for lossless original recovery.
- 🔊 **Audio Watermarking (Robust)**  
  FFT-based frequency embedding resistant to pitch, volume, and compression.
- 🎥 **Video Watermarking (Tamper Detection)**  
  Frame-wise watermarking with SSIM comparison for forgery localization.
- 📊 **Performance Benchmarks**  
  - PSNR > 40 dB (imperceptible)
  - Extraction Accuracy: ~95%
  - BER ≈ 0.01
  - Tested across 65 multimedia samples
- 🔐 **Metadata & Signature Encryption**
- 📈 **Visualization**  
  - Flowchart of system modules  
  - Comparison charts for tampered vs. untampered samples
- 💻 **GUI Application**  
  Built with MATLAB front-end and Python watermarking back-end.

---

## 🧠 Technologies Used

| Frontend      | Backend (Toolside)        |
| ------------- | ------------------------ |
| React.js      | Python (for modules)     |
| Bootstrap 5   | OpenCV, NumPy            |
| React Router  | FFT / SSIM Algorithms    |
| Chart.js      | MATLAB (GUI Launcher)    |
| AOS (Scroll Reveal) |                    |

---

## 📊 Performance Metrics

| Media Type | PSNR (±SD)     | BER (±SD)     | Accuracy (±SD) | Samples |
|------------|----------------|--------------|---------------|---------|
| Image      | 42.87 ± 1.94 dB| 0.012 ± 0.004| 97.4% ± 1.3%  | 30      |
| Audio      | 38.10 ± 2.32 dB| 0.019 ± 0.005| 94.6% ± 2.1%  | 30      |
| Video      | 40.26 ± 2.05 dB| 0.015 ± 0.003| 95.8% ± 1.7%  | 30      |

---

## 🌍 SDG Alignment

EchoMark contributes toward:

- **SDG 16: Peace, Justice and Strong Institutions**  
  Enables secure, traceable, and verifiable digital surveillance evidence.
- **SDG 9: Industry, Innovation and Infrastructure**  
  Supports innovation in digital forensic infrastructure.

---

## 🧪 Test Samples
The watermarking modules were evaluated on real-world attacks including:
- JPEG compression (up to 60%)
- Audio bitrate downsampling (320 kbps → 128 kbps)
- Video cropping and Gaussian blur
- Frame tampering, noise, and rotation

🧬 Result: EchoMark's embedded watermarks consistently survived with high accuracy.

*Watermark survived all cases with measurable resilience.*

---

## 👨‍💻 Authors & Contributors

| Name                 | Role                          |
|----------------------|------------------------------|
| Divyanshu Ranjan Singh | System Architect, Developer |
| Aastha               | Research & Implementation    |
| Merdul Sharma        | UI & Video Module            |
| Aman                 | Audio Module & Testing       |

