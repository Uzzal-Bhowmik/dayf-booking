"use client";

import EarningsChart from "@/components/EarningsChart";
import { LanguageSwitcher } from "@/components/LangSwitcher/lang-switcher";
import { Icon } from "@iconify/react";
import { ConfigProvider } from "antd";
import { Tag } from "antd";
import { Flex } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import BookingTable from "./BookingTable";

function HotelDashboardContainer() {
  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            colorBgContainer: "var(--primary)",
            colorPrimary: "var(--primary)",
          },
        },
      }}
    >
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl p-4 space-y-3">
          <div className="flex-center-between">
            <h6 className="text-base text-[#33363F] font-medium">Check-In</h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20  !text-white !border-none"
              suffixIcon={
                <Icon
                  icon="lsicon:calendar-outline"
                  height={16}
                  width={16}
                  className="text-white/75"
                />
              }
            />
          </div>
          <h2 className="text-3xl font-bold">86</h2>
          <p className="text-sm text-black/75">
            Average Stay: <span className="font-bold">3 nights</span>
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 space-y-3">
          <div className="flex-center-between">
            <h6 className="text-base text-[#33363F] font-medium">Check-Out</h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20 !text-white !border-none"
              suffixIcon={
                <Icon
                  icon="lsicon:calendar-outline"
                  height={16}
                  width={16}
                  className="text-white/75"
                />
              }
            />
          </div>
          <h2 className="text-3xl font-bold">56</h2>
          <p className="text-sm text-black/75">
            Average Stay: <span className="font-bold">3 nights</span>
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 space-y-3">
          <div className="flex-center-between">
            <h6 className="text-base text-[#33363F] font-medium">
              Total Revenue
            </h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20 !text-white !border-none"
              suffixIcon={
                <Icon
                  icon="lsicon:calendar-outline"
                  height={16}
                  width={16}
                  className="text-white/75"
                />
              }
            />
          </div>
          <h2 className="text-3xl font-bold">$112,322</h2>

          <div>
            <Tag color="green" className="font-bold ">
              <Flex gap={4}>
                <Icon icon="iconamoon:trend-up-light" height={16} width={16} />
                <span>4.3%</span>
              </Flex>
            </Tag>

            <span>From the last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 space-y-3">
          <div className="flex-center-between">
            <h6 className="text-base text-[#33363F] font-medium">Total Cost</h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20 !bg-primary !text-white !border-none"
              suffixIcon={
                <Icon
                  icon="lsicon:calendar-outline"
                  height={16}
                  width={16}
                  className="text-white/75"
                />
              }
            />
          </div>
          <h2 className="text-3xl font-bold">$22,322</h2>

          <div>
            <Tag color="red" className="font-bold ">
              <Flex gap={4}>
                <Icon
                  icon="iconamoon:trend-down-light"
                  height={16}
                  width={16}
                />
                <span>2%</span>
              </Flex>
            </Tag>

            <span>From the last month</span>
          </div>
        </div>
      </section>

      {/* Earnings Chart */}
      <section className="my-8">
        <EarningsChart />
      </section>

      <section>
        <BookingTable />
      </section>
    </ConfigProvider>
  );
}

export default HotelDashboardContainer;
