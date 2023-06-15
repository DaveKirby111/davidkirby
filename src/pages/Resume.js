import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";

export default function Resume() {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="my-info text-capitalize w-25 mx-auto mt-5 text-center">
          <h2 className="mb-0">david kirby</h2>

          <p>Alabama, USA</p>
        </div>

        <div className="resume-body p-5 w-75 mx-auto">
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
                <p>2022-Present</p>
                <p>Title: Intern</p>
              </div>
              <div className="flex-fill">
                <p className="fw-bold">Dollar General</p>
                <p>2021-2022</p>
                <p>Title: Cashier</p>
              </div>
              <div className="flex-fill">
                <p className="fw-bold">Bon Appétit</p>
                <p>2020-2021</p>
                <p>Title: Dishwasher</p>
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
              <ul className="ms-5">
                <li>Javascript</li>
                <li>React</li>
                <li>Wordpress</li>
              </ul>
              <ul className="ms-5">
                <li>Bootstrap 5</li>
                <li>Sass</li>
                <li>Git and Github</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
