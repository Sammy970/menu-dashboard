import Nav from "@/components/Nav";
import React from "react";
import SideBar from "@/components/SideBar";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen w-full">
      <Nav />
      <section className="max-container mt-10">
        <main className="w-full flex flex-1 gap-10 items-start justify-normal h-screen">
          <section className="w-[15%]">
            <SideBar />
          </section>
          <section className="w-[85%]">{children}</section>
        </main>
      </section>
    </main>
  );
};

export default layout;
