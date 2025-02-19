"use client";

import { Icon } from "@iconify/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Image } from "antd";
import { Modal } from "antd";
import React from "react";

export default function RoomDetailsModal({ open, setOpen, room }) {
  const mainCarouselRef = React.createRef();

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
        <Image.PreviewGroup>
          <Splide options={imageSliderOptions} ref={mainCarouselRef}>
            {room.images.map((image, idx) => (
              <SplideSlide key={idx}>
                <Image
                  src={image.src}
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

      <section className="mt-8 space-y-8">
        <div>
          <h2 className="mb-2 font-quicksand text-2xl font-bold">
            {room.title}
          </h2>
          <p className="text-base text-gray-700">{room.description}</p>
        </div>

        {/* Room Size */}
        <section className="flex-center-start gap-x-10">
          <div>
            <h4 className="mb-2 text-base font-semibold">Room Size</h4>
            <div className="flex-center-start gap-x-2 font-medium">
              <div className="rounded-lg bg-primary p-1 text-white">
                <Icon icon="eva:expand-outline" height={20} width={20} />
              </div>
              {room.size} sq. ft
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-base font-semibold">Availability</h4>
            <div className="flex-center-start gap-x-2 font-medium">
              <div className="rounded-lg bg-primary p-1 text-white">
                <Icon icon="lets-icons:3d-box" height={20} width={20} />
              </div>
              10 rooms left
            </div>
          </div>
        </section>

        {/* Room Features */}
        <section>
          <h4 className="mb-2 text-base font-semibold">Features</h4>

          <div className="flex-center-start flex-wrap gap-5">
            {room.features.map((feature) => (
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
          <h4 className="mb-2 text-base font-semibold">Other Facilities</h4>

          <div className="grid max-w-[80%] grid-cols-4 gap-5">
            {room.extraFeatures.map((feature, idx) => (
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
