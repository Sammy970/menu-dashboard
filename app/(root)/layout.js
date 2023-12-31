"use client";

import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";

import { ToastContainer, toast } from "react-toastify";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "@/components/DropDown";

const layout = ({ children }) => {
  const [orderCount, setOrderCount] = useState(0);
  const [toastId, setToastId] = useState(null);
  const [tableNumber, setTableNumber] = useState(null);
  const [allOrders, setAllOrders] = useState(null);

  const notify = () => {
    if (toastId) {
      toast.dismiss(toastId);
    }
    setToastId(toast(`New order received! from Table Number ${tableNumber}`));
  };

  const check = async () => {
    const response = await fetch("/api/order");
    const data = await response.json();

    // console.log(data);

    setOrderCount(data.len);
    setTableNumber(data.tableNumber);
    setAllOrders(data.allOrders);
    console.log(data.allOrders);
  };

  useEffect(() => {
    if (orderCount > 0) {
      notify();
    }
  }, [orderCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      check();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pb-10 w-full flex flex-col gap-5">
      <Nav />
      <section className="max-container w-full flex flex-1 max-sm:flex-col gap-10 md:gap-6">
        <section className="w-[10%] max-md:w-[16%] max-sm:hidden">
          <SideBar />
        </section>
        <section className="w-full text-center max-sm:block hidden">
          <DropDown />
        </section>
        <section className="w-[100%] max-md:w-[80%] max-sm:w-full">
          {children}
        </section>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </main>
  );
};

export default layout;
