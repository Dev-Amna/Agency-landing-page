import React from "react";
import "./MainSection.css";
import TestimonialsSection from "./TestimonialsSection";
import GalleryImages from "./GalleryImages";
import Footer from './Footer'
function StandOutSection() {
  return (
    <>
      {/* section 1 */}
      <section className="stand-audience">
        <div className="text-side">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">Learn More</a>
        </div>

        <div className="img-side">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="./assets/mobile/image-transform.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="./assets/desktop/image-transform.jpg"
            />
            <img
              src="./assets/desktop/image-transform.jpg"
              alt="image-transform"
            />
          </picture>
        </div>
      </section>

      {/* section 2 */}
      <section className="stand-audience">
        <div className="img-side">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="./assets/mobile/image-stand-out.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="./assets/desktop/image-stand-out.jpg"
            />
            <img
              src="./assets/desktop/image-stand-out.jpg"
              alt="image-stand-out"
            />
          </picture>
        </div>

        <div className="text-side">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#">Learn More</a>
        </div>
      </section>

      {/* section 3 */}
      <section className="photography">
        <div className="img-side">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="./assets/mobile/image-graphic-design.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="./assets/desktop/image-graphic-design.jpg"
            />
            <img
              src="./assets/desktop/image-graphic-design.jpg"
              alt="image-graphic-design"
            />
          </picture>

          <div className="post-set">
            <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
          </div>
        </div>

        <div className="img-side">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="./assets/mobile/image-photography.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="./assets/desktop/image-photography.jpg"
            />
            <img
              src="./assets/desktop/image-photography.jpg"
              alt="image-photography"
            />
          </picture>
       <div className="post-set">
           <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
       </div>
        </div>
      </section>
      <TestimonialsSection />
      <GalleryImages/>
      <Footer />
    </>
  );
}

export default StandOutSection;
