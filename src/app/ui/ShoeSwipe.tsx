"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

import SwiperCore from "swiper";
import { FileImage } from "lucide-react";

// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Navigation, Pagination]);

type ShoeSwipeProps = {
  image: string;
  name: string | "";
};

const ShoeSwipe: React.FC<ShoeSwipeProps> = ({ image, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [image, ...Array(3).fill("/placeholder.png")];

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="sticky top-12">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        <div className="col-span-1 hidden md:block">
          <div className="flex md:flex-col gap-2">
            {images.map((img, index) => (
              <div
                key={index}
                className={`cursor-pointer relative flex justify-center h-20`}
                onClick={() => handleImageClick(index)}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-full -z-10 visible rounded-lg ${
                    activeIndex === index ? " bg-gray-100" : "bg-white"
                  }`}
                ></div>
                {img === "/placeholder.png" ? (
                  <PlaceholderImage />
                ) : (
                  <Image src={img} alt={name} width={100} height={100} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6 hidden md:block">
          {/* <div className="px-3 grid gap-3">
            <h1 className="text-2xl font-bold">{name}</h1>
          </div> */}
          <div className="relative bg-white rounded-lg shadow-md">
            {images[activeIndex] === "/placeholder.png" ? (
              <PlaceholderImage />
            ) : (
              <Image
                src={images[activeIndex]}
                alt={name}
                className="w-full"
                width={500}
                height={500}
              />
            )}
            <div className="hidden md:flex justify-between absolute bottom-4 right-4 gap-4">
              <button
                className="bg-black text-white rounded-full p-2"
                onClick={handlePrevClick}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="bg-black text-white rounded-full p-2"
                onClick={handleNextClick}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden relative">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-lg shadow-md">
                {img === "/placeholder.png" ? (
                  <PlaceholderImage />
                ) : (
                  <Image
                    src={img}
                    alt={name}
                    className="w-full aspect-square"
                    width={500}
                    height={500}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-6 right-6 text-white bg-gray-500 rounded-3xl z-10 p-2">
          {activeIndex + 1}/{images.length}
        </div>
      </div>
    </div>
  );
};

const PlaceholderImage: React.FC = () => {
  return (
    <div className="aspect-square flex items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <FileImage size={32} />
      </div>
    </div>
  );
};

export default ShoeSwipe;
