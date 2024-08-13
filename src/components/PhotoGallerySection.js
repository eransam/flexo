// components/PhotoGallerySection.js
import React, { useState } from "react";
import Image from "next/image";

const PhotoGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/blog/color rubber black legs.JPG",
    "/images/blog/E6 with black top.JPG",
    "/images/blog/E6 wood top.JPG",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="photo-gallery-section">
      <div className="photo-gallery-container">
        <button
          className="photo-gallery-button photo-gallery-button-left"
          onClick={handlePrev}
        >
          &gt;
        </button>
        <div className="image-wrapper">
          <Image
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="photo-gallery-image"
          />
        </div>
        <button
          className="photo-gallery-button photo-gallery-button-right"
          onClick={handleNext}
        >
          &lt;
        </button>
      </div>
      <style jsx>{`
        .photo-gallery-section {
          position: relative;
          width: 100%;
          height: 100vh; /* Adjust height as needed */
          overflow: hidden;
        }

        .photo-gallery-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .photo-gallery-button {
          display: flex;

          position: absolute;
          top: 85%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          font-size: 24px;
          z-index: 10;
        }

        .photo-gallery-button-left {
          padding-right: 45px;
          justify-content: end;
          left: 10px;
        }

        .photo-gallery-button-right {
          right: 10px;
          padding-left: 45px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .photo-gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default PhotoGallerySection;
