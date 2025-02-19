"use client";

import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { Icon } from "@iconify/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Flex } from "antd";
import { Image } from "antd";
import { Modal } from "antd";
import { Star } from "lucide-react";
import React from "react";

export default function ShowApartmentModal({ open, setOpen, apartment }) {
  // Image carousel options
  const imageSliderOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: true,
    arrows: true,
    height: "25rem",
    cover: true,
    autoplay: true,
    speed: 800,
    easing: "ease",
  };

  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
      width="45%"
    >
      {/* Image Carousel */}
      <section className="space-y-2">
        <div className="mb-5 space-y-1">
          <Flex align="center" gap={15}>
            <h2 className="font-quicksand text-2xl font-bold">
              {apartment.name}
            </h2>
            <Flex align="center" gap={5}>
              <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
              <span className="pt-0.5 text-base font-semibold">
                {apartment.rating}
              </span>
            </Flex>
          </Flex>

          <p>{apartment.shortDescription}</p>
        </div>

        <Image.PreviewGroup>
          <Splide options={imageSliderOptions}>
            {apartment.images.map((image, idx) => (
              <SplideSlide key={idx}>
                <Image
                  src={image.url.src}
                  alt="Hotel Image"
                  width={"100%"}
                  height={"25rem"}
                  className="rounded-t-xl !object-cover !object-center"
                />
              </SplideSlide>
            ))}
          </Splide>
        </Image.PreviewGroup>
      </section>

      <section className="mt-5 space-y-8">
        <ContentWrapper
          className="text-base text-gray-700"
          content={apartment.description}
        />

        {/* Location */}
        <section>
          <h4 className="mb-3 text-base font-semibold">Location</h4>
          <div className="flex-center-start gap-x-2 font-medium">
            <div className="rounded-lg bg-primary p-1 text-white">
              <Icon icon="lucide:map-pin" height={18} width={18} />
            </div>
            <span>Algeirs, Algeira</span>
          </div>
        </section>

        {/* Room Features */}
        <section>
          <h4 className="mb-4 text-base font-semibold">Features</h4>

          <div className="flex-center-start flex-wrap gap-5">
            {apartment.features.map((feature) => (
              <div
                key={feature.title}
                className="flex-center-start gap-x-2 font-medium"
              >
                <div className="rounded-lg bg-primary p-1 text-white">
                  <Icon icon={feature.icon} height={20} width={20} />
                </div>{" "}
                {feature.title}
              </div>
            ))}
          </div>
        </section>

        {/* Other Facilities */}
        <section>
          <h4 className="mb-4 text-base font-semibold">Other Facilities</h4>

          <div className="grid max-w-[80%] grid-cols-4 gap-5">
            {apartment.extraFeatures.map((feature, idx) => (
              <p
                key={idx}
                className="flex-center-start gap-x-2 text-left font-medium"
              >
                <Icon icon="ic:sharp-check" />
                <span>{feature}</span>
              </p>
            ))}
          </div>
        </section>
      </section>
    </Modal>
  );
}
