"use client";

import {
  PREDEFINED_CUSTOMER_CHOICES,
  PREDEFINED_HOTEL_FEATURES,
} from "@/app/constants/hotels/hotel.constants";
import FormWrapper from "@/components/Form/FormWrapper";
import UInput from "@/components/Form/UInput";
import UTextEditor from "@/components/Form/UTextEditor";
import { Button, Select } from "antd";
import { Divider } from "antd";
import { Modal } from "antd";
import { Checkbox } from "antd";
import { useState } from "react";

const CheckboxGroup = Checkbox.Group;

export default function AddRoomModal({ open, setOpen }) {
  // Pre-defined feature list for rooms
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
      title="Add Room"
      width="45%"
    >
      <FormWrapper onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-x-4">
          <UInput
            name="type"
            label="Room Type"
            placeholder="e.g. Twin Room, Double Room"
            required
          />
          <UInput
            type={"number"}
            name="price"
            label="Price Per Night"
            placeholder="Enter price for night"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <UInput
            type="number"
            name="guest"
            label="Guests Allowed"
            placeholder="Enter number of guest allowed"
            required
          />

          <UInput
            type="number"
            name="roomAvailable"
            label="Rooms Available"
            placeholder="Number of this room available"
            required
          />
        </div>

        <Divider dashed className="border !border-slate-500 !text-slate-500">
          Room Features
        </Divider>

        <div className="grid grid-cols-2 gap-x-4">
          <UInput
            name="space"
            label="Room Space (sq. ft)"
            placeholder="e.g. 1200, 1500"
            required
          />

          <UInput
            name="bed"
            label="Bed Details"
            placeholder="e.g. 2 Double Bed, 3 Single Bed etc."
            required
          />
        </div>

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

        <div className="mt-5 space-y-2">
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

        <div className="my-5 space-y-2">
          <label htmlFor="other-features" className="font-semibold">
            Customer&apos;s Choices
          </label>
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            placeholder="Type and press enter to add other features"
            onChange={(value) => setCustomerChoices(value)}
            options={PREDEFINED_CUSTOMER_CHOICES.map((choice) => ({
              label: choice,
              value: choice,
            }))}
            className="h-9"
          />
        </div>

        <UTextEditor
          name="description"
          label="Room Description"
          // required={true}
          placeholder="<div style='font-family: Arial, sans-serif; font-size: 14px; color: gray; line-height: 1.6;'>
          <p>Providing free toiletries, this twin room includes a private bathroom with a walk-in shower and slippers. The air-conditioned twin room provides a flat-screen TV with cable channels, a private entrance, soundproof walls, a seating area as well as city views. The unit offers 2 beds.</p>
          <br/>
          <p><strong>Room Type:</strong> Deluxe King Room</p>
  
          <p><strong>Price:</strong> $150 per night</p>
  
          <p><strong>Capacity:</strong> 2 Adults, 1 Child</p>
          <br/>

          <p><strong>Amenities:</strong></p>

          <ul style='margin: 0; padding-left: 20px;'>

            <li>Free Wi-Fi</li>
            <li>Flat-screen TV</li>
            <li>Air Conditioning</li>
            <li>Mini Bar</li>
            <li>Complimentary Breakfast</li>
          </ul>
          <p><strong>Check-in Time:</strong> 3:00 PM</p>
          <p><strong>Check-out Time:</strong> 11:00 AM</p>
          <p><strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before check-in.</p>
          </div>"
        />

        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          size="large"
        >
          Create Room
        </Button>
      </FormWrapper>
    </Modal>
  );
}
