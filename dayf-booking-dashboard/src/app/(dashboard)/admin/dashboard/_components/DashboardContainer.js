"use client";

import { DatePicker } from "antd";
import EarningChart from "./EarningChart";
import RecentUserTable from "./RecentUserTable";
import UsersChart from "./UsersChart";
import { Icon } from "@iconify/react";
import { Tag } from "antd";
import { Flex } from "antd";
import AverageBookingChart from "./AverageBookingChart";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import HighlightedProperty from "./HighlightedProperty";

// Dummy data
const userStats = [
  {
    key: "users",
    label: "Total Users",
    value: 189,
    growth: { type: "up", value: "4.5%" },
  },
  {
    key: "hotel",
    label: "Total Hotels",
    value: 145,
    growth: { type: "up", value: "2.5%" },
  },
  {
    key: "apartments",
    label: "Total Apartments",
    value: 200,
    growth: { type: "down", value: "2%" },
  },
];

export default function DashboardContainer() {
  return (
    <div className="space-y-10">
      {/* User Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {userStats?.map((stat) => (
          <Flex
            key={stat.key}
            align="center"
            justify="start"
            gap={16}
            className="bg-white rounded-xl p-5"
          >
            <div className="size-20 aspect-square rounded-full flex-center bg-primary text-white">
              <Icon icon="clarity:users-line" height={42} width={42} />
            </div>

            <div className="space-y-2">
              <p className="text-base text-[#33363F] font-medium">
                {stat.label}
              </p>

              <h2 className="font-bold text-3xl !mt-1">{stat.value}</h2>

              <div>
                <Tag
                  color={stat.growth.type === "up" ? "green" : "red"}
                  className="font-bold "
                >
                  <Flex gap={4}>
                    <Icon
                      icon={
                        stat.growth.type === "up"
                          ? "iconamoon:trend-up-light"
                          : "iconamoon:trend-down-light"
                      }
                      height={16}
                      width={16}
                    />
                    <span>{stat.growth.value}%</span>
                  </Flex>
                </Tag>

                <span>From the last month</span>
              </div>
            </div>
          </Flex>
        ))}
      </section>

      {/* Charts */}
      <section className="flex-center-between xl:flex-row flex-col gap-10">
        <UsersChart />

        <EarningChart />
      </section>

      {/* Chart & Slider */}
      <section className="flex-stretch-between xl:flex-row flex-col gap-10">
        <AverageBookingChart />
        <HighlightedProperty />
      </section>

      {/* Recent Users Table */}
      <section>
        <RecentUserTable />
      </section>
    </div>
  );
}
