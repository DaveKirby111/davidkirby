import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import Layout from "../components/layout/Layout";

const styles = {
  container: {
    height: "100%",
  },
  h3: {
    marginTop: "500px",
    fontSize: "40px",
  },
};

export default function Work() {
  return (
    <Layout pageTitle="work">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={styles.container}
      >
        <h3 className="text-center" style={styles.h3}>
          Coming Soon.
        </h3>
      </motion.div>
    </Layout>
  );
}
