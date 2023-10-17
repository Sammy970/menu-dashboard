import TableCard from "@/components/TableCard";
import React from "react";

const TABLE_DATA = [
  {
    id: 1,
    title: "Table 1",
  },
  {
    id: 2,
    title: "Table 2",
  },
  {
    id: 3,
    title: "Table 3",
  },
  {
    id: 4,
    title: "Table 4",
  },
  {
    id: 5,
    title: "Table 5",
  },
  {
    id: 6,
    title: "Table 6",
  },
];

const page = () => {
  return (
    <section className="text-white p-5 max-sm:p-2 grid grid-cols-4 max-sm:grid-cols-2 gap-10">
      {TABLE_DATA.map((table) => (
        <TableCard key={table.id} id={table.id} title={table.title} />
      ))}
    </section>
  );
};

export default page;
