import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import Layout from "../components/layout/Layout";

function Home() {
  return (
    <Layout pageTitle="welcome">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      ></motion.div>
    </Layout>
  );
}

export default Home;
