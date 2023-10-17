"use client";

import MenuCard from "@/components/MenuCard";
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const [orderData, setOrderData] = useState(null);

  const getData = async () => {
    const response = await fetch("/api/order");
    const data = await response.json();
    // console.log(data);
    setOrderData(
      data.allOrders?.find((data) => data.tableNumber === params.tableid)
    );
  };

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 5000);
  }, []);

  console.log(orderData);
  return (
    <div className="grid max-sm:grid-cols-2 w-full grid-cols-5 gap-2">
      {orderData?.cart?.map((item) => (
        <MenuCard
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default page;
