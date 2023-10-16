import Nav from "@/components/Nav";
import React from "react";
import SideBar from "@/components/SideBar";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen pb-10 w-full flex flex-col gap-5">
      <Nav />
      <section className="max-container w-full flex flex-1 gap-10 md:gap-6">
        <section className="w-[10%] max-md:w-[16%] max-sm:hidden">
          <SideBar />
        </section>
        <section className="w-[90%] max-md:w-[80%] max-sm:w-full">
          {children}
        </section>
      </section>
    </main>
  );
};

export default layout;
