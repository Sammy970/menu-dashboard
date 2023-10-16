"use client";

import React from "react";
import { Skeleton } from "@nextui-org/react";

const Loading = () => {
  return (
    <section className="flex items-center justify-start">
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex bg-gray-300 rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Loading;
