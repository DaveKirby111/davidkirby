import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import { Link } from "react-router-dom";

import me from "../images/Me.jpg";
import resume from "../assets/Resume.pdf";
import github from "../fontawesome/svgs/brands/github.svg";
import linked from "../fontawesome/svgs/brands/linkedin-in.svg";

export default function About() {
  return (
    <Layout page="David Kirby">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="about-container d-flex flex-column mt-5 mb-5">
          <h2 className="text-decoration-underline">About Me</h2>
          <div className="d-flex about-infobody">
            <div className="myPic p-5">
              <img src={me} alt="me" className="me mb-5" />

              <div className="about-info p-5 d-flex flex-column">
                <div className="personal-info mb-3">
                  <p className="h5 fw-bold mb-4">Information</p>
                  <p>
                    Email:{" "}
                    <Link to="mailto:davidkirby225@gmail.com">
                      davidkirby225@gmail.com
                    </Link>
                  </p>
                  <p>Address: McCalla, AL</p>
                </div>

                <a
                  href={resume}
                  className="resume-btn mb-5 p-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="fa-solid fa-file me-2"></i>
                  Open PDF
                </a>

                <div className="d-flex">
                  <a
                    href="https://www.linkedin.com/in/david-kirby-64a1487a/"
                    rel="noreferrer"
                    target="_blank"
                    className="me-5"
                  >
                    <img
                      src={linked}
                      alt="linked"
                      width={"29px"}
                      height={"30px"}
                    />
                  </a>

                  <a
                    href="https://github.com/DaveKirby111?tab=repositories"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={github}
                      alt="github"
                      width={"29px"}
                      height={"30px"}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile p-5">
              <p className="h5 fw-bold mb-4">Background</p>
              <p>My name is David Kirby, and I am a web developer.</p>
              <p>
                My background in the visual arts began early, and I continued to
                develop those skills through my studies at the University of
                Montevallo, where I completed a broad, interdisciplinary art
                program. This foundation in visual design has remained a
                consistent influence on my work, even as my career path evolved.
              </p>
              <p>
                After completing my undergraduate studies, I pursued further
                education at Jefferson State Community College, where I earned
                an Associate’s Degree in Web Technologies. I was drawn to web
                development because it combines creative thinking with
                structured problem-solving, allowing me to approach technical
                challenges with an artistic perspective.
              </p>
              <p>
                Like many emerging professionals, my early career included roles
                outside of my chosen field. Throughout that time, I continued
                building projects and refining my technical skills. This
                persistence ultimately led to my current role as a Web
                Development Intern at Kinetic Communications.
              </p>
              <p>
                At Kinetic, I have had the opportunity to expand my coding
                knowledge, work within a professional development environment,
                and contribute to real client projects. This experience has
                strengthened both my technical expertise and my commitment to
                pursuing a long-term career in web development.
              </p>
              <p className="mb-4">
                I am focused, reliable, and continually learning—dedicated to
                producing high-quality work and growing as a developer with each
                project I undertake.
              </p>

              <p className="h5 fw-bold mb-4">Personal Interests</p>
              <p>
                Outside of web development, I have a strong interest in
                storytelling across different media. I enjoy comic books,
                television, and film, and I am an avid fan of video
                games—particularly role-playing games set in science fiction and
                fantasy worlds.
              </p>
              <p>
                I studied karate when I was younger and competed in several
                tournaments during my school years. Although I no longer
                practice regularly, martial arts remain an area of personal
                interest and appreciation.
              </p>
              <p>
                I am also gradually expanding my reading habits. I enjoy
                collecting and exploring book series connected to my favorite
                fictional universes, including The Witcher series and various
                Star Wars titles. These stories inspire my imagination and
                reflect my ongoing interest in world-building and narrative
                design.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
