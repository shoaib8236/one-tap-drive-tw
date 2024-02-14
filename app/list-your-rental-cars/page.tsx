import { Container, Section } from "@/components";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { MdReviews } from "react-icons/md";
import Gallery from "@/components/Gallery/Gallery"

const ListYourRentalCars = () => {
  return (
    <>
      <Section>
        <Container>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <div className="p-5">
              <p>
                Join OneTapDrive to profit from over 1 million page views every month, with more than 50,000 quality leads sent to car rental companies and brokers all across the
                world.
              </p>
              <ul>
                <li className="mb-2">
                  <p className="ml-0 mb-2 flex items-center gap-4">
                    <FaCheck className="text-primary min-w-[16px]" /> Get direct leads via phone, SMS and emails.
                  </p>
                </li>
                <li className="mb-2">
                  <p className="ml-0 mb-2 flex items-center gap-4">
                    <FaCheck className="text-primary min-w-[16px]" /> Full training provided for your staff to use the CMS.
                  </p>
                </li>
                <li className="mb-2">
                  <p className="ml-0 mb-2 flex items-center gap-4">
                    <FaCheck className="text-primary min-w-[16px]" /> Assistance from your dedicated Account Manager.
                  </p>
                </li>
                <li className="mb-2">
                  <p className="ml-0 mb-2 flex items-center gap-4">
                    <FaCheck className="text-primary min-w-[16px]" /> Tools and resources to plan your marketing strategy.
                  </p>
                </li>
                <li className="mb-2">
                  <p className="ml-0 mb-2 flex items-center gap-4">
                    <FaCheck className="text-primary min-w-[16px]" /> Exclusive member benefits
                  </p>
                </li>
              </ul>
            </div>
            <div className="shadow-xl p-5">
              <form>
                <div className="pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="Your-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Your Name
                      </label>
                      <div className="mt-2">
                        <Input type="text" placeholder="Your Name" name="your-name" id="your-name" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Company Name
                      </label>
                      <div className="mt-2">
                        <Input placeholder="Company Name" type="text" name="company-name" id="company-name" />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="job-title" className="block text-sm font-medium leading-6 text-gray-900">
                        Job Title
                      </label>
                      <div className="mt-2">
                        <Input placeholder="Job Title" type="job-title" name="job-title" id="job-title" />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="fleet-size" className="block text-sm font-medium leading-6 text-gray-900">
                        Fleet Size
                      </label>
                      <div className="mt-2">
                        <select
                          id="fleet-size"
                          name="fleet-size"
                          autoComplete="fleet-size"
                          className="border bg-gray-200 outline-none rounded-lg w-full focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 py-3">
                          <option value="5-10 cars">5-10 cars</option>
                          <option value="Up to 50 cars">Up to 50 cars</option>
                          <option value="Up to 100 cars">Up to 100 cars</option>
                          <option value="Up to 500 cars">Up to 500 cars</option>
                          <option value="500+ cars">500+ cars</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                        Contact Number
                      </label>
                      <div className="mt-2">
                        <Input
                          id="contact"
                          name="contact"
                          placeholder="Contact Number"
                          className="border bg-gray-200 outline-none rounded-lg w-full focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 py-3"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2">
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="border bg-gray-200 outline-none rounded-lg w-full focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 py-3"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="border bg-gray-200 outline-none rounded-lg w-full focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 py-3">
                          <option selected disabled>
                            Choose Country
                          </option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                      </label>
                      <div className="mt-2">
                        <select
                          id="city"
                          name="city"
                          autoComplete="city"
                          className="border bg-gray-200 outline-none rounded-lg w-full focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 py-3">
                          <option selected disabled>
                            Choose City
                          </option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Ajman">Ajman</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Fujairah">Fujairah</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Sharjah">Sharjah</option>
                          <option value="Umm Al Quwain">Umm Al Quwain</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="query" className="block text-sm font-medium leading-6 text-gray-900">
                        Query
                      </label>
                      <div className="mt-2">
                        <textarea
                          placeholder="Query"
                          className="border bg-gray-200 outline-none rounded-lg w-full focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 p-3"
                          name="query"
                          id="query"
                          rows={5}></textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <Button text="Submit" size="md" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
            <div>
              <Link
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 mt-6 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Link>
              <Link
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 mt-6 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Link>
              <Link
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 mt-6 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Link>
            </div>
            <div className="flex">
              <Image className="mx-auto block my-auto" src={"/list_png.webp"} width={300} height={500} alt="Car Detail" />
            </div>
            <div>
              <Link
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 mt-6 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Link>
              <Link
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 mt-6 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Link>
              <Link
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 mt-6 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-mercedes py-40 text-center bg-blend-overlay bg-gray-900 bg-cover bg-center hover:bg-opacity-90 transition-all duration-300 group">
        <Container>
          <div className="list_car_bg grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
            <div>
              <VscGraph className="text-light text-4xl mx-auto" />
              <h3 className="text-light mt-2">List Your Cars</h3>
              <p className="text-light mt-2">
                Market your car rental fleet on the WheelsOnClick website and mobile app. Join one of the biggest car rental marketplaces in the world.
              </p>
            </div>
            <div>
              <VscGraph className="text-light text-4xl mx-auto" />
              <h3 className="text-light mt-2">Higher ROI</h3>
              <p className="text-light mt-2">
                A majority of our clients have reported at least 10x ROI with WheelsOnClick. The highest – when compared across all their marketing channels and spends.
              </p>
            </div>
            <div>
              <MdReviews className="text-light text-4xl mx-auto" />
              <h3 className="text-light mt-2">Stand Tall in your industry</h3>
              <p className="text-light mt-2">
                Showcase your cars among the top list of car rental companies in your city. Increase your brand recognition, forge partnerships and reinforce your business.
              </p>
            </div>
          </div>
          <div>
            <div className="mt-10 light_grey">
              <h2 className="text-light">Car Rental Advertising that goes a long way!</h2>
              <p className="mt-2 text-light">Explore the WheelsOnClick website and mobile apps</p>
              <div className="flex flex-wrap mt-8 justify-center">
                  <Image  src={"/huawei.webp"} width={150} height={50} alt="huawei"/>
                  <Image className="ms-2" src={"/apple.webp"} width={150} height={50} alt="huawei"/>
                  <Image className="ms-2" src={"/google.webp"} width={150} height={50} alt="huawei"/>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    <Gallery/>
    </>
  );
};

export default ListYourRentalCars;