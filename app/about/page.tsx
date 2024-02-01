import { Container, Section } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { LiaCarSideSolid } from "react-icons/lia";
import { TbOutlet } from "react-icons/tb";
import { FaShop } from "react-icons/fa6";
import PageHeading from "@/components/PageHeading/PageHeading";

const About = () => {
  return (
    <div className="__about">
      <Section bottomSpacing="mb0">
        <div className="py-24">
          <Container>
            <div className="__breadcum mb-8">
              <h1 className="mb-2">About Us</h1>
              <ul className="flex gap-2 items-center">
                <li className="font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-bold">
                  <span className="mx-2">/</span>
                </li>
                <li className="font-bold">
                  <span>About</span>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </Section>
      <Section>
        <Container>
          <div className="grid group grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-24 max-sm:mb-8">
            <div className="flex items-center justify-center relative">
              <Image
                className="rounded-3xl group-hover:scale-105  duration-500 ease-in-out"
                src="/about_image.jpg"
                alt="about"
                width={396}
                height={410}
              />
              <div className="bg-primary-dark  absolute -bottom-[40px] rounded-2xl right-[60px] h-[100px] w-[100px] items-center justify-center flex">
                <FaPlay className="text-white text-4xl text-light" />
              </div>
            </div>
            <div>
              <h2 className="mb-4">About Company</h2>
              <h3 className="text-5xl max-sm:text-2xl mb-4">
                You start the engine and your adventure begins
              </h3>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="flex items-center gap-8 mt-6">
                <div>
                  <LiaCarSideSolid className="text-6xl text-gray-400 mb-2 max-sm:text-3xl max-sm:mb-0 hover:text-primary duration-150" />
                  <div className="flex items-end gap-5">
                    <span className="text-6xl max-sm:text-2xl font-bold text-gray-500">
                      20
                    </span>{" "}
                    <span className="font-bold text-gray-500 text-base leading-none block w-[40px] max-sm:w-[30px] max-sm:text-sm max-sm:leading-4">
                      Car Types
                    </span>
                  </div>
                </div>
                <div>
                  <TbOutlet className="text-6xl text-gray-400 mb-2 max-sm:text-3xl max-sm:mb-0 hover:text-primary duration-150" />
                  <div className="flex items-end gap-5">
                    <span className="text-6xl max-sm:text-2xl font-bold text-gray-500">
                      20
                    </span>{" "}
                    <span className="font-bold text-gray-500 text-base leading-none block w-[40px] max-sm:w-[30px] max-sm:text-sm max-sm:leading-4">
                      Rental Outlets
                    </span>
                  </div>
                </div>
                <div>
                  <FaShop className="text-6xl text-gray-400 mb-2 max-sm:text-3xl max-sm:mb-0 hover:text-primary duration-150" />
                  <div className="flex items-end gap-5">
                    <span className="text-6xl max-sm:text-2xl font-bold text-gray-500">
                      20
                    </span>{" "}
                    <span className="font-bold text-gray-500 text-base leading-none block w-[40px] max-sm:w-[30px] max-sm:text-sm max-sm:leading-4">
                      Repair Shop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Welcome to WheelsOnClick, where we make renting cars easy. We are
            UAE’s leading car rental portal. We connect you to our extensive
            network of rental partners that offer the best deals and cars to fit
            your every need.
          </p>

          <p>
            Experience a hassle-free booking process by exploring car rentals on
            our website and mobile app. Find the best deals for budget, luxury
            and sports car rentals, car with driver and driver-on-hire services
            within Dubai, Abu Dhabi, Sharjah and in select cities across the
            globe.
          </p>

          <p>
            Our car rental service providers offer the lowest prices for a wide
            range of cars. Choose from flexible rental options ranging between
            daily, weekly, monthly-basis, as well as customized deals as per
            your requirement.
          </p>
          <p>
            Travel with ease by experiencing our additional partner services,
            including 24x7 chauffeur and airport transfer service, and on-demand
            driver service, at the lowest, all-inclusive rates. Choose from a
            curated range of executive and luxury cars driven by professional
            chauffeurs, and travel freely at your own pace.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <PageHeading
            title="How it works"
            subTitle="Quick & easy car rental"
          />
          <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex group items-center gap-4 rounded-lg p-6 py-2">
              <div className="bg-primary opacity-60 group-hover:animate-[rubber_1s_ease-in-out_both] rounded-full h-[90px] w-[90px] min-w-[90px] flex items-center justify-center">
                <span className="text-4xl text-dark">
                  <span className="text-6xl">1</span>
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Search</h3>
                <p>
                  Search for your desired rental car, select the best deal, and
                  book it in a few simple steps.
                </p>
              </div>
            </div>
            <div className="flex group items-center gap-4 rounded-lg p-6 py-2">
              <div className="bg-primary opacity-60 group-hover:animate-[rubber_1s_ease-in-out_both] rounded-full h-[90px] w-[90px] min-w-[90px] flex items-center justify-center">
                <span className="text-4xl text-dark">
                  <span className="text-6xl">2</span>
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Book</h3>
                <p>
                  Book your car rental with our trusted partners. You can also
                  book a car with driver, or on-demand driver service.
                </p>
              </div>
            </div>
            <div className="flex group items-center gap-4 rounded-lg p-6 py-2">
              <div className="bg-primary opacity-60 group-hover:animate-[rubber_1s_ease-in-out_both] rounded-full h-[90px] w-[90px] min-w-[90px] flex items-center justify-center">
                <span className="text-4xl text-dark">
                  <span className="text-6xl">3</span>
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Drive</h3>
                <p>
                  Pick up your car from the rental outlet or have it delivered
                  to your doorstep. Enjoy your ride!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
