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
        <div className="works w-75 mx-auto mt-5 mb-5">
          <h3 className="text-center">Coming Soon.</h3>
        </div>
      </motion.div>
    </Layout>
  );
}
