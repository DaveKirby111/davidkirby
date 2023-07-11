import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import Layout from "../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="intro p-5 w-75 mt-5 mx-auto">
          <div className="name w-25 text-center">
            <h1>David Kirby</h1>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;
