import React from "react";
import VehicleCard from "../VehicleCard/VehicleCard";
import PageHeading from "../PageHeading/PageHeading";

const VehicleSlider = () => {
  return (
    <div className="__vehicle-slider">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <VehicleCard />
        </div>
        <div>
          <VehicleCard />
        </div>
        <div>
          <VehicleCard />
        </div>
      </div>
    </div>
  );
};

export default VehicleSlider;
