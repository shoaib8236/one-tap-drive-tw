import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import PageHeading from "../PageHeading/PageHeading";

const Testimonials = () => {
  return (
    <div>
      <PageHeading title="Testimonials" subTitle="Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed." />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="px-8">
          <h3 className="mb-4"> <span className="text-primary">Our</span> Community.</h3>
          <p>
            The experiences shared by our distinguished users have always helped
            us up our game. The OneClickDrive Marketplace is often re engineered
            as we follow a "Listen Understand Improve" cycle
          </p>
        </div>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
