import React from "react";
import "./gallery.css";
import images from "../images";
import Subheading from "../../comps/Subheading/Subheading";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";

const images_top = [
  images.gallb05,
  images.gallt01,
  images.gallt02,
  images.gallb01,
  images.gallt04,
  images.gallt05,
  images.gallb04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery" id="gallery">
      <div className="app__gallery-content">
        <img src={images.bg} alt="overlay" className="overlay" />
        <div className="app__gallery-content-text">
          <div className="gallery-content-left">
            <Subheading title="Instagram" prefer={true} style={{}} />
            <p className="headtext__cormorant">Photo Gallery</p>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <button type="button" className="custom__button">
              View More
            </button>
          </div>
          <div className="gallery-content-right">
            <div className="gallery-images__container" ref={scrollRef}>
              {images_top.map((image, index) => (
                <div
                  className="gallery_image-card"
                  key={`gallery_image_${index + 1}`}
                >
                  <img
                    src={image}
                    alt="gallery_image"
                    className="gallery_image"
                  />
                  <BsInstagram className="gallery_image-icon" />
                </div>
              ))}
            </div>
            <div className="gallery-images__arrow">
              <BsArrowLeftShort
                className="gallery-images__arrow-icon"
                onClick={() => scroll("left")}
              />
              <BsArrowRightShort
                className="gallery-images__arrow-icon"
                onClick={() => scroll("right")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
