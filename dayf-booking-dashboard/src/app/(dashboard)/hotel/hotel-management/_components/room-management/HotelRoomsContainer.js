"use client";

import CustomConfirm from "@/components/CustomConfirm/CustomConfirm";
import { Icon } from "@iconify/react";
import { Flex } from "antd";
import { Tooltip } from "antd";
import { Button } from "antd";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import AddRoomModal from "./AddRoomModal";
import RoomDetailsModal from "./RoomDetailsModal";
import roomImg1 from "@/assets/images/hotels/5.jpg";
import roomImg2 from "@/assets/images/hotels/6.jpg";
import roomImg3 from "@/assets/images/hotels/7.jpg";
import roomImg4 from "@/assets/images/hotels/8.jpg";
import roomImg5 from "@/assets/images/hotels/9.jpg";
import { PREDEFINED_HOTEL_FEATURES } from "@/app/constants/hotels/hotel.constants";

const AVAILABILITY_TABLE_HEADERS = [
  "Room type",
  "Guests Allowed",
  "Price Per Night",
  "Availability & choices",
  "Action",
];

const rooms = [
  {
    id: "twin-deluxe-room",
    title: "Twin Deluxe Room",
    description:
      "Providing free toiletries, this twin room includes a private bathroom with a walk-in shower and slippers. The air-conditioned twin room provides a flat-screen TV with cable channels, a private entrance, soundproof walls, a seating area as well as city views. The unit offers 2 beds.",
    features: [
      {
        title: "2 Single Beds",
        icon: "material-symbols:single-bed",
      },
      {
        title: "Air Conditioning",
        icon: "material-symbols:ac-unit-rounded",
      },
      {
        title: "WiFi",
        icon: "hugeicons:wifi-01",
      },
      {
        title: "TV",
        icon: "material-symbols:tv-rounded",
      },
    ],
    extraFeatures: [...PREDEFINED_HOTEL_FEATURES],
    size: 1200,

    guests: 4,
    price_per_night: "999",
    choices: [
      "Breakfast Included",
      "Non-refundable",
      "Online/Offline Cash Received",
    ],
    stock: 3,
    costPerRoom: [
      {
        quantity: 1,
        price: 999,
      },
      {
        quantity: 2,
        price: 1999,
      },
    ],

    images: [roomImg1, roomImg2, roomImg3, roomImg4, roomImg5],
  },
];

export default function HotelRoomsContainer() {
  const [showAddRoomModal, setShowAddRoomModal] = useState(false);
  const [showRoomDetailsModal, setShowRoomDetailsModal] = useState(false);

  // Room table related states
  const [collapseRoomFeatures, setCollapseRoomFeatures] = useState(true);
  return (
    <div>
      <Flex align="baseline" justify="space-between">
        <h2 className="text-2xl font-semibold">Room Management</h2>

        <Button
          type="primary"
          variant="filled"
          shape="round"
          size="large"
          onClick={() => setShowAddRoomModal(true)}
          icon={<PlusCircle size={20} />}
        >
          Add Room
        </Button>
      </Flex>

      {/* Rooms Details */}
      <table className="mt-5 w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            {AVAILABILITY_TABLE_HEADERS.map((header) => (
              <th key={header} className="p-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="max-w-48 p-4">
                <div className="space-y-3">
                  <h5
                    role="button"
                    className="text-base font-medium text-primary hover:underline"
                  >
                    {room.title}
                  </h5>

                  <div className="flex flex-wrap items-center gap-4">
                    {room.features
                      ?.slice(
                        0,
                        collapseRoomFeatures ? 4 : room.features.length,
                      )
                      .map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Icon icon={feature.icon} height="18" width="18" />
                          {feature.title}
                        </div>
                      ))}

                    {room.features?.length > 4 && (
                      <button
                        className="text-sm text-primary hover:underline"
                        onClick={() =>
                          setCollapseRoomFeatures(!collapseRoomFeatures)
                        }
                      >
                        {collapseRoomFeatures ? "...show more" : "show less"}
                      </button>
                    )}
                  </div>
                </div>
              </td>

              {/* Guests */}
              <td className="flex-center-start flex-wrap gap-2 p-4">
                <Icon icon="lsicon:user-filled" height="22" width="22" />

                <p>x {room.guests}</p>
              </td>

              {/* Price per night */}
              <td className="p-4">
                <div className="font-medium">${room.price_per_night}</div>
              </td>

              {/* Your choices */}
              <td className="space-y-1 p-4">
                {room.choices.map((choice, index) => (
                  <div key={index} className="flex-center-start gap-2">
                    <div className="size-2 rounded-full bg-green-500" />
                    <span>{choice}</span>
                  </div>
                ))}

                <div className="flex-center-start gap-2 text-red-500">
                  <div className="size-2 rounded-full bg-red-500" />
                  <span>Only {room.stock} rooms left!</span>
                </div>
              </td>

              <td className="max-w-28 space-x-4 p-4">
                <Tooltip title="View Room Details">
                  <Button
                    color="primary"
                    variant="filled"
                    className="!rounded-full"
                    icon={<Icon icon="fa-regular:eye" height={18} width={18} />}
                    aria-label="View Room Details"
                    onClick={() => setShowRoomDetailsModal(true)}
                  />
                </Tooltip>

                <Tooltip title="Edit Room Details">
                  <Button
                    color="default"
                    variant="filled"
                    className="!rounded-full"
                    icon={
                      <Icon icon="cuida:edit-outline" height={18} width={18} />
                    }
                    aria-label="Edit Room Details"
                  />
                </Tooltip>

                <CustomConfirm
                  title="Are you sure?"
                  description="This room will be permanently deleted."
                >
                  <Tooltip title="Delete Room">
                    <Button
                      color="danger"
                      variant="filled"
                      className="!rounded-full"
                      icon={
                        <Icon
                          icon="cuida:trash-outline"
                          height={18}
                          width={18}
                        />
                      }
                      aria-label="Delete Room"
                    />
                  </Tooltip>
                </CustomConfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Room Modals */}
      <AddRoomModal open={showAddRoomModal} setOpen={setShowAddRoomModal} />
      <RoomDetailsModal
        open={showRoomDetailsModal}
        setOpen={setShowRoomDetailsModal}
        room={rooms[0]}
      />
    </div>
  );
}
