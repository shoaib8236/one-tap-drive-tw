import { Container, NextImageGallery, Section } from "@/components";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Car Details | OneTapDrive",
    description: "Car Details | OneTapDrive",
  };
}

export default async function CarDetails({ params, searchParams }: Props) {
  return (
    <div className="__car-details">
      <Section bottomSpacing="mb0">
        <Container>
          <div className="py-2">
            <div className="__breadcum mb-8">
              <h1 className="mb-2">Details</h1>
              <ul className="flex gap-2 items-center">
                <li className="font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-bold">
                  <span className="mx-2">/</span>
                </li>
                <li className="font-bold">
                  <span>{searchParams?.slug}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      <Container>
        <div className="flex pb-4 gap-4 max-md:flex-col">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
              <div className="px-4 border-r">
                <NextImageGallery />
              </div>
              <div className="px-4">
                <div className="mb-4">
                  <h3>Pricing</h3>
                  <div className="border-b my-4"></div>
                  <div className="w-full text-center border border-gray-300">
                    <div className="flex p-2 bg-gray-300 font-medium">
                      <span className="block flex-1">Rental Period</span>
                      <span className="block flex-1">Mileage</span>
                      <span className="block flex-1">Rental Price</span>
                    </div>
                    <div className="flex p-2 border-b border-gray-300 last:border-b-0">
                      <span className="block flex-1">1 Day</span>
                      <span className="block flex-1">250 KM</span>
                      <span className="block flex-1">AED 1000</span>
                    </div>
                    <div className="flex p-2 border-b border-gray-300 last:border-b-0">
                      <span className="block flex-1">2 Day</span>
                      <span className="block flex-1">500 KM</span>
                      <span className="block flex-1">AED 1800</span>
                    </div>
                    <div className="flex p-2 border-b border-gray-300 last:border-b-0">
                      <span className="block flex-1">3 Day</span>
                      <span className="block flex-1">1000 KM</span>
                      <span className="block flex-1">AED 2500</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h3>Monthly Pricing</h3>
                  <div className="border-b my-4"></div>
                  <div className="w-full text-center border border-gray-300">
                    <div className="flex p-2 bg-gray-300 font-medium">
                      <span className="block flex-1">Rental Period</span>
                      <span className="block flex-1">Mileage</span>
                      <span className="block flex-1">Rental Price</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-r px-4 py-8">
                <h3>Car Specs</h3>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Transmission</span>
                    <span>Automatic</span>
                  </div>
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Engine</span>
                    <span>6.3L V8</span>
                  </div>
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Seats</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Doors</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Minimum Age</span>
                    <span>25</span>
                  </div>
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Security Deposit</span>
                    <span>AED 5000</span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-8">
                <h3>Rental Include</h3>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Insurance</span>
                    <span>Basic Comprehensive</span>
                  </div>
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Extras</span>
                    <span></span>
                  </div>
                  <div className="flex justify-between border-b p-2">
                    <span className="font-semibol">Car Color</span>
                    <span>Interior Color</span>
                    <span>Exterior Color</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-[300px]">1</div>
        </div>
      </Container>
    </div>
  );
}
