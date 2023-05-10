import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";

export default function About() {
  return (
    <Layout pageTitle="about me">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      ></motion.div>
    </Layout>
  );
}
