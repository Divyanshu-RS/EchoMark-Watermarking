import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Divyanshu Ranjan Singh",
      role: "System Architecture & Unified MATLAB Software (Audio + Image + Video)",
      linkedin: "https://www.linkedin.com/in/divyanshu-ranjan-singh/",
      email: "mailto:divyanshuranjan.9999@gmail.com",
    },
    {
      name: "Aastha",
      role: "Research & Video Watermarking",
      linkedin: "https://www.linkedin.com/in/aastha5464/",
      email: "mailto:aasthatayal2002@gmail.com",
    },
    {
      name: "Merdul Sharma",
      role: "UI Design & Audio Watermarking",
      linkedin: "https://www.linkedin.com/in/merdul-sharma-962324292/",
      email: "mailto:merdulsharma2003@gmail.com",
    },
    {
      name: "Aman",
      role: "Image Watermarking & Testing",
      linkedin: "https://www.linkedin.com/in/aman022/",
      email: "mailto:amanaryaratansingh@gmail.com",
    },
  ];

  const guide = {
    name: "Dr. Ashish Dixit",
    role: "Associate Professor, CSE Department, AKGEC Ghaziabad",
    linkedin: "https://www.linkedin.com/in/dr-ashish-dixit-19649529a/",
    email: "mailto:ashishdixit1984@gmail.com",
  };

  return (
    <>
      <style>
        {`
          .team-card {
            background-color:rgb(29, 38, 50);
            color: #eee;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 0 10px rgba(0,0,0,0.4);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }
          .team-card:hover {
            background-color:rgb(14, 19, 23);
            box-shadow: 0 0 20px #00bfff88;
            cursor: pointer;
          }
          .btn-primary {
            background-color:rgb(35, 107, 214);
            border: none;
            display: flex;
            align-items: center;
            gap: 0.3rem;
          }
          .btn-primary:hover {
            background-color:rgb(0, 102, 255);
          }
          .btn-outline-secondary {
            color: #eee;
            border-color: #eee;
            display: flex;
            align-items: center;
            gap: 0.3rem;
          }
          .btn-outline-secondary:hover {
            background-color: #eee;
            color: #22272e;
          }
          .icon {
            font-size: 1rem;
          }
        `}
      </style>

      <div
        className="container py-5"
        style={{ backgroundColor: "#000000", minHeight: "100vh", minHeight: "100vh" }}
      >
        <h1 className="mb-5 text-warning text-center" data-aos="fade-up">
          Meet Our Team
        </h1>

        <div className="row justify-content-center mb-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="team-card">
                <h5 className="mb-2">{member.name}</h5>
                <p className="mb-3 small">{member.role}</p>
                <div className="d-flex gap-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fab fa-linkedin icon"></i> LinkedIn
                  </a>
                  <a
                    href={member.email}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-envelope icon"></i> Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3
          className="mt-5 text-success text-center"
          data-aos="fade-up"
          data-aos-delay={teamMembers.length * 100}
        >
          Project Guide
        </h3>
        <div
          className="col-md-8 mx-auto mt-3"
          data-aos="fade-up"
          data-aos-delay={(teamMembers.length + 1) * 100}
        >
          <div className="team-card">
            <h5 className="mb-2">{guide.name}</h5>
            <p className="mb-3 small">{guide.role}</p>
            <div className="d-flex gap-2">
              <a
                href={guide.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <i className="fab fa-linkedin icon"></i> LinkedIn
              </a>
              <a
                href={guide.email}
                className="btn btn-outline-secondary btn-sm"
              >
                <i className="fas fa-envelope icon"></i> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
