import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import { gallery } from "../components/GalleryArray";

export default function Gallery() {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <h2>gallery</h2>

        <div className="container p-2">
          {gallery.map((image) => {
            return (
              <div className="pic d-flex mb-3">
                <div className="img p-2 w-25">
                  <img src={image.image} alt={image.alt} className="thumb" />
                </div>
                <div className="body w-75 p-3">
                  <h5 className="text-center text-decoration-underline">
                    Title: {image.title}
                  </h5>
                  <p>
                    <span className="fw-bold">{image.art}</span>
                    {image.medium}
                  </p>
                  <p>
                    <span className="fw-bold">Description: </span>
                    {image.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Layout>
  );
}
