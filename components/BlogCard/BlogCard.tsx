import React from "react";
import { Container, Section } from "@/components";
import Button from "../Button/Button";
import Image from "next/image";

const BlogCard = () => {
  return (
    <>
      <Section>
        <Container>
          {[1, 2, 3, 4, 5].map((item) =>
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 space-x-6 gap-4 mt-20 items-center ">
                <div className={`${item % 2 === 0 && "order-last"}`}>
                  <Image className="rounded-xl" width={500} height={100} src={"/about_image.jpg"} alt="Blog-image" />
                </div>
                <div>
                  <div>
                    <p className="mt-4">August 1, 2023</p>
                    <h2 className="mt-6">Blog 1</h2>
                    <p className="mt-4">
                      Bentley rental Dubai deals with almost all the updated and new models for rental purposes. Among all, Bentayga is the sublime choice for SUV lovers. A perfect
                      blend of speed and luxury, it’s the ultimate choice for long drives on highways. It is one of the most modern cars ever made, having a traditional outlook. A
                      perfect blend of speed and luxury, it’s the ultimate choice for long drives on highways. It is one of the most modern cars ever made, having a traditional
                      outlook
                    </p>
                    <Button className="mt-4" text="Read More" size="md" />
                  </div>
                </div>
              </div>
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default BlogCard;
