"use client";

import { PREDEFINED_HOTEL_FEATURES } from "@/app/constants/hotels/hotel.constants";
import FormWrapper from "@/components/Form/FormWrapper";
import UInput from "@/components/Form/UInput";
import UTextArea from "@/components/Form/UTextArea";
import UTextEditor from "@/components/Form/UTextEditor";
import UUpload from "@/components/Form/UUpload";
import { Select } from "antd";
import { Divider } from "antd";
import { Checkbox } from "antd";
import { Button, Modal } from "antd";
import { Map } from "lucide-react";
import { useState } from "react";

const CheckboxGroup = Checkbox.Group;

export default function EditHotelProfileModal({ open, setOpen }) {
  // Pre-defined feature list for hotel
  const [checkedPredefinedFeatureList, setCheckedPredefinedFeatureList] =
    useState([]);
  const checkAll =
    PREDEFINED_HOTEL_FEATURES.length === checkedPredefinedFeatureList.length;
  const indeterminate =
    checkedPredefinedFeatureList.length > 0 &&
    checkedPredefinedFeatureList.length < PREDEFINED_HOTEL_FEATURES.length;

  const [otherFeatures, setOtherFeatures] = useState([]);
  const [customerChoices, setCustomerChoices] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
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
      width={"55%"}
      title="Edit Hotel Profile"
    >
      <FormWrapper onSubmit={onSubmit}>
        <UUpload
          name="imageGallery"
          label="Profile Image Gallery"
          uploadTitle="hotel images"
        />

        <UInput
          name="title"
          label="Hotel Name"
          required={true}
          placeholder="Enter hotel name"
        />
        <UTextArea
          name="shortDescription"
          label="Short Description"
          required={true}
          placeholder="Enter short description of the hotel"
        />

        <UTextEditor
          name="Description"
          label="Long Description"
          placeholder="Write about this property in details"
          required={true}
        />

        <UInput
          name="location"
          label="Location/Address"
          placeholder="Enter location of the hotel"
          suffix={<Map className="size-4 text-gray-500" />}
          required
        />

        <Divider
          variant="dashed"
          className="border !border-gray-500 !text-gray-500"
        >
          Hotel Features
        </Divider>

        {/* Select Predefined Features */}
        <div>
          <Checkbox
            indeterminate={indeterminate}
            onChange={(e) =>
              setCheckedPredefinedFeatureList(
                e.target.checked ? PREDEFINED_HOTEL_FEATURES : [],
              )
            }
            checked={checkAll}
            className="!mb-3 font-semibold text-black"
          >
            Select All Predefined Features
          </Checkbox>

          <CheckboxGroup
            options={PREDEFINED_HOTEL_FEATURES}
            value={checkedPredefinedFeatureList}
            onChange={(list) => setCheckedPredefinedFeatureList(list)}
            style={{ columnGap: "12px", rowGap: "12px" }}
          />
        </div>

        <div className="mb-8 mt-5 space-y-1">
          <label htmlFor="other-features">Other Features (Optional)</label>
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            placeholder="Type and press enter to add other features"
            onChange={(value) => setOtherFeatures(value)}
            options={[]}
            open={false}
            className="h-9"
          />
        </div>

        <Button type="primary" className="w-full" size="large" classNames="">
          Submit
        </Button>
      </FormWrapper>
    </Modal>
  );
}
