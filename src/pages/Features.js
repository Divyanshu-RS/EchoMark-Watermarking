// src/pages/Features.js
import React from "react";

const Features = () => (
  <div className="bg-dark text-light py-5">
    <div className="container text-center">
      {/* 🏷️ Section Header */}
      <h1 className="mb-4 text-warning" data-aos="zoom-in">
        Key Features of EchoMark
      </h1>
      <p
        className="lead mx-auto mb-5"
        style={{ maxWidth: "800px" }}
        data-aos="fade-up"
      >
        EchoMark is equipped with cutting-edge watermarking capabilities that
        span across image, audio, and video data. Each feature has been
        purpose-built to withstand tampering while remaining imperceptible to
        human senses.
      </p>

      {/* 🔍 Feature List */}
      <div className="row row-cols-1 row-cols-md-2 g-4 text-start justify-content-center">
        {/* ✅ 1 */}
        <div className="col" data-aos="fade-up">
          <div className="p-4 bg-secondary rounded shadow h-100">
            <h5 className="text-warning mb-2">
              🔐 Invisible & Robust Watermarking
            </h5>
            <p className="small mb-0">
              EchoMark embeds watermarks in a way that is imperceptible to human
              sight or hearing, yet remains resilient against tampering such as
              noise addition, cropping, compression, or re-encoding. The
              embedded signatures are cryptographically secured and hidden in
              signal redundancies.
            </p>
          </div>
        </div>

        {/* ✅ 2 */}
        <div className="col" data-aos="fade-up">
          <div className="p-4 bg-secondary rounded shadow h-100">
            <h5 className="text-warning mb-2">
              📷 Reversible Image Watermarking
            </h5>
            <p className="small mb-0">
              Implements a weighted-sum-based embedding technique that allows
              full recovery of the original image after the watermark is
              extracted. This feature is critical for forensic authenticity,
              where preserving original media is essential for evidence
              submission in court.
            </p>
          </div>
        </div>

        {/* ✅ 3 */}
        <div className="col" data-aos="fade-up">
          <div className="p-4 bg-secondary rounded shadow h-100">
            <h5 className="text-warning mb-2">
              🔊 Audio Watermarking with FFT
            </h5>
            <p className="small mb-0">
              Utilizes Fast Fourier Transform (FFT) to embed signatures in the
              frequency domain of audio. Watermarks are placed in
              psychoacoustically insensitive bins to ensure imperceptibility
              while maintaining robustness even under pitch, volume, and bitrate
              alterations.
            </p>
          </div>
        </div>

        {/* ✅ 4 */}
        <div className="col" data-aos="fade-up">
          <div className="p-4 bg-secondary rounded shadow h-100">
            <h5 className="text-warning mb-2">
              🎥 Video Watermarking & Tamper Detection
            </h5>
            <p className="small mb-0">
              EchoMark embeds watermarks on a per-frame basis and uses SSIM
              (Structural Similarity Index) to detect anomalies or alterations.
              Tampered frames are detected using similarity thresholds and can
              be logged for further forensic analysis.
            </p>
          </div>
        </div>

        {/* ✅ 5 */}
        <div className="col" data-aos="fade-up">
          <div className="p-4 bg-secondary rounded shadow h-100">
            <h5 className="text-warning mb-2">🖥️ User Interface (GUI)</h5>
            <p className="small mb-0">
              Designed with usability in mind, the software features a graphical
              interface built using MATLAB and Python (Tkinter), allowing
              investigators to easily apply watermarking, extract signatures,
              and visualize tampering without needing command-line input.
            </p>
          </div>
        </div>

        {/* ✅ 6 */}
        <div className="col" data-aos="fade-up">
          <div className="p-4 bg-secondary rounded shadow h-100">
            <h5 className="text-warning mb-2">📊 Performance & Metrics</h5>
            <p className="small mb-0">
              EchoMark achieves high imperceptibility with PSNR consistently
              above 38–40 dB, extraction accuracy above 94%, and Bit Error Rate
              (BER) close to 0.01 under standard attack simulations. The system
              was validated across 65 media files with multiple tampering tests.
            </p>
          </div>
        </div>
        {/* 🎚️ Toggleable Media Features */}
        <section data-aos="fade-up" className="mt-5">
          <h2 className="text-warning mb-4">
            Media-Specific Feature Highlights
          </h2>
          <ul
            className="nav nav-pills justify-content-center mb-3"
            id="media-tabs"
          >
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#image"
              >
                🖼️ Image
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#audio"
              >
                🔊 Audio
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#video"
              >
                🎥 Video
              </button>
            </li>
          </ul>

          <div
            className="tab-content text-start text-light"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <div className="tab-pane fade show active" id="image">
              <p className="mb-2">
                <strong>Watermark Type:</strong> Spatial domain (weighted-sum)
              </p>
              <p className="mb-2">
                <strong>Feature:</strong> Fully reversible, forensic-grade image
                recovery
              </p>
              <p className="mb-2">
                <strong>Tools:</strong> Python-based GUI with original-image
                preview
              </p>
            </div>

            <div className="tab-pane fade" id="audio">
              <p className="mb-2">
                <strong>Watermark Type:</strong> Frequency domain (FFT)
              </p>
              <p className="mb-2">
                <strong>Feature:</strong> Robust to pitch/volume changes, silent
                embedding
              </p>
              <p className="mb-2">
                <strong>Tools:</strong> Python GUI to upload audio, embed &
                extract
              </p>
            </div>

            <div className="tab-pane fade" id="video">
              <p className="mb-2">
                <strong>Watermark Type:</strong> Per-frame embedding +
                SSIM-based detection
              </p>
              <p className="mb-2">
                <strong>Feature:</strong> Detect tampered frames, analyze video
                log
              </p>
              <p className="mb-2">
                <strong>Tools:</strong> Python GUI with frame selector and
                integrity report
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 🔻 Divider */}
      <hr className="border-warning opacity-50 my-5" />
      {/* 🎯 Real-World Applications */}
      <section data-aos="fade-up" className="mt-5">
        <h2 className="text-warning mb-4">Real-World Use Cases</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 text-start justify-content-center">
          <div className="col">
            <div className="bg-dark border border-warning rounded p-4 shadow h-100">
              <h6 className="text-warning">⚖️ Law Enforcement & Courts</h6>
              <p className="small mb-0">
                Embed court-admissible digital signatures in CCTV footage and
                recovered media. Ensures tamper-evidence for legal
                investigations and digital evidence validation.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="bg-dark border border-warning rounded p-4 shadow h-100">
              <h6 className="text-warning">📺 Broadcast & News Integrity</h6>
              <p className="small mb-0">
                Secure watermarking of on-air video content prevents piracy,
                fake clip propagation, and unauthorized media use in political
                or public broadcasts.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="bg-dark border border-warning rounded p-4 shadow h-100">
              <h6 className="text-warning">
                🔍 Forensics & Research Archiving
              </h6>
              <p className="small mb-0">
                Maintain forensic logs of tamper attempts during evidence
                archiving. Useful in chain-of-custody and for future
                verification of archived image/audio files.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Features;
