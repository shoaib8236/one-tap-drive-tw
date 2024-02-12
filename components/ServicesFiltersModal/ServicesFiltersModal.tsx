"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { ServicesFiltersModalProps } from "@/types/types";

const ServicesFiltersModal = (props: ServicesFiltersModalProps) => {
  const { visible, onClose } = props;

  return (
    <Modal width={600} title="Filters" visible={visible} onClose={onClose}>
      ServicesFiltersModal
    </Modal>
  );
};

export default ServicesFiltersModal;
