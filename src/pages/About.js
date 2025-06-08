// src/pages/About.js
import React from "react";
import sdg from "../pages/SDG16.png";
import SDG from "../pages/SDG09.png";

const About = () => (
  <div className="bg-dark text-light py-5">
    <div className="container text-center">
      {/* 🌐 Section: Background */}
      <section data-aos="fade-up" className="mb-5">
        <h1 className="mb-4 text-warning">About EchoMark</h1>
        <p className="mx-auto" style={{ maxWidth: "850px" }}>
          <strong>EchoMark</strong> is a unified, cross-media watermarking
          system designed to protect the authenticity and integrity of digital
          surveillance content—images, audio, and video. Developed as a
          final-year research project at Ajay Kumar Garg Engineering College,
          EchoMark addresses the rising concerns of tampering, forgery, and
          manipulation of digital evidence in the legal and law enforcement
          landscape.
        </p>
      </section>

      {/* ⚠️ Section: Problem Statement */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning">The Challenge</h3>
        <p className="mx-auto" style={{ maxWidth: "850px" }}>
          With multimedia being central to digital communication, unauthorized
          copying and manipulation pose significant threats to justice.
          Traditional watermarking techniques fail to offer reversibility or
          robust tamper detection, especially in surveillance scenarios. There
          is a critical gap in the availability of real-time, imperceptible, and
          reversible watermarking tools that are court-admissible and
          computationally efficient.
        </p>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>
            ❌ No frame-level tamper detection in most video watermarking
            systems
          </li>
          <li>
            ❌ Lack of reversible watermarking for forensic image recovery
          </li>
          <li>
            ❌ Weak resistance to compression, cropping, noise, or deepfake
            attacks
          </li>
        </ul>
      </section>

      {/* ⚙️ Section: Solution Overview */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning">The Solution: EchoMark</h3>
        <p className="mx-auto" style={{ maxWidth: "850px" }}>
          EchoMark embeds secure, invisible watermarks using signal processing
          techniques tailored for each media type:
        </p>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>
            🔒 <strong>Image Watermarking:</strong> Weighted-sum reversible
            embedding for lossless recovery
          </li>
          <li>
            🔊 <strong>Audio Watermarking:</strong> FFT-based embedding in
            frequency bins with imperceptibility
          </li>
          <li>
            🎥 <strong>Video Watermarking:</strong> Frame-wise embedding with
            SSIM and threshold-based tamper detection
          </li>
        </ul>
      </section>

      {/* 📊 Section: Evaluation */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning">Evaluation & Performance</h3>
        <p className="mx-auto" style={{ maxWidth: "850px" }}>
          EchoMark was tested on 65 samples:
        </p>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>🖼️ 30 images (.png/.jpg)</li>
          <li>🎵 20 audio samples (.wav)</li>
          <li>🎬 15 videos (.mp4, 480p–720p)</li>
        </ul>
        <p>Results show:</p>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>
            <strong>PSNR:</strong> Avg. > 40 dB for imperceptibility
          </li>
          <li>
            <strong>BER:</strong> ≤ 0.02 after tampering (low error)
          </li>
          <li>
            <strong>Extraction Accuracy:</strong> > 94% across all media
          </li>
          <li>
            <strong>SSIM:</strong> High similarity post-embedding (≈ 0.97)
          </li>
        </ul>
      </section>

      {/* 🧪 Section: Methodology Highlights */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning">Research Design</h3>
        <p className="mx-auto" style={{ maxWidth: "850px" }}>
          The study used a <strong>Sequential Explanatory Mixed Methods</strong>{" "}
          design:
        </p>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>
            📊 Quantitative: Performance tested via PSNR, BER, SSIM metrics on
            tampered/untampered samples
          </li>
          <li>
            📄 Qualitative: Experts evaluated watermark visibility, extraction,
            and forensic usability
          </li>
          <li>
            📈 Tampering Attacks: Cropping, compression, noise, bitrate
            reduction, and pitch/volume distortion
          </li>
        </ul>
      </section>

      {/* 🏛️ Section: Significance */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning">Significance & Impact</h3>
        <p className="mx-auto" style={{ maxWidth: "850px" }}>
          EchoMark brings value to:
        </p>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>
            ⚖️ <strong>Law Enforcement:</strong> Ensures chain-of-custody for
            digital evidence
          </li>
          <li>
            🔍 <strong>Forensic Analysts:</strong> Verifies media tampering and
            validates file origin
          </li>
          <li>
            📺 <strong>Surveillance System Vendors:</strong> Adds integrity
            assurance for client systems
          </li>
          <li>
            🧪 <strong>Researchers:</strong> Opens future work on real-time
            watermarking and blockchain traceability
          </li>
        </ul>
        <p>
          The system is aligned with the{" "}
          <strong>United Nations SDG Goal 16</strong>: Peace, Justice, and
          Strong Institutions.
        </p>
      </section>

      {/* 📌 Section: Limitations & Future Scope */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning">Scope & Limitations</h3>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>⚠️ Limited dataset (65 samples) due to academic constraints</li>
          <li>⚠️ Offline processing — not tested in real-time streaming yet</li>
          <li>
            ✅ Future Work: Integrate blockchain-based evidence logging,
            AI-tamper resistance, real-time streaming modules
          </li>
        </ul>
      </section>

      {/* 📚 Section: Research Objectives Recap */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning">Research Objectives</h3>
        <ol
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li>
            Design a reversible image watermarking system using weighted-sum
            methods
          </li>
          <li>Develop video watermarking with frame-level tamper detection</li>
          <li>Construct audio watermarking using FFT domain embedding</li>
          <li>Evaluate system via PSNR, BER, SSIM, and expert review</li>
        </ol>
      </section>
      {/* 🗣️ Expert Testimonial */}
      <section data-aos="zoom-in" className="mb-5">
        <div
          className="card bg-secondary text-light border-0 shadow-lg mx-auto"
          style={{ maxWidth: "850px" }}
        >
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p className="fs-5">
                “EchoMark offers the robustness and reversibility that is
                crucial for real-world forensic workflows. Its multi-domain
                watermarking approach is technically sound and addresses
                practical gaps in surveillance authenticity validation.”
              </p>
              <footer className="blockquote-footer text-light mt-3">
                Dr. Ashish Dixit,{" "}
                <cite title="AKGEC">Associate Professor, CSE Dept., AKGEC</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 🕰️ Timeline Graphic */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning mb-4">Development Timeline</h3>

        {/* 🔁 Animated Vertical Timeline */}
        <div
          className="timeline position-relative mx-auto"
          style={{ maxWidth: "720px" }}
        >
          {/* 🧠 Research */}
          <div className="timeline-step mb-5">
            <h5 className="text-warning">Research</h5>
            <p className="small text-light">
              Conducted an extensive literature survey on watermarking, tamper
              detection, forensic models, and signal embedding methods.
              Identified critical gaps and formulated a structured approach for
              a cross-media watermarking tool tailored for law enforcement.
            </p>
          </div>

          {/* 🧰 Prototype */}
          <div className="timeline-step mb-5">
            <h5 className="text-warning">Prototype</h5>
            <p className="small text-light">
              Developed GUI-based watermarking tools in MATLAB and Python.
              Implemented image watermarking via reversible weighted-sum,
              FFT-based audio embedding, and SSIM-integrated video tamper
              detection. Ensured modularity for integration across platforms.
            </p>
          </div>

          {/* 📊 Evaluation */}
          <div className="timeline-step mb-5">
            <h5 className="text-warning">Evaluation</h5>
            <p className="small text-light">
              Evaluated system performance on 65 files using PSNR, BER, and
              SSIM. Validated robustness against tampering like cropping,
              compression, blur, and noise. Benchmarked usability through expert
              review and system logs.
            </p>
          </div>
        </div>
        {/* 🔻 Divider for visual separation */}
        <hr className="border-warning opacity-50 my-5" />
      </section>

      {/* 🌍 SDG Goals */}
      <section data-aos="fade-up" className="mb-5">
        <h3 className="text-warning mb-4">United Nations SDG Alignment</h3>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="bg-dark border border-warning rounded p-4 h-100 shadow d-flex align-items-center">
              {/* --- Added SDG Image --- */}
              <img
                src={SDG}
                alt="SDG"
                style={{ width: "150px", height: "150px", marginRight: "5px" }}
              />
              <div>
                <h5 className="text-warning">
                  ⚙️ Goal 9: Industry, Innovation & Infrastructure
                </h5>
                <p className="mb-0 small">
                  It fosters secure innovation in digital forensics and
                  strengthens technological resilience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="bg-dark border border-warning rounded p-4 h-100 shadow d-flex align-items-center">
              {/* --- Added SDG Image --- */}
              <img
                src={sdg}
                style={{ width: "150px", height: "150px", marginRight: "5px" }}
              />
              <div>
                <h5 className="text-warning">
                  🔒 Goal 16: Peace, Justice & Strong Institutions
                </h5>
                <p className="mb-0 small">
                  EchoMark strengthens digital evidence integrity and supports
                  justice systems through forensic trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;
