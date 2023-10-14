"use client";

import React from "react";

import Image from "next/image";

const Nav = () => {
  return (
    <section className="max-container pt-10 m-auto">
      <nav className="w-full bg-[#1F1D2B] p-6 rounded-[20px] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src={"Logo.svg"} alt="logo" width={50} height={50} />
          <div className="flex flex-col itesm-center">
            <h1 className="text-white text-2xl font-bold">
              Coco's Bar and Kitchen
            </h1>
            <p className=" text-white">Bengaluru, Karnataka, India</p>
          </div>
        </div>
        <div></div>
      </nav>
    </section>
  );
};

export default Nav;
