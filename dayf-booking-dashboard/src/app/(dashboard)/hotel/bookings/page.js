import React from "react";
import BookingTable from "../dashboard/_components/BookingTable";

export const metadata = {
  title: "Bookings",
  description: "Hotel bookings page",
};

export default function Bookings() {
  return <BookingTable headingTitle="All Bookings" dataLength={20} />;
}
