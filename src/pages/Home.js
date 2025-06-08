import React, { useState } from "react"; // [MODIFIED]
import { useEffect } from "react"; // add to imports at top
import logo from "../assets/ELogo.png";
import flowchart from "../assets/flowchart.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // [MODIFIED] State for modal, toast, loader
  const [showModal, setShowModal] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href =
        "https://github.com/Divyanshu-RS/EchoMark-Watermarking/releases/download/v1.0.0/EchoMark.Watermarking.exe";
      link.download = "EchoMark Watermarking.exe";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
      setShowModal(false);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <div className="bg-dark text-light text-center py-5">
      <img src={logo} className="mb-4" style={{ width: "150px" }} />
      <h1 className="display-4 fw-bold" data-aos="zoom-in">
        EchoMark Watermarking
      </h1>
      <p className="lead" data-aos="zoom-out">
        Watermarking Surveillance for Law Enforcement
      </p>
      {/* 📖 Section: Introduction */}
      <div className="container mt-5" data-aos="fade-up">
        <h2 className="text-warning">Introduction</h2>
        <p className="mt-3 px-4 mx-auto" style={{ maxWidth: "800px" }}>
          <strong>EchoMark</strong> is a secure, cross-media watermarking
          solution designed to protect the authenticity of surveillance
          media—images, audio, and video. Built using state-of-the-art signal
          processing, it enables tamper detection, content authentication, and
          forensic validation for law enforcement data.
        </p>
      </div>
      {/* ⚠️ Section: Problem Context */}
      <div className="container mt-5" data-aos="fade-up">
        <h2 className="text-warning">Why EchoMark?</h2>
        <p className="mt-3 px-4 mx-auto" style={{ maxWidth: "800px" }}>
          With the explosive growth of multimedia and increasing cases of
          evidence manipulation, conventional surveillance systems struggle to
          ensure data integrity. EchoMark addresses:
        </p>
        <ul
          className="text-start px-4 mx-auto d-inline-block"
          style={{ maxWidth: "800px" }}
        >
          <li>
            ❌ Lack of reversible image watermarking for original recovery.
          </li>
          <li>❌ No frame-level tamper detection in video authentication.</li>
          <li>
            ❌ Weak robustness to noise, cropping, or re-encoding attacks.
          </li>
          <li>
            ✅ Need for court-admissible, computationally verifiable watermarks.
          </li>
        </ul>
      </div>
      {/* ⚙️ Section: System Modules */}
      <div className="container mt-5" data-aos="fade-up">
        <h2 className="text-warning">Core Modules</h2>
        <p className="mt-3 px-4 mx-auto" style={{ maxWidth: "800px" }}>
          EchoMark is composed of three tightly integrated watermarking
          subsystems:
        </p>
        <ul
          className="text-start px-4 mx-auto d-inline-block"
          style={{ maxWidth: "800px" }}
        >
          <li>
            🔒 <strong>Image Watermarking:</strong> Reversible method using
            weighted-sum spatial domain embedding, ensuring both watermark
            invisibility and full recovery of the original.
          </li>
          <li>
            🔊 <strong>Audio Watermarking:</strong> Uses FFT-based
            frequency-domain embedding, robust to pitch/volume changes and
            compression.
          </li>
          <li>
            🎥 <strong>Video Watermarking:</strong> Frame-level watermarking
            with SSIM-based tamper detection, even under blur, crop, or reframe
            attacks.
          </li>
        </ul>
      </div>
      {/* 📊 Section: Performance Summary */}
      <div className="container mt-5" data-aos="fade-up">
        <h2 className="text-warning">Performance & Evaluation</h2>
        <p className="px-4 mx-auto" style={{ maxWidth: "800px" }}>
          The system was tested on <strong>65 multimedia files</strong> (30
          images, 20 audio clips, 15 videos) under real-world tampering
          scenarios. Key results:
        </p>
        <ul
          className="text-start px-4 mx-auto d-inline-block"
          style={{ maxWidth: "800px" }}
        >
          <li>
            📈 <strong>PSNR:</strong> &gt; 40 dB — high imperceptibility
          </li>
          <li>
            💾 <strong>Extraction Accuracy:</strong> 94–97%
          </li>
          <li>
            🧪 <strong>Tamper Resilience:</strong> Withstands noise, crop,
            re-encode, and compression
          </li>
          <li>
            🔐 <strong>Metadata Protection:</strong> Encrypted signature data
            and logs
          </li>
        </ul>
      </div>
      {/* 🌐 Section: Real-World Significance */}
      <div className="container mt-5" data-aos="fade-up">
        <h2 className="text-warning">Why It Matters</h2>
        <p className="px-4 mx-auto" style={{ maxWidth: "800px" }}>
          EchoMark empowers law enforcement agencies, digital forensics teams,
          and surveillance vendors with a trustable, tamper-evident framework to
          verify evidence authenticity.
        </p>
        <ul
          className="text-start px-4 mx-auto d-inline-block"
          style={{ maxWidth: "800px" }}
        >
          <li>
            🏛️ Validates digital media for court use and chain-of-custody trails
          </li>
          <li>
            🔎 Helps detect forgery or illegal manipulation of surveillance
            footage
          </li>
          <li>
            🚔 Enables secure, accountable, and auditable field surveillance
          </li>
          <li>
            📚 Acts as a research foundation for forensic watermarking
            innovation
          </li>
        </ul>
      </div>
      {/* 🔽 Call-to-Action Buttons */}
      <div
        className="mt-4 d-flex justify-content-center gap-3"
        data-aos="zoom-in"
      >
        <button
          className="btn btn-warning btn-lg"
          onClick={() => navigate("/about")}
        >
          Learn More
        </button>
        <button
          className="btn btn-outline-light btn-lg"
          onClick={() => navigate("/features")}
        >
          Explore Features
        </button>
      </div>
      {/* 📊 Visual Flowchart Section */}
      <div className="container mt-5" data-aos="fade-up">
        <h2 className="mb-4">System Workflow</h2>
        <img
          src={flowchart}
          alt="EchoMark Watermarking Flowchart"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "500px" }}
        />
        <p className="mt-3" style={{ maxWidth: "700px", margin: "0 auto" }}>
          The above diagram illustrates EchoMark’s process...
        </p>
      </div>
      {/* 📦 Download Button */} {/* [MODIFIED] */}
      <div id="download" className="text-center">
        <button
          className="btn btn-warning btn-lg mt-5"
          style={{ visibility: "visible", opacity: 4 }}
          data-aos="zoom-in"
          onClick={() => setShowModal(true)}
        >
          Download Software
        </button>
      </div>
      {/* ✅ MODAL: Download Confirmation */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Download</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <div
                    className="modal-body text-start bg-dark text-light"
                    style={{
                      maxHeight: "300px",
                      overflowY: "auto",
                      borderRadius: "8px",
                    }}
                  >
                    <p className="fw-bold mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Thank you for choosing to install{" "}
                      <strong>EchoMark Watermarking</strong>.
                    </p>

                    <p>Please review the following before proceeding:</p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-folder-open text-info me-2"></i>
                        After installation, EchoMark will appear in your{" "}
                        <strong>Start Menu</strong>. You can also select{" "}
                        <em>“Add to Desktop”</em> during setup for quick access.
                      </li>
                      <li className="mb-2">
                        <i className="fab fa-python text-warning me-2"></i>
                        <strong>Python 3.x</strong> is required to run
                        watermarking modules (Image, Audio, Video).
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-cubes text-secondary me-2"></i>
                        Required Python libraries: <code>OpenCV</code>,{" "}
                        <code>NumPy</code>, <code>scikit-image</code>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-book-open text-primary me-2"></i>A
                        detailed <strong>User Guide</strong> is included within
                        the application for assistance.
                      </li>
                    </ul>

                    <p className="mt-3">
                      <i className="fas fa-download text-success me-2"></i>
                      Click <strong>Download</strong> to begin the installation.
                    </p>
                  </div>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleDownload}
                  disabled={downloading}
                >
                  {downloading ? "Downloading..." : "Download"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ✅ TOAST: Download Started */}
      {showToast && (
        <div
          className="position-fixed bottom-0 start-0 p-3"
          style={{ zIndex: 9999 }}
        >
          <div
            className="toast show text-white bg-success border-0 shadow-lg"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-aos="fade-in"
          >
            <div className="toast-header bg-success text-white">
              <i className="fas fa-check-circle me-2"></i>
              <strong className="me-auto">Download Started</strong>
              <small>Just now</small>
              <button
                type="button"
                className="btn-close btn-close-white ms-2 mb-1"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
            <div className="toast-body">
              EchoMark is downloading... You’ll find the installer in your
              browser’s downloads bar or folder.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
