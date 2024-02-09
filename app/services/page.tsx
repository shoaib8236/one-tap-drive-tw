import { Container, Section, ServicesCard } from "@/components";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="__services">
      <Container>
        <Section bottomSpacing="mb0">
          <div className="py-2">
            <div className="__breadcum mb-4">
              <h1 className="mb-2">Services</h1>
              <ul className="flex gap-2 items-center">
                <li className="font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-bold">
                  <span className="mx-2">/</span>
                </li>
                <li className="font-bold">
                  <span>Services</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <div className="flex py-4">
          <div className="flex-1 max-w-[400px] w-[400px] border-r">1</div>
          <div className="flex-1 px-4">
            <h1 className="text-2xl mb-4">RENT A CAR IN DUBAI ON DAY, WEEK, MONTH-BASIS</h1>
            <p>Hire cars directly from local car rental companies at the best rate</p>
            {
              [1,2,3,4,5,6,7,8,9].map(item=> (
                <><ServicesCard/></>
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
