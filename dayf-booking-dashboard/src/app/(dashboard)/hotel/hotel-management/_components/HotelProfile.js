"use client";

import { Bookmark } from "lucide-react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "antd";
import hotelImg1 from "@/assets/images/dynamic-hotel/sheraton/restaurant-la-terrasse.jpg";
import hotelImg2 from "@/assets/images/dynamic-hotel/sheraton/hotel-exterior-entrance.jpg";
import hotelImg3 from "@/assets/images/dynamic-hotel/sheraton/restaurant-nautilus (1).jpg";
import hotelImg4 from "@/assets/images/dynamic-hotel/sheraton/restaurant-nautilus.jpg";
import hotelImg5 from "@/assets/images/dynamic-hotel/sheraton/hotel-view.jpg";
import hotelImg6 from "@/assets/images/dynamic-hotel/sheraton/wine-shop.jpg";
import hotelImg7 from "@/assets/images/dynamic-hotel/sheraton/link-sheraton.jpg";
import hotelImg8 from "@/assets/images/dynamic-hotel/sheraton/indoor-pool.jpg";
import hotelImg9 from "@/assets/images/dynamic-hotel/sheraton/la-brasserie.jpg";
import hotelImg10 from "@/assets/images/dynamic-hotel/sheraton/salle-uranus.jpg";
import hotelImg11 from "@/assets/images/dynamic-hotel/sheraton/lobby-cafe.jpg";

import { Pencil } from "lucide-react";
import { Tooltip } from "antd";
import { Trash2 } from "lucide-react";
import { Flex } from "antd";
import { Info } from "lucide-react";
import EditHotelProfileModal from "./EditHotelProfileModal";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import CustomConfirm from "@/components/CustomConfirm/CustomConfirm";
import AddHotelProfileModal from "./AddHotelProfileModal";
import { Map } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { Eye } from "lucide-react";
import ShowHotelProfileModal from "./ShowHotelProfileModal";
import { Tag } from "antd";
import { PREDEFINED_HOTEL_FEATURES } from "@/app/constants/hotels/hotel.constants";

const hotelProfile = {
  name: "Sheraton Club des Pins Resort",
  shortDescription:
    "Spacious, modern rooms with panoramic views of the Mediterranean Sea.",
  description:
    "<article>\r\n  \r\n  <p>Located in Dhaka, 1.1 miles from Uttara University, Sheraton Club des Pins Resort provides accommodations with a fitness center, private parking, a shared lounge and a terrace. This 3-star hotel offers an ATM and babysitting service. The property has a 24-hour front desk, airport transportation, room service and free WiFi.</p>\r\n\r\n<p>At the hotel you'll find a restaurant serving Chinese, Indian and Italian cuisine. Vegetarian and halal options can also be requested.</p>\r\n\r\n<p>IUBAT is 1.8 miles from Sheraton Club des Pins Resort, while Dhaka Airport Train Station is 2.7 miles away. Hazrat Shahjalal International Airport is 4.3 miles from the property.</p>\r\n\r\n<p>Solo travelers in particular like the location – they rated it 8.0 for a one-person stay.</p>\r\n</article>",

  images: [
    { id: 0, url: hotelImg1 },
    { id: 1, url: hotelImg2 },
    { id: 2, url: hotelImg3 },
    { id: 3, url: hotelImg4 },
    { id: 4, url: hotelImg5 },
    { id: 5, url: hotelImg6 },
    { id: 6, url: hotelImg7 },
    { id: 7, url: hotelImg8 },
    { id: 8, url: hotelImg9 },
    { id: 9, url: hotelImg10 },
    { id: 10, url: hotelImg11 },
  ],

  propertyHighlights: [
    { title: "Hotel", icon: "ri:hotel-line" },
    { title: "1200 sq ft", icon: "mi:expand" },
  ],

  features: [
    {
      title: "WiFi",
      icon: "hugeicons:wifi-01",
    },
    {
      title: "Swimming Pool",
      icon: "ic:sharp-pool",
    },
    {
      title: "Gym",
      icon: "gg:gym",
    },
    {
      title: "Restaurant",
      icon: "material-symbols:restaurant-rounded",
    },
    {
      title: "Room Service",
      icon: "guidance:cleaning-room",
    },
    {
      title: "Private Parking",
      icon: "mingcute:parking-fill",
    },
    {
      title: "Non-Smoking Rooms",
      icon: "ic:round-smoking-rooms",
    },
  ],
  rating: 4.8,
  reviews: 1000,
  location: "Algiers, Algeria",
  extraFeatures: [...PREDEFINED_HOTEL_FEATURES],
};

export default function HotelProfile() {
  const [showHotelProfileModal, setShowHotelProfile] = useState(false);
  const [showAddHotelProfileModal, setShowAddHotelProfile] = useState(false);
  const [showEditHotelProfileModal, setShowEditHotelProfile] = useState(false);

  return (
    <section>
      <Flex align="center" justify="space-between">
        <h2 className="mb-5 text-2xl font-semibold">Hotel Management</h2>

        <Button
          type="primary"
          variant="filled"
          shape="round"
          size="large"
          onClick={() => setShowAddHotelProfile(true)}
          icon={<PlusCircle size={20} />}
        >
          Add Hotel Profile
        </Button>
      </Flex>

      {/* Hotel Profile Card */}
      <div className="relative w-1/3 rounded-3xl border border-gray-300 p-3 shadow">
        <Splide
          aria-label="Hotel Images"
          options={{
            height: "270px",
            speed: 600,
            rewind: true,
            easing: "ease",
            pagination: true,
            arrows: false,
            autoplay: true,
            type: "slide",
            interval: 4000,
            gap: "1rem",
          }}
        >
          {hotelProfile.images?.map((image, idx) => (
            <SplideSlide key={idx} className="overflow-hidden rounded-xl">
              <Image
                src={image.url}
                alt={`Photo of the ${hotelProfile.name} hotel.`}
                height={900}
                width={900}
                placeholder="blur"
                className="h-[270px] w-full overflow-hidden rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              />
            </SplideSlide>
          ))}
        </Splide>

        <section className="mt-3 px-1">
          <Flex align="center" justify="space-between">
            <h3 className="text-2xl font-semibold leading-tight text-[#252525]">
              {hotelProfile.name}
            </h3>

            <Tooltip
              placement="top"
              title="This is how customers see this property on the website/app"
            >
              <Button
                variant="filled"
                icon={<Info size={20} />}
                style={{
                  backgroundColor: "rgba(148, 237, 255, 0.2)",
                  color: "#00caf2",
                }}
                className="!rounded-full !border-none !shadow-none"
              />
            </Tooltip>
          </Flex>

          <p className="mb-4 mt-2 text-[#626262]">
            {hotelProfile.shortDescription}
          </p>

          <Flex
            align="center"
            justify="start"
            gap={5}
            className="text-gray-600"
          >
            <MapPinIcon size={18} />
            <p className="text-base">{hotelProfile.location}</p>
          </Flex>
        </section>

        {/* ------------------- Floating Badges ------------------------- */}

        {/* Rating */}
        <Tag
          color="green"
          className="!absolute !left-4 !top-4 !flex !items-center !justify-start !gap-x-1 !py-1"
        >
          <Star className="size-4 fill-[#ffda9ed8] stroke-[#FFDA9E]" />

          <p>
            {hotelProfile.rating}{" "}
            <span className="ml-0.5 text-xs">({hotelProfile.reviews})</span>
          </p>
        </Tag>

        {/* Functionality Buttons */}
        <Flex
          align="center"
          justify="start"
          gap={6}
          className="absolute right-5 top-5"
        >
          <Tooltip title="View Profile">
            <Button
              color="primary"
              variant="filled"
              icon={<Eye size={20} />}
              className="!rounded-full"
              onClick={() => setShowHotelProfile(true)}
            />
          </Tooltip>

          <Tooltip placement="top" title="Edit Profile">
            <Button
              color="primary"
              variant="filled"
              icon={<Pencil size={20} />}
              className="!rounded-full"
              onClick={() => setShowEditHotelProfile(true)}
            />
          </Tooltip>

          <CustomConfirm
            title="Are you sure?"
            description="This hotel profile will be permanently deleted!"
            onConfirm={() => alert("Wait a min...")}
          >
            <Tooltip placement="top" title="Delete Profile">
              <Button
                color="danger"
                variant="filled"
                icon={<Trash2 size={20} />}
                className="!rounded-full"
              />
            </Tooltip>
          </CustomConfirm>
        </Flex>

        {/* Profile Modals */}
        <ShowHotelProfileModal
          open={showHotelProfileModal}
          setOpen={setShowHotelProfile}
          hotelProfile={hotelProfile}
        />
        <AddHotelProfileModal
          open={showAddHotelProfileModal}
          setOpen={setShowAddHotelProfile}
        />

        <EditHotelProfileModal
          open={showEditHotelProfileModal}
          setOpen={setShowEditHotelProfile}
        />
      </div>
    </section>
  );
}
