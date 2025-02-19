"use client";

import { Flex } from "antd";
import { Tag } from "antd";
import { Table } from "antd";
import { Filter } from "lucide-react";
import { Input } from "antd";
const { Search } = Input;

export default function BookingTable({
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
      title: "Room Type",
      dataIndex: "room",
      render: (value) => {
        return value.type;
      },

      filters: [
        {
          text: "Twin Room",
          value: "Twin Room",
        },
        {
          text: "Deluxe Suite",
          value: "Deluxe Suite",
        },
      ],
      filterIcon: () => (
        <Filter
          size={18}
          color="#fff"
          className="flex justify-start items-start"
        />
      ),
      onFilter: (value, record) => record.room.type.indexOf(value) === 0,
    },
    {
      title: "Room Number",
      dataIndex: "room",
      render: (value) => <span className="notranslate">{value.number}</span>,
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
      title: "Status",
      dataIndex: "status",

      filters: [
        {
          text: "Confirmed",
          value: "Confirmed",
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
          className="flex justify-start items-start"
        />
      ),
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (value) => (
        <Tag color="green" className="!text-sm">
          {value}
        </Tag>
      ),
    },
  ];

  // Dummy Data
  const data = Array.from({ length: dataLength }).map((_, inx) => ({
    id: "HJ472839",
    guest: "Sarah Johnson",
    room: {
      type: "Deluxe Suite",
      number: "A-101",
    },
    duration: "3 Nights",
    checkIn: "12 Oct 24, 11:10 PM",
    checkOut: "15 Oct 24, 11:10 PM",
    status: "Confirmed",
  }));

  return (
    <div className="bg-white p-5 pb-0 rounded-xl">
      <Flex justify="between" align="center">
        <h4 className="text-2xl font-semibold flex-1">{headingTitle}</h4>

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
