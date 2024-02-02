import React from "react";
import { Container, Section } from "@/components";
import Button from "../Button/Button";
import Image from "next/image";
import PageHeading from "../PageHeading/PageHeading";

const BlogCard = () => {
  return (
    <>
      <Section>
        <Container>
          <PageHeading className="mt-14" title="Blogs" />
          <div className="flex flex-wrap -m-4">
            {[1, 2, 3, 4, 5, 6, 7].map(() => (
              <>
                <div className="xl:w-1/3 md:w-1/2 p-4 group">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <Image className="rounded-xl group-hover:scale-105 duration-300" width={500} height={60} src={"/about_image.jpg"} alt="Blog-image" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-6">
                      <span className="font-extrabold text">Business, Travel</span> — July 2, 2020
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2 mt-3">Chichen Itza</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BlogCard;
