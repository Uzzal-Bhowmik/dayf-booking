"use client";

import Image from "next/image";
import loginBanner from "@/assets/images/auth/image1.webp";
import loginBanner2 from "@/assets/images/auth/image2.webp";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function ImageSlider() {
  return (
    <Splide
      aria-label="Images of Hotel, Apartments and other properties listed in DAYF Booking"
      options={{
        height: "60vh",
        speed: 1200,
        rewind: true,
        easing: "ease",
        pagination: false,
        arrows: false,
        autoplay: true,
        type: "fade",
        interval: 3500,
        drag: true,
      }}
    >
      <SplideSlide>
        <Image
          src={loginBanner}
          alt="Login Banner"
          width={2000}
          height={2000}
          className="h-full w-full rounded-l-xl object-cover"
          placeholder="blur"
        />
      </SplideSlide>

      <SplideSlide>
        <Image
          src={loginBanner2}
          alt="Login Banner"
          width={2000}
          height={2000}
          className="h-full w-full rounded-l-xl object-cover"
        />
      </SplideSlide>
    </Splide>
  );
}
