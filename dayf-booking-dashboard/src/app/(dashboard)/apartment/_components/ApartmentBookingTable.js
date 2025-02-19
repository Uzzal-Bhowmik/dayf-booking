"use client";

import { Flex } from "antd";
import { Tag } from "antd";
import { Table } from "antd";
import { Filter } from "lucide-react";
import { Input } from "antd";
const { Search } = Input;

export default function ApartmentBookingTable({
  headingTitle = "Recent Bookings",
  dataLength = 10,
}) {
  // =============== Table columns ===============
  const columns = [
    {
      title: "Booking Id",
      dataIndex: "id",
      render: (value) => `#${value}`,
    },
    {
      title: "Guest Name",
      dataIndex: "guest",
    },

    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Check In",
      dataIndex: "checkIn",
    },
    {
      title: "Check Out",
      dataIndex: "checkOut",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",

      filters: [
        {
          text: "Paid",
          value: "Paid",
        },
        {
          text: "Pending",
          value: "Pending",
        },
      ],
      filterIcon: () => (
        <Filter
          size={18}
          color="#fff"
          className="flex items-start justify-start"
        />
      ),
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (value) => (
        <Tag color={value === "Paid" ? "green" : "red"} className="!text-sm">
          {value}
        </Tag>
      ),
    },
  ];

  // Dummy Data
  const data = Array.from({ length: dataLength }).map((_, inx) => ({
    id: "HJ472839",
    guest: "Soumaya",
    duration: "2 Nights",
    checkIn: "12 Oct 24, 11:10 PM",
    checkOut: "15 Oct 24, 11:10 PM",
    paymentStatus: inx % 2 === 0 ? "Paid" : "Pending",
  }));

  return (
    <div className="rounded-xl bg-white p-5 pb-0">
      <Flex justify="between" align="center">
        <h4 className="flex-1 text-2xl font-semibold">{headingTitle}</h4>

        <Search
          placeholder="Search Booking..."
          onSearch={(value) => console.log(value)}
          size="large"
          style={{
            width: 300,
          }}
          allowClear
        />
      </Flex>

      <div className="mt-5">
        <Table
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={data}
          scroll={{ x: "100%" }}
          className="notranslate"
          pagination={{
            pageSize: 15,
          }}
        ></Table>
      </div>
    </div>
  );
}
