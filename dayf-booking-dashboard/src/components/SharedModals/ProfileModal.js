"use client";

import { Modal } from "antd";
import userImage from "@/assets/images/user-avatar-lg.png";
import Image from "next/image";
import { Tag } from "antd";
import getTagColor from "@/utils/getTagColor";
import { Icon } from "@iconify/react";
import { Flex } from "antd";
import { Divider } from "antd";

export default function ProfileModal({ open, setOpen }) {
  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
    >
      <div className="flex flex-col items-center gap-4 rounded-lg bg-primary py-4">
        <Image
          src={userImage}
          alt="user image"
          height={2400}
          width={2400}
          className="aspect-square h-auto w-[30%] rounded-full object-cover object-center"
        />

        <h4 className="text-3xl font-bold text-white">Soumaya</h4>
      </div>

      <div className="px-12 py-8">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="text-black">
            <h5 className="font-bold">Name</h5>
            <p className="text-base">Soumaya</p>
          </div>
          <div className="text-black">
            <h5 className="font-bold">Email</h5>
            <p className="text-base">soumaya@gmail.com</p>
          </div>
          <div className="text-black">
            <h5 className="font-bold">Contact</h5>
            <p className="text-base">+234 813 123 4567</p>
          </div>
          <div className="text-black">
            <h5 className="font-bold">Account Type</h5>
            <p className="">
              <Tag
                color={getTagColor("Admin")}
                className="!mt-1 !font-semibold"
              >
                Admin
              </Tag>
            </p>
          </div>

          <div className="text-black">
            <h5 className="font-bold">Location</h5>
            <p className="text-base">Algeirs, Algeria</p>
          </div>

          <div className="text-black">
            <h5 className="font-bold">Identification</h5>

            <Flex align="center" justify="start" gap={4}>
              <Icon
                icon="mage:file-2-fill"
                width="26px"
                height="26px"
                className="mt-0.5 text-primary"
                role="button"
              />

              <Icon
                icon="mage:file-2-fill"
                width="26px"
                height="26px"
                className="mt-0.5 text-primary"
                role="button"
              />
            </Flex>
          </div>
        </div>

        {/* Booking Details if hotel/apartment */}
        <Divider>Booking Details</Divider>

        <div className="grid grid-cols-2 gap-7">
          <div className="text-black">
            <h5 className="font-bold">Completed</h5>

            <Flex align="center" gap={5}>
              <Icon icon="ic:baseline-plus-minus" width="22px" height="22px" />
              <p className="text-lg font-medium">53</p>
            </Flex>
          </div>
          <div className="text-black">
            <h5 className="font-bold">Running</h5>
            <p className="text-lg font-medium">12</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
