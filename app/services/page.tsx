import {
  Container,
  Section,
  ServicesCard,
  Button,
  Select,
  ServicesFiltersHeader,
} from "@/components";

import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { Vehicle } from "@/types/interface";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Services | Rent a Car in Dubai on Day, Week, Month-Basis",
  };
}

const getCars = async () => {
  const res = await fetch("https://freetestapi.com/api/v1/cars");
  const data = await res.json();
  return data;
};

export default async function Services({ params, searchParams }: Props) {

  let cars = await getCars();

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
        <div className="flex flex-col gap-14 py-4">
          <ServicesFiltersHeader data={searchParams} />
          <div className="flex-1">
            <h1 className="text-2xl mb-4">
              RENT A CAR IN DUBAI ON DAY, WEEK, MONTH-BASIS
            </h1>
            <p>
              Hire cars directly from local car rental companies at the best
              rate
            </p>
            <div className="grid flex-col mt-12 gap-6">
              {cars.map((item: Vehicle) => (
                <ServicesCard data={item} key={item.id} />
              ))}
            </div>
            <div className="flex justify-center py-4">
              <Button text="Load More" themeColor="dark" size="md" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
