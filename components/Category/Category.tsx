import Image from "next/image";
import Container from "../Container/Container";
import React from "react";
import Button from "../Button/Button";
import PageHeading from "../PageHeading/PageHeading";
import { BsArrowRight } from "react-icons/bs";


const Category = () => {
  return (
    <Container>
      <div>
        <PageHeading title="Choose By Categories" />
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((item: number) => (
            <div
              key={item}
              className="shadow-xl hover:bg-gray-300 rounded-lg shadow-gray-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  className="object-contain rounded-lg"
                  src="/sedan-car.jpg"
                  width={300}
                  height={150}
                  alt="car"
                />
              </div>
              <div className="p-4">
                <h3 className="mt-4">
                  Sadan
                </h3>
                <p className="font-semibold">4 Cars</p>
                <Button
                  className="mt-4"
                  text="View More"
                  themeColor="primary"
                  size="sm"
                    icon={<BsArrowRight />}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
     <div className="mt-10 flex justify-end w-full"><Button text="View All Caregories" themeColor="light" size="sm" icon={<BsArrowRight/>} /></div>
    </Container>
  );
};

export default Category;
