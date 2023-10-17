const receivedOrders = [];
let ordersLength = 0;
let tableNumber = null;

let orders = [];

import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  // console.log(data);

  // console.log("Received order:", data);
  receivedOrders.push(data.cart);
  ordersLength = receivedOrders.length;
  tableNumber = data.tableNumber;

  const index = orders.findIndex(
    (order) => order.tableNumber === data.tableNumber
  );

  if (index !== -1) {
    const cartData = orders[index].cart;
    data.cart.map((item) => {
      const cartItem = cartData.find((c) => c.id === item.id);
      if (cartItem) {
        // console.log("ID is same");
        cartItem.quantity += item.quantity;
      } else {
        // console.log("ID not same");
        orders[index].cart.push(item);
      }
    });
  } else {
    orders.push({
      cart: data.cart.flat(),
      tableNumber: data.tableNumber,
    });
  }
  // console.log("Orders : ", orders);

  return NextResponse.json({ message: "Successfull" }, { status: 200 });
}

export async function GET(req, res) {
  return NextResponse.json(
    {
      receivedOrders: receivedOrders,
      len: ordersLength,
      tableNumber: tableNumber,
      allOrders: orders,
    },
    { status: 200 }
  );
}
