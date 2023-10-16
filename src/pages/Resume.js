import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import resume2 from "../assets/Resume.docx";

export default function Resume() {
  function downloadResume() {
    const resumeURL = resume2;

    fetch(resumeURL)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobURL;
        a.download = "Resume.docx";

        document.body.appendChild(a);
        a.click();

        URL.revokeObjectURL(blobURL);

        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error downloading resume:", error);
      });
  }

  return (
    <Layout page="Resumé">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="dlResume">
          <button onClick={downloadResume}>
            <i class="fa-solid fa-file-arrow-down me-2"></i>
            Download Resume
          </button>
        </div>

        <div className="resume-body p-5 mt-5 mx-auto">
          <div className="education">
            <h3 className="mb-5">education</h3>

            <div className="school d-flex justify-content-between text-center">
              <div className="high flex-fill">
                <p className="fw-bold">Homewood High School</p>
                <p>2001-2004</p>
                <p>Advanced Diploma</p>
              </div>
              <div className="college flex-fill">
                <p className="fw-bold">University of Montevallo</p>
                <p>2004-2008</p>
                <p>B.S. Art</p>
              </div>
              <div className="college2 flex-fill">
                <p className="fw-bold">Jefferson State Community College</p>
                <p>2012-2014</p>
                <p>Associates: Web Technologies</p>
              </div>
            </div>
          </div>

          <div className="experience">
            <h3 className="mb-5">experience</h3>

            <div className="work text-center d-flex justify-content-between">
              <div className="flex-fill">
                <p className="fw-bold">Kinetic Communications</p>
                <p>2022-2023</p>
                <p>Coding and development on multiple projects</p>
              </div>
              <div className="flex-fill">
                <p className="fw-bold">Dollar General</p>
                <p>2021-2022</p>
                <p>Cashier</p>
              </div>
              <div className="flex-fill">
                <p className="fw-bold">Bon Appétit</p>
                <p>2020-2021</p>
                <p>Dishwasher</p>
              </div>
            </div>
          </div>

          <div className="skills">
            <h3 className="mb-5">skills</h3>

            <div className="list d-flex justify-content-center">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
              </ul>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Wordpress</li>
              </ul>
              <ul>
                <li>Bootstrap 5</li>
                <li>Sass</li>
                <li>Git and Github</li>
              </ul>
              <ul>
                <li>AI and ChatGPT</li>
                <li>Microsoft Office</li>
                <li>Svelte</li>
              </ul>
            </div>
          </div>

          <div className="references">
            <h3 className="mb-5">references</h3>
            <div className="d-flex justify-content-center">
              <p>Available upon request.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
