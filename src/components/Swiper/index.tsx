"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import NextImage from "next/image";
import { CardItem } from "./components/CardItem";
import IconBack from "public/back.svg";
import IconForward from "public/forward.svg";

const mockData: {
  img: string;
  title: string;
  bid: number;
}[] = [
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },

  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
  {
    img: "/image.jpeg",
    title: "Sun-Glass",
    bid: Math.round((Math.random() * 9 + 1) * 100) / 100,
  },
];

export const Swiper = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleForward = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollWidth / 8;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleBack = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollWidth / 8;
      sliderRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-between">
        <p className="lg:text-[45px] md:text-[32px] text-[30px] font-semibold text-darkGrey">
          Weekly - Top NFT
        </p>
      </div>

      <div className="relative w-[100vw] lg:h-[600px] h-[400px] top-[10%]">
        <div
          ref={sliderRef}
          className="absolute top-0 left-0 w-[100vw] h-full overflow-scroll scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <motion.div className="absolute top-0 items-center left-0 lg:w-[3000px] w-[1000px] h-full flex">
            {mockData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <CardItem item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-100px flex">
        <div
          className="
        flex-none
        bg-white 
        text-black 
        w-[166px] 
        flex justify-center
        rounded-xl 
        p-4 
        shadow-[0_43px_34px_-25px_rgba(15,15,15,0.12)]
        h-[48px]
        "
        >
          <Button
            isIconOnly
            onPress={handleBack}
            radius="none"
            disableAnimation
            className="bg-transparent w-full border-r p-0 h-[18px] border-grey"
          >
            <NextImage
              src={IconBack}
              alt="Back"
              width={25}
              height={25}
              className="hover:text-lightRed"
            />
          </Button>
          <Button
            isIconOnly
            onPress={handleForward}
            radius="none"
            disableAnimation
            className="bg-transparent w-full border-l p-0 h-[18px] border-grey"
          >
            <NextImage
              src={IconForward}
              alt="Forward"
              width={25}
              height={25}
              className="hover:text-lightRed"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
