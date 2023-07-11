import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import Layout from "../components/layout/Layout";

export default function Work() {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="works p-5 w-75 mt-5 mx-auto">
          <h1 className="text-center">Coming Soon</h1>
        </div>
      </motion.div>
    </Layout>
  );
}
