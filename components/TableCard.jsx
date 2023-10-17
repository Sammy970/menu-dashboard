"use client";

import { Card, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

const TableCard = ({ title, id }) => {
  const router = useRouter();
  return (
    <Card
      isPressable
      className="w-[80%] m-auto max-sm:w-full"
      onClick={() => router.push(`/Table/${id}`)}
    >
      <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Tables</p>
        <h4 className="text-white font-medium text-xl">{title}</h4>
      </CardHeader>
      <div className="relative w-full">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full shadow-inner object-cover"
          src="/table.svg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>
      </div>
    </Card>
  );
};

export default TableCard;
