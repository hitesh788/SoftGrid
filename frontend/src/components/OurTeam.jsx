import React from "react";
import "../styles/OurTeam.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import team1 from "../assets/Teams/Hitesh_CEO.png";
import team2 from "../assets/Teams/Abhishek.jpg";
import team3 from "../assets/Teams/Ishan.jpg";
import team4 from "../assets/Teams/Sumit_Mar.png";
import team5 from "../assets/Teams/Suran_Dir.jpg";

const teamMembers = [
  {
    name: "Hitesh Joshi",
    title: "CEO & Founder",
    desc: "With over years of knowledge in technology and leadership, leads the company vision and strategy.",
    image: team1,
    link1: "https://www.facebook.com/hejoshi77",
    link2: "https://www.linkedin.com/in/hejoshi77",
    link3: "https://x.com/hejoshi77",
  },
  {
    name: "Abhishek Kunwar",
    title: "Sl. Manager",
    desc: "With over years of knowledge in technology and leadership, leads the company vision and strategy.",
    image: team2,
    link1: "https://www.facebook.com/nishu.kunwar.31",
    link2: "https://www.linkedin.com/in/abhishek-kunwar55/",
    link3: "https://x.com/kunwar_abh29597",
  },
  {
    name: "Ishan Singh",
    title: "CTO",
    desc: "Ishan oversees our technical strategy and ensures we deliver cutting-edge solutions that meet our clients' needs.",
    image: team3,
    link1: "https://www.facebook.com/ishan.thakuri777",
    link2: "https://www.linkedin.com/in/ishan-singh-61a0701b2/",
    link3: "https://x.com/ishansingh2015",
  },
  {
    name: "Sumit Thakurathi",
    title: "Exec. Developer",
    desc: "Sumit leads our design team, ensuring all our solutions are functional but also visually stunning.",
    image: team4,
    link1: "https://www.facebook.com/profile.php?id=100056740402471",
    link2: "https://www.linkedin.com/in/sumitthakurathi/",
    link3: "https://x.com/sumitsir0526",
  },
  {
    name: "Suran Singh Dhami",
    title: "Director",
    desc: "Suran develops and implements our marketing, helping clients achieve their growth objectives.",
    image: team5,
    link1: "https://www.facebook.com/suran.singh.dhami.2025",
    link2: "https://www.linkedin.com/in/suransingh7/",
    link3: "https://x.com/Dhammi_7",
  },
];

const OurTeam = () => {
  return (
    <section id="team" className="team-wrapper">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-header"></div>
            <img
              draggable="false"
              src={member.image}
              alt={member.name}
              className="profile-img"
            />
            <h2>{member.name}</h2>
            <p className="role">{member.title}</p>
            <p className="desc">{member.desc}</p>
            <div className="socials">
              <a href={member.link1} target="_blank" className="facebook">
                <FaFacebook />
              </a>
              <a href={member.link2} target="_blank" className="linkedin">
                <FaLinkedin />
              </a>
              <a href={member.link3} target="_blank" className="twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;