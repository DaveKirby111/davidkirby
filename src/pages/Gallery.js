import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";

import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import { gallery } from "../components/GalleryArray";
import ImagePopup from "../components/ImagePopup";

export default function Gallery() {
  return (
    <Layout pageTitle="gallery">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="container p-2">
          {gallery.map((image) => {
            return (
              <div
                className="pic d-flex mb-5"
                key={image.id}
                style={{ width: "100%", height: "250px" }}
              >
                <div className="img p-2 w-25">
                  <ImagePopup
                    image={image.image}
                    alt={image.alt}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="body w-50 mx-auto">
                  <h5 className="text-center">{image.title}</h5>
                  <div className="body-text w-75 mx-auto">
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
              </div>
            );
          })}
        </div>
      </motion.div>
    </Layout>
  );
}
