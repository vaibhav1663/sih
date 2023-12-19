import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const CarouselDefault=()=> {
  return (
    <Carousel className="h-[92%]">
      <div className="relative h-full w-full">
      <img
        src="/img/img1.jpg"
        alt="img 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              National Commission for Indian System of Medicine
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              The Aims and objectives of the National Commission for Indian System of Medicine are to
improve access to quality and affordable Ayurveda, Unani, Siddha and Sowa-Rigpa (AUS&SR) medical education
            </Typography>
          </div>
      </div>
      </div>
      <div className="relative h-full w-full">
      <img
        src="/img/img2.jpg"
        alt="img 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Textbook Quality Assessment Scale
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Acharya Charaka states a good medical text with pure knowledge enlightens the whole subject in the manner how sun eliminates darkness and spreads brightness’
            </Typography>
          </div>
      </div>
      </div>
      <div className="relative h-full w-full">
      <img
        src="/img/img3.jpg"
        alt="img 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
          </div>
      </div>
      </div>
      <div className="relative h-full w-full">
      <img
        src="/img/img4.jpg"
        alt="img 1"
        className="h-full w-full object-cover"
      />
      <div className="m-auto absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
          </div>
      </div>
      </div>
    </Carousel>
  );
}

export default CarouselDefault;
