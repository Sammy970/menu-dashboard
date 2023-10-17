"use client";

import { faChair, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

import { useRouter } from "next/navigation";

const DropDown = () => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="text-white">
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="bordered"
        color="success"
        aria-label="Dropdown menu with icons"
      >
        <DropdownItem
          key="home"
          onClick={() => router.push("/")}
          startContent={<FontAwesomeIcon icon={faHouse} size="xl" />}
        >
          Home
        </DropdownItem>
        <DropdownItem
          key="table"
          onClick={() => router.push("/Table")}
          startContent={<FontAwesomeIcon icon={faChair} size="xl" />}
        >
          Table
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
