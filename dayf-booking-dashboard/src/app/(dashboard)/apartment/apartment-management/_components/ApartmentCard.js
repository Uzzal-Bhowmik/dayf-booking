"use client";

import CustomConfirm from "@/components/CustomConfirm/CustomConfirm";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Tag } from "antd";
import { Button, Flex } from "antd";
import { Star } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { Eye } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { Info } from "lucide-react";
import Image from "next/image";
import apartmentImg from "@/assets/images/apartments/1.jpg";
import { PREDEFINED_HOTEL_FEATURES } from "@/app/constants/hotels/hotel.constants";
import { Tooltip } from "antd";
import { useState } from "react";
import EditApartmentModal from "./EditApartmentModal";
import ShowApartmentModal from "./ShowApartmentModal";

// Dummy Apartment Data
const apartment = {
  name: "3 Bedroom Apartment for Rent",
  shortDescription:
    "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
  description:
    "<header><h1>Discover Elegant Living in Bashundhara R-A</h1></header><section><p>Discover elegant living in this fully furnished <strong>2,000 sq ft apartment</strong> in Bashundhara R-A. Featuring <strong>3 spacious bedrooms</strong>, <strong>3 modern bathrooms</strong>, and balconies with wide windows, this apartment is designed to offer a bright and airy environment. The well-equipped kitchen, ample parking spaces, and elevators ensure convenience, while CCTV security, fire exits, and fire extinguishers provide peace of mind. With reliable electricity and backup, plus dedicated guard and maintenance staff, this residence is as secure as it is comfortable.</p></section><section><h2>Prime Location & Connectivity</h2><p>Bashundhara R-A boasts excellent connectivity and proximity to top amenities. It’s close to renowned educational institutions such as <strong>North South University</strong>, leading healthcare facilities like <strong>Evercare Hospital</strong>, and popular shopping centers like <strong>Jamuna Future Park</strong>. Ideal for those seeking a sophisticated lifestyle in a well-connected and vibrant neighborhood.</p></section>",

  images: Array.from({ length: 5 }).map((_, idx) => ({
    id: idx + 1,
    url: apartmentImg,
  })),

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
  reviews: "1,124",
  location: "Algiers, Algeria",
  extraFeatures: [...PREDEFINED_HOTEL_FEATURES],
};

export default function ApartmentCard() {
  const [showApartmentModal, setShowApartmentModal] = useState(false);
  const [showEditApartmentModal, setShowEditApartmentModal] = useState(false);

  return (
    <div className="relative rounded-3xl border border-gray-300 p-3 shadow">
      <Splide
        aria-label="Apartment Images"
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
        {apartment.images?.map((image, idx) => (
          <SplideSlide key={idx} className="overflow-hidden rounded-xl">
            <Image
              src={image.url}
              alt={`Photo of the ${apartment.name}.`}
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
            {apartment.name}
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

        <p className="mb-4 mt-2 text-[#626262]">{apartment.shortDescription}</p>

        <Flex align="center" justify="start" gap={5} className="text-gray-600">
          <MapPinIcon size={18} />
          <p className="text-base">{apartment.location}</p>
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
          {apartment.rating}{" "}
          <span className="ml-0.5 text-xs">({apartment.reviews})</span>
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
            onClick={() => setShowApartmentModal(true)}
          />
        </Tooltip>

        <Tooltip placement="top" title="Edit Profile">
          <Button
            color="primary"
            variant="filled"
            icon={<Pencil size={20} />}
            className="!rounded-full"
            onClick={() => setShowEditApartmentModal(true)}
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

      {/* Apartment Modals */}
      <EditApartmentModal
        open={showEditApartmentModal}
        setOpen={setShowEditApartmentModal}
      />

      <ShowApartmentModal
        open={showApartmentModal}
        setOpen={setShowApartmentModal}
        apartment={apartment}
      />
    </div>
  );
}
