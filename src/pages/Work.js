import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import Layout from "../components/layout/Layout";

// import { Link } from "react-router-dom";

// import placeholder from "../images/placeholder-screencap.png";

// const sites = [
//   {
//     id: 1,
//     pic: placeholder,
//     title: "title",
//     src: "",
//     description: "This is a placeholder for potential upcoming sites.",
//   },

//   {
//     id: 2,
//     pic: placeholder,
//     title: "title",
//     src: "",
//     description: "This is a placeholder for potential upcoming sites.",
//   },
// ];

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
          <h2 className="text-center">Coming Soon</h2>
          {/* {sites.map((site) => {
            return (
              <div className="site d-flex" key={site.id}>
                <div className="site-img">
                  <Link to={site.src}>
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
          })} */}
        </div>
      </motion.div>
    </Layout>
  );
}
