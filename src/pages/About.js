import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";

import placeholder from "../images/placeholder.png";
import resume from "../assets/Resume.pdf";

export default function About() {
  return (
    <Layout pageTitle="about me">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="about-container d-flex">
          <div className="myPic w-50 p-5">
            <img src={placeholder} alt="me" className="me" />
            <caption className="mb-5">Pic coming soon.</caption>
            <p className="fw-bold">Resume:</p>
            <p className="pdf mb-5">
              <a href={resume} className="fw-bold">
                Open
              </a>{" "}
              pdf
            </p>
            <p className="fw-bold">Contact Info:</p>
            <p>davidkirby225@gmail.com</p>
          </div>

          <div className="profile w-50 p-5">
            <p className="h5 fw-bold mb-4 text-decoration-underline">
              Background
            </p>
            <p>
              My name is David Kirby and I make websites. I first started
              drawing when I was in elementary school and continued to improve
              my art skills throughout college. I attended the University of
              Montevallo and during my four years there I never decided on a
              specific field to major in; and so I recieved a general education
              in art. By the time I had graduated, I had become burnt out on art
              and fell out of doing it.
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
              never able to get hired as a web developer. I eventually ended up
              washing dishes in kitchen before getting another job at Dollar
              General as a cashier. After over a year, I left that job as it was
              not good for my overall health.
            </p>
            <p className="mb-5">
              I now have an internship at Kinetic Communications which I have
              been enjoying. During my time here I have had the opportunity to
              expand my knowledge of coding and grow as a web developer.
            </p>
            <p className="h5 fw-bold mb-4 text-decoration-underline">
              Interests
            </p>
            <p>
              In my free time I enjoy super hero media such as comic books, tv
              and movies. Video games are a hobby that I enjoy, more
              specifically role playing games that revolve around science
              fiction or fantasy settings.
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}