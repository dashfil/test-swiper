"use client";

import { FC, useEffect, useState } from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@heroui/react";
import NextImage from "next/image";
import IconBid from "public/bid.svg";

type Props = {
  item: { img: string; title: string; bid: number };
};

export const CardItem: FC<Props> = ({ item }) => {
  const time = Math.floor(Math.random() * (86400 - 3600) + 3600);
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(
      2,
      "0"
    )}m ${String(secs).padStart(2, "0")}s`;
  };
  return (
    <Card
      shadow="none"
      className="group
      w-[198px] lg:w-[281px] md:w-[199px]
      h-[284px] lg:h-[402px] md:h-[286px] 
      lg:ml-10 ml-7 
      bg-white 
      rounded-2xl 
      lg:p-3.5 p-2.5
      shadow-[38.82px_11.76px_58.81px_0px_rgba(199,199,199,0.6)]
      select-none"
    >
      <CardBody className="overflow-visible p-0">
        <div
          className="absolute bg-black/30 lg:top-3.5 lg:right-2 top-2.5 right-1.5 z-10 rounded-lg text-white lg:px-3.5 lg:py-2 px-2.5 py-1.5 lg:text-sm text-[10px] font-medium"
          suppressHydrationWarning
        >
          {formatTime(timeLeft)}
        </div>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 h-full  object-cover rounded-2xl lg:h-[242px] h-[180px]"
          src={item.img}
        />
      </CardBody>
      <CardFooter className=" flex flex-col items-start px-[8px] lg:pt-[18px] pt-3.5 pb-[10px] gap-2.5">
        <p className="font-semibold lg:text-xl text-base">{item.title}</p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className="lg:text-sm text-[10px] text-lightGrey">Current bid</p>
            <div className="font-medium flex gap-0.5 text-xs lg:text-base" suppressHydrationWarning>
              <NextImage src={IconBid} alt="Bid" width={0} height={0} className="lg:w-[21px] w-[14px]"/>
              {item.bid}
            </div>
          </div>
          <Button className="bg-black h-[36px] lg:h-[51px] text-white font-semibold lg:text-sm text-[10px] py-2.5 px-4 lg:py-4 lg:px-6 leading-normal">
            PLACE BID
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
