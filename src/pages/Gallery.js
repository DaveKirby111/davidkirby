import React from "react";
import "../App.css";
import Layout from "../components/layout/Layout";

import { motion } from "framer-motion";
import { pageVariants } from "../components/PageVariants";
import { gallery } from "../components/GalleryArray";
import MyModal from "../components/MyModal";

export default function Gallery() {
  // Helper function to chunk the gallery array into groups of two
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunk the gallery array into groups of two
  const galleryChunks = chunkArray(gallery, 2);

  return (
    <Layout page="Gallery">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="gallery-container mt-5 mb-5 p-2">
          <div className="description w-50 mx-auto mt-5">
            <h2 className="text-decoration-underline">About my gallery</h2>
            <p>
              I first started drawing when I was in elementary school and
              continued to improve my art skills throughout college. Below are
              some of the things that I have done.
            </p>
          </div>
          {galleryChunks.map((chunk, index) => (
            <div className="row" key={index}>
              {chunk.map((image) => (
                <div
                  className="gallery w-50 col-md-6 mb-5"
                  key={image.id}
                  style={{ width: "100%", height: "auto" }}
                >
                  <div className="pic d-flex flex-column p-4">
                    <div className="img p-2 mb-3 mx-auto">
                      <MyModal
                        image={image.image}
                        alt={image.alt}
                        title={image.title}
                      />
                    </div>

                    <div className="body mx-auto">
                      <h5 className="text-center">{image.title}</h5>
                      <div className="body-text w-75 mx-auto">
                        <p>
                          <span className="fw-bold">{image.art}</span>
                          {image.medium}
                        </p>
                        <p className="mb-5">
                          <span className="fw-bold">Description: </span>
                          {image.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Add an empty div to clear the row after the second .pic */}
              {chunk.length < 2 && <div className="col-md-6 mb-5"></div>}
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
