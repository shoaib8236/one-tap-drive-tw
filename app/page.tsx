import {
  Container,
  Hero,
  Category,
  Testimonials,
  Section,
  VendorInvitation,
  CarRentalRequirment,
} from "@/components";
import PageHeading from "@/components/PageHeading/PageHeading";
import Image from "next/image";
import { MdOutlineCheck } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Category />
      </Section>
      <Section>
        <div className="flex justify-center px-4 max-sm:px-2">
          <Image
            src={"/ad-banner-1.png"}
            width={1368}
            height={216}
            alt="ad-banner-1"
          />
        </div>
      </Section>
      <Section>
        <div className="overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <Image
                  src={"/rent-vector.jpg"}
                  width={400}
                  height={400}
                  alt="ad-banner-2"
                />
              </div>
              <div className="relative before:content-[''] before:absolute before:left-[50%] before:top-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:bg-gray-200 before:-z-10 before:rounded-full before:w-[480px] before:h-[480px] before:scale-150 hover:before:scale-125 before:duration-200">
                <h2 className="mb-5">
                  <span className="text-primary">Find</span> the best car rental
                  company for you
                </h2>
                <span className="block h-2 bg-gray-300 w-32 mt-4 mb-4 rounded-lg max-sm:w-20 max-sm:mt-3"></span>
                <div className="pl-8 mb-4">
                  <h3 className="text-primary flex items-center gap-2 mb-2 -ml-8">
                    <span className="flex items-center justify-center text-sm rounded-full text-light h-6 w-6 bg-primary">
                      <MdOutlineCheck />
                    </span>
                    OneTapDrive Partneredship
                  </h3>

                  <p className="font-semibold text-gray-500">
                    OneTapDrvie.com is the first-ever global car rental and
                    leasing marketplace. We work with 200+ local car rental
                    companies in Dubai. You can choose among their 2000+
                    verified cars to find the best rental car for you.\
                  </p>
                </div>
                <div className="pl-8 mb-4">
                  <h3 className="text-primary flex items-center gap-2 mb-2 -ml-8">
                    <span className="flex items-center justify-center text-sm rounded-full text-light h-6 w-6 bg-primary">
                      <MdOutlineCheck />
                    </span>
                    Car Rental Deals
                  </h3>
                  <p className="font-semibold text-gray-500">
                    Find cheap car rental deals and discounts for all types of
                    cars: be it for personal or business use. Access
                    competitive, commission-free car rental service in Dubai,
                    Abu Dhabi, Sharjah and Ajman.
                  </p>
                </div>
                <div className="pl-8 mb-4">
                  <h3 className="text-primary flex items-center gap-2 mb-2 -ml-8">
                    <span className="flex items-center justify-center text-sm rounded-full text-light h-6 w-6 bg-primary">
                      <MdOutlineCheck />
                    </span>
                    Car Rental Fleet
                  </h3>
                  <p className="font-semibold text-gray-500">
                    Our car rental partners’ fleet include every car you’ve ever
                    dreamed of. From high-end supercar rentals such as Ferrari,
                    Lamborghini and Rolls Royce to luxury SUVs Range Rover,
                    Mercedes Benz and even economy cars such as Kia Picanto,
                    Nissan Sunny and Renault Duster.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Section>
      <Section>
        <Container>
          <div className="max-w-[600px] m-auto">
            <PageHeading title="Top benefits for renting a car with a driver in Dubai" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-20">
            <div className="border border-gray-200 p-6 text-left relative before:content-[''] before:bg-primary before:absolute before:-top-0 before:left-0 before:h-2 before:w-11 hover:before:w-16 before:duration-200">
              <h3 className="mb-3">
                <span className="text-primary">Sit</span> back and relax
              </h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam
              dolorum ab perferendis officia quia quis blanditiis debitis ullam
              veritatis enim, architecto fuga iste, quod rem modi beatae magni
              corporis.
            </div>

            <div className="border border-gray-200 p-6 text-left relative before:content-[''] before:bg-primary before:absolute before:-top-0 before:left-0 before:h-2 before:w-11 hover:before:w-16 before:duration-200">
              <h3 className="mb-3">
                <span className="text-primary">Sit</span> back and relax
              </h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam
              dolorum ab perferendis officia quia quis blanditiis debitis ullam
              veritatis enim, architecto fuga iste, quod rem modi beatae magni
              corporis.
            </div>

            <div className="border border-gray-200 p-6 text-left relative before:content-[''] before:bg-primary before:absolute before:-top-0 before:left-0 before:h-2 before:w-11 hover:before:w-16 before:duration-200">
              <h3 className="mb-3">
                <span className="text-primary">Sit</span> back and relax
              </h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam
              dolorum ab perferendis officia quia quis blanditiis debitis ullam
              veritatis enim, architecto fuga iste, quod rem modi beatae magni
              corporis.
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <CarRentalRequirment />
      </Section>
      <Section>
        <div className="flex justify-center px-4 max-sm:px-2">
          <Image
            src={"/ad-banner-1.png"}
            width={1368}
            height={216}
            alt="ad-banner-1"
          />
        </div>
      </Section>
      <Section>
        <Container>
          <Testimonials />
        </Container>
      </Section>
      <VendorInvitation />
    </div>
  );
}
