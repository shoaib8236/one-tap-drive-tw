import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { BsCheckCircleFill } from "react-icons/bs";

const BookingBanner = () => {
  return (
    <div className="bg-cta_car_action py-24 bg-no-repeat bg-right bg-dark bg-blend-overlay">
      <Container>
        <div className="grid items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2">
          <div className="max-sm:text-center">
            <h1 className="text-light text-6xl mb-4 max-sm:text-4xl">
              Save big with our cheap car rental!
            </h1>
            <p className="text-light">
              Top Airports. Local Suppliers. 24/7 Support.
            </p>
          </div>
          <div className=" flex justify-end max-sm:justify-center">
            <Button
              className="uppercase"
              size="lg"
              text="Book Ride"
              icon={<BsCheckCircleFill className="text-gray-600 text-2xl" />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookingBanner;
