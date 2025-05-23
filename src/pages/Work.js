import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import Layout from "../components/layout/Layout";

import { Link } from "react-router-dom";

import kwguides from "../images/kwguides.png";
import ctools from "../images/ctools.png";

const sites = [
  {
    id: 1,
    pic: kwguides,
    title: "KWorld Game Guides",
    src: "https://kwguides.netlify.app/",
    description:
      "A personal site for tips, trick, and guides to some games that I enjoy.",
  },

  {
    id: 2,
    pic: ctools,
    title: "My Office Tools",
    src: "https://myofficetools.netlify.app/",
    description: "Common tools used in office on one site.",
  },
];

export default function Work() {
  return (
    <Layout page="Portfolio">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="works p-5 w-75 mt-5 mx-auto">
          {sites.map((site) => {
            return (
              <div className="site d-flex" key={site.id}>
                <div className="site-img">
                  <Link to={site.src} target="_blank">
                    <img
                      src={site.pic}
                      alt="screenshot"
                      className="screenshot"
                    />
                  </Link>
                </div>

                <div className="desc">
                  <h3>{site.title}</h3>
                  <div className="desc-body">
                    <p>
                      <span className="fw-bold">Description: </span>
                      {site.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Layout>
  );
}
