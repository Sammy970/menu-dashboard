"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faHouse } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const router = useRouter();
  return (
    <section className="bg-[#1F1D2B] p-6 max-md:p-4 max-md:pt-6 max-lg:p-3 max-lg:pt-6 gap-10 w-full h-full flex flex-col rounded-[20px] ">
      <div className="flex flex-col justify-normal items-center gap-10">
        <Button
          isIconOnly
          className="p-4 m-auto text-white hover:text-[#252836]"
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <FontAwesomeIcon icon={faHouse} size="xl" />
        </Button>
        <Button
          isIconOnly
          className="m-auto text-white  hover:text-[#252836]"
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            router.push("/Table");
          }}
        >
          <FontAwesomeIcon icon={faChair} size="xl" />
        </Button>
        <Button
          isIconOnly
          className="m-auto text-white  hover:text-[#252836]"
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            router.push("/Table");
          }}
        >
          <FontAwesomeIcon icon={faChair} size="xl" />
        </Button>
        <Button
          isIconOnly
          className="m-auto text-white  hover:text-[#252836]"
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            router.push("/Table");
          }}
        >
          <FontAwesomeIcon icon={faChair} size="xl" />
        </Button>
      </div>
    </section>
  );
};

export default SideBar;
