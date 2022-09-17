import React from "react";
import Carousel from "react-multi-carousel";
import Laptop2 from "../../asset/image/Laptop2.jpg";
import Camera7 from "../../asset/image/Camera7.jpg";
import Mobile3 from "../../asset/image/Mobile3.jpg";

const Advertisement = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div style={{ maxWidth: "1280px", margin: "auto" }}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <img src={Camera7} className="text-center d-flex mx-auto rounded-3" />
        <img src={Laptop2} className="text-center d-flex mx-auto rounded-3" />
        <img src={Mobile3} className="text-center d-flex mx-auto rounded-3" />
      </Carousel>
    </div>
  );
};

export default Advertisement;
