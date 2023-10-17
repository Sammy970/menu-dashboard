import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const MenuCard = ({ name, quantity, price }) => {
  return (
    <Card className="w-full">
      <CardBody className="p-3 gap-3">
        <div className="flex flex-col">
          <h1 className="text-md text-black/80">{name}</h1>
          <div className="flex w-full items-center justify-center gap-2">
            <p className=" w-full text-small text-default-600">{price} INR</p>
            <h1 className="w-full text-right text-md">Qty: {quantity}</h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MenuCard;
