"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <section className="bg-[#1F1D2B] p-6 gap-10 w-full flex flex-col rounded-[20px] h-full justify-evenly">
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        Home
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push("/Table");
        }}
      >
        Table
      </Button>
      <Button>Hello</Button>
    </section>
  );
};

export default SideBar;
