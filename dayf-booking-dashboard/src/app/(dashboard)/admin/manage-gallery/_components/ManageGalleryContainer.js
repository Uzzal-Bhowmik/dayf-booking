"use client";

import heroImg1 from "@/assets/images/gallery/hero-1.png";
import heroImg2 from "@/assets/images/gallery/hero-2.png";
import heroImg3 from "@/assets/images/gallery/hero-3.png";
import heroImg4 from "@/assets/images/gallery/hero-4.png";
import whyChooseImg1 from "@/assets/images/gallery/why-choose-us/why-choose-us-lg.webp";
import whyChooseImg2 from "@/assets/images/gallery/why-choose-us/why-choose-us-sm.webp";
import { Tooltip } from "antd";
import { Flex } from "antd";
import { Button, Image } from "antd";
import { Trash } from "lucide-react";
import { Edit } from "lucide-react";
import { Upload } from "lucide-react";
import { useState } from "react";
import AddImageToSection from "./AddImageToSection";
const { PreviewGroup } = Image;

// dummy data
const heroImages = [heroImg1, heroImg4, heroImg2, heroImg3];
const whyChooseImages = [whyChooseImg1, whyChooseImg2];

export default function ManageGalleryContainer() {
  const [selectedSection, setSelectedSection] = useState("top");
  const [showAddImageModal, setShowAddImageModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* ----------------- Top Section ---------------- */}
      <section>
        <Flex align="center" justify="space-between" className="mb-5">
          <h2 className="text-3xl font-semibold text-slate-800">Top Section</h2>

          <Button
            type="primary"
            htmlType="button"
            size="large"
            icon={<Upload size={20} />}
            className="!rounded-full"
            onClick={() => {
              setShowAddImageModal(true);
              setSelectedSection("top");
            }}
          >
            Upload
          </Button>
        </Flex>

        <div className="flex-stretch-start flex-wrap gap-6">
          <PreviewGroup>
            {heroImages?.map((image, idx) => (
              <div key={idx} className="relative">
                <Image
                  src={image?.src}
                  alt={"Hero Image " + (idx + 1)}
                  className="rounded-xl object-cover object-center"
                />

                <Tooltip title="Delete">
                  <Button
                    icon={<Trash size={16} />}
                    color="danger"
                    variant="filled"
                    shape="circle"
                    className="!absolute right-3 top-3"
                  >
                    <div className="sr-only">Delete</div>
                  </Button>
                </Tooltip>
              </div>
            ))}
          </PreviewGroup>
        </div>
      </section>

      {/* ----------------- Why Choose Us Section ---------------- */}
      <section>
        <Flex align="center" justify="space-between" className="mb-5">
          <h2 className="text-3xl font-semibold text-slate-800">
            Why Choose Section
          </h2>

          <Button
            type="primary"
            htmlType="button"
            size="large"
            icon={<Upload size={20} />}
            className="!rounded-full"
            onClick={() => {
              setShowAddImageModal(true);
              setSelectedSection("top");
            }}
          >
            Upload
          </Button>
        </Flex>

        <div className="flex-stretch-start flex-wrap gap-6">
          <PreviewGroup>
            {whyChooseImages?.map((image, idx) => (
              <div key={idx} className="relative">
                <Image
                  src={image?.src}
                  alt={"Hero Image " + (idx + 1)}
                  className="!size-80 !rounded-xl !object-cover !object-center"
                />

                <Tooltip title="Delete">
                  <Button
                    icon={<Trash size={16} />}
                    color="danger"
                    variant="filled"
                    shape="circle"
                    className="!absolute right-3 top-3"
                  >
                    <div className="sr-only">Delete</div>
                  </Button>
                </Tooltip>
              </div>
            ))}
          </PreviewGroup>
        </div>
      </section>

      {/* Upload image modal */}
      <AddImageToSection
        open={showAddImageModal}
        setOpen={setShowAddImageModal}
        section={selectedSection}
      />
    </div>
  );
}
