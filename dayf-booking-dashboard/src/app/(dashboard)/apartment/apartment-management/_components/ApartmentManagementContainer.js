"use client";

import { Button, Flex } from "antd";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import ApartmentCard from "./ApartmentCard";
import AddApartmentModal from "./AddApartmentModal";

export default function ApartmentManagementContainer() {
  const [showAddApartmentModal, setShowAddApartmentModal] = useState(false);

  return (
    <div className="rounded-xl bg-white p-5">
      <Flex align="center" justify="space-between">
        <h2 className="mb-5 text-2xl font-semibold">
          Apartment/House Management
        </h2>

        <Button
          type="primary"
          variant="filled"
          shape="round"
          size="large"
          onClick={() => setShowAddApartmentModal(true)}
          icon={<PlusCircle size={20} />}
        >
          Add Apartment/House
        </Button>
      </Flex>

      {/* Apartment Cards */}
      <section className="grid grid-cols-3">
        <ApartmentCard />
      </section>

      <AddApartmentModal
        open={showAddApartmentModal}
        setOpen={setShowAddApartmentModal}
      />
    </div>
  );
}
