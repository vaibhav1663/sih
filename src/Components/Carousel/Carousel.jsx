import React from "react";
import { Carousel } from "@material-tailwind/react";

const CarouselDefault=()=> {
  return (
    <Carousel className="h-full">
      <img
        src="/img/image1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="img/image2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="img/image3.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="img/image4.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselDefault;
