import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");

    const SERVICE_ID = "service_0gop10i";
    const TEMPLATE_ID = "template_wnrk9at";
    const USER_ID = "MpVRu5m0BQAyi7x0g";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        USER_ID
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent! We'll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setSending(false);
        },
        () => {
          setStatusMessage(
            "❌ Failed to send message. Please try again later."
          );
          setSending(false);
        }
      );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .contact-container {
          max-width: 600px;
margin: 2rem auto 2rem auto;
          
          padding: 2rem 1.5rem;
          background-color: #121212;
          color: #e0e0e0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(0, 191, 255, 0.5);
          opacity: 0;
          transform: translateY(20px);
          animation-fill-mode: forwards;
          animation-duration: 0.8s;
          animation-name: fadeInUp;
          animation-timing-function: ease-out;
        }
        .contact-container.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Block styling */
        .block {
          padding: 1.5rem 1rem;
          margin-bottom: 2rem;
          border-radius: 10px;
          background: #1e1e1e;
          box-shadow: inset 0 0 8px #008fcf33;
          transition: box-shadow 0.3s ease;
        }
        .block:hover {
          box-shadow: inset 0 0 15px #00bfffaa;
        }

        label {
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
          color: #a0cfff;
        }

        input, textarea {
          width: 100%;
          padding: 0.65rem 1rem;
          margin-bottom: 1.25rem;
          border-radius: 8px;
          border: 1.8px solid #2a2a2a;
          background-color: #1e1e1e;
          color: #e0e0e0;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          resize: vertical;
        }
        input::placeholder,
        textarea::placeholder {
          color: #777;
          opacity: 1;
          font-style: italic;
        }
        input:focus, textarea:focus {
          border-color: #00bfff;
          outline: none;
          box-shadow: 0 0 8px #00bfff88;
          background-color: #262626;
        }

        button {
          background: linear-gradient(135deg, #00bfff, #008fcf);
          border: none;
          color: #fff;
          font-weight: 700;
          padding: 0.75rem 2rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.1rem;
          box-shadow: 0 4px 8px rgba(0, 191, 255, 0.4);
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease;
          user-select: none;
        }
        button:disabled {
          background: #004a5a;
          cursor: not-allowed;
          box-shadow: none;
        }
        button:not(:disabled):hover {
          background: linear-gradient(135deg, #008fcf, #00bfff);
          box-shadow: 0 6px 15px rgba(0, 191, 255, 0.6);
          transform: translateY(-2px);
        }
        button:not(:disabled):active {
          transform: translateY(1px);
          box-shadow: 0 3px 7px rgba(0, 191, 255, 0.5);
        }

        a {
          color: #00bfff;
          text-decoration: none;
          font-weight: 600;
        }
        a:hover {
          text-decoration: underline;
        }

        .status-message {
          margin-top: 1rem;
          font-weight: 600;
          font-size: 1rem;
          color: #00ff99;
          animation: fadeIn 0.5s ease forwards;
        }
        .status-message.error {
          color: #ff4444;
        }

        .social-btn {
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 10px;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.3s ease, color 0.3s ease;
          text-decoration: none;
          user-select: none;
          border: 2px solid transparent;
          cursor: pointer;
        }
        .btn-linkedin {
          color: #1da1f2;
          border-color: #0a66c2;
          background-color: transparent;
        }
        .btn-linkedin:hover {
          background-color: #0a66c2;
          color: #fff;
        }
        .btn-twitter {
          color: #1da1f2;
          border-color: #1da1f2;
          background-color: transparent;
        }
        .btn-twitter:hover {
          background-color: #1da1f2;
          color: #fff;
        }

        .d-flex {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className={`contact-container ${fadeIn ? "fade-in" : ""}`}>
        {/* Block 1: Contact Us Directly */}
        <section className="block">
          <h1 className="mb-4">Contact Us</h1>
          <p>For inquiries, feedback or collaboration, reach out to us via:</p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:divyanshuranjan.9999@gmail.com">
                contact@echomark.tech
              </a>
            </li>
            <li>Phone (optional): +91-8299498588</li>
          </ul>
        </section>

        {/* Block 2: Send Message */}
        <section className="block">
          <h3 className="mt-0 mb-3">Or send us a message directly:</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name">
                Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message">
                Message<span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              />
            </div>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {statusMessage && (
            <p
              className={`status-message ${
                statusMessage.startsWith("❌") ? "error" : ""
              }`}
            >
              {statusMessage}
            </p>
          )}
        </section>

        {/* Block 3: Follow Us */}
        <section className="block">
          <h4>Follow Us</h4>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/divyanshu-ranjan-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn btn-linkedin"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://x.com/DivyanshuRS999"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn btn-twitter"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
