"use client";

import EarningsChart from "@/components/EarningsChart";
import { LanguageSwitcher } from "@/components/LangSwitcher/lang-switcher";
import { Icon } from "@iconify/react";
import { ConfigProvider } from "antd";
import { Tag } from "antd";
import { Flex } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import ApartmentBookingTable from "../../_components/ApartmentBookingTable";

function ApartmentDashboardContainer() {
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
      <section className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div className="space-y-3 rounded-xl bg-white p-4">
          <div className="flex-center-between">
            <h6 className="text-base font-medium text-[#33363F]">Check-In</h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20 !border-none !text-white"
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

        <div className="space-y-3 rounded-xl bg-white p-4">
          <div className="flex-center-between">
            <h6 className="text-base font-medium text-[#33363F]">Check-Out</h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20 !border-none !text-white"
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

        <div className="space-y-3 rounded-xl bg-white p-4">
          <div className="flex-center-between">
            <h6 className="text-base font-medium text-[#33363F]">
              Total Revenue
            </h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20 !border-none !text-white"
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
            <Tag color="green" className="font-bold">
              <Flex gap={4}>
                <Icon icon="iconamoon:trend-up-light" height={16} width={16} />
                <span>4.3%</span>
              </Flex>
            </Tag>

            <span>From the last month</span>
          </div>
        </div>

        <div className="space-y-3 rounded-xl bg-white p-4">
          <div className="flex-center-between">
            <h6 className="text-base font-medium text-[#33363F]">Total Cost</h6>
            <DatePicker
              picker="month"
              defaultValue={dayjs()}
              format="MMM"
              className="max-w-20 !border-none !bg-primary !text-white"
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
            <Tag color="red" className="font-bold">
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
        <ApartmentBookingTable />
      </section>
    </ConfigProvider>
  );
}

export default ApartmentDashboardContainer;
