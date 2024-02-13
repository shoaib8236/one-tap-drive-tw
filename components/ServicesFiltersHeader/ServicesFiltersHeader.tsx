"use client";

import React, { useState } from "react";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { ServicesFiltersModal } from "..";
import { ServicesFiltersHeaderProps } from "@/types/types";

const ServicesFiltersHeader = (props: ServicesFiltersHeaderProps) => {
  const [showModal, setShowModal] = useState(false);

  console.log(props.data);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
  }

  return (
    <div>
      <div className="border-b pb-4 pr-4">
        <form className="flex items-center justify-between gap-4" onSubmit={onSubmit}>
          <h3 className="font-medium">Filters :</h3>
          <Select name="filter" id="filter">
            <option selected value="1">
              Car Type
            </option>
            <option value="2">Car Brand</option>
            <option value="3">Car Model</option>
            <option value="4">Car Year</option>
          </Select>
          <Select name="brand" id="brand">
            <option selected value="1">
              Car Brand
            </option>
            <option value="2">Car Brand</option>
            <option value="3">Car Model</option>
          </Select>
          <Select name="model" id="model">
            <option selected value="1">
              Car Model
            </option>
            <option value="2">Car Brand</option>
            <option value="3">Car Model</option>
          </Select>
          <Select name="year" id="year">
            <option selected value="1">
              year
            </option>
            <option value="2">Car Brand</option>
            <option value="3">Car Model</option>
          </Select>

          <Button
            type="submit"
            text="Search"
            themeColor="dark"
            className="h-full"
          />
          <Button
            onClick={handleShowModal}
            type="button"
            text="View All Filters"
            themeColor="dark"
            className="h-full"
          />
        </form>
      </div>
      <ServicesFiltersModal visible={showModal} onClose={handleShowModal} />
    </div>
  );
};

export default ServicesFiltersHeader;
