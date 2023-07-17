import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";

import me from "../images/Me.jpg";
import resume from "../assets/Resume.pdf";

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
            <div className="myPic w-50 p-5">
              <img src={me} alt="me" className="me mb-5" />

              <div className="about-info p-5 d-flex flex-column">
                <div className="personal-info mb-3">
                  <p className="h5 fw-bold mb-4">Information</p>
                  <p>Email: davidkirby225@gmail.com</p>
                  <p>Address: McCalla, AL</p>
                </div>

                <a
                  href={resume}
                  className="resume-btn mb-5 p-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="fa-solid fa-file-arrow-down me-2"></i>
                  Open PDF
                </a>

                <div className="d-flex">
                  <a
                    href="https://www.linkedin.com/in/david-kirby-64a1487a/"
                    rel="noreferrer"
                    target="_blank"
                    className="me-5"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>

                  <a
                    href="https://github.com/DaveKirby111?tab=repositories"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="profile w-50 p-5">
              <p className="h5 fw-bold mb-4">Background</p>
              <p>
                My name is David Kirby and I make websites. I first started
                drawing when I was in elementary school and continued to improve
                my art skills throughout college. I attended the University of
                Montevallo and during my four years there I never decided on a
                specific field to major in; and so I recieved a general
                education in art. By the time I had graduated, I had become
                burnt out on art and fell out of doing it.
              </p>
              <p>
                After I graduated college I worked at a pain clinic for a couple
                of years before I continued my education at Jefferson State
                Community College. I decided on web development, seeing it as a
                middle ground between being creative and doing something
                structured.
              </p>
              <p>
                After getting my Associates degree in Web Technologies, I was
                never able to get hired as a web developer. I eventually ended
                up washing dishes in kitchen before getting another job at
                Dollar General as a cashier. After over a year, I left that job
                as it was not good for my overall health.
              </p>
              <p className="mb-5">
                I now have an internship at Kinetic Communications which I have
                been enjoying. During my time here I have had the opportunity to
                expand my knowledge of coding and grow as a web developer.
              </p>

              <p className="h5 fw-bold mb-4">Interests</p>
              <p>
                In my free time I enjoy comic books, tv and movies. Video games
                are a hobby that I enjoy, more specifically role playing games
                that revolve around science fiction or fantasy settings.
              </p>
              <p>
                I took karate when I was younger and even competed in a couple
                of tournaments while I was in school. I still have an interest
                in martial arts even though I have not done it in years.
              </p>
              <p>
                I don't normally read a lot of books, but there are certain
                series that I have purchased and intend to get around to
                reading. One example is the Witcher series of books. Being a fan
                of the games I wanted to get the books as well. I have read the
                first couple of books but have yet to start the rest. I also
                have a few of the Star Wars books.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
