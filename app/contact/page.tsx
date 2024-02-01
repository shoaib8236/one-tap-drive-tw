import { Container, Section } from "@/components";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import React from "react";

const Contact = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 space-x-6 gap-4 mt-20">
          <div>
            <form>
              <h2 className="mb-4">Contact Us</h2>
              <p>
                Need assistance with a car rental service provider? Or wondering <br /> how to partner up?
              </p>
                <div className="pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Full Name
                      </label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          placeholder="Full Name"
                          name="full-name"
                          id="full-name"
                          
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Contact No
                      </label>
                      <div className="mt-2">
                        <Input
                          placeholder="Contact Number"
                          type="number"
                          name="number"
                          id="number"
                          
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2">
                        <Input
                          placeholder="Email"
                          type="email"
                          name="email"
                          id="email"
                          
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                        Subject
                      </label>
                      <div className="mt-2">
                        <Input
                          placeholder="Subject"
                          type="text"
                          name="subject"
                          id="subject"
                          
                        />
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
                        <Button text="Submit" size="md"/>
                    </div>
                  </div>
                </div>
            </form> 
          </div>
          <div>
            <h2 className="mb-4">Map Here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit vel asperiores et tempora nulla molestiae aspernatur obcaecati. Nulla laborum quaerat dicta
              molestiae beatae, tempora distinctio numquam nostrum voluptate libero aspernatur voluptates, illum corporis voluptatibus culpa aliquid recusandae! Neque corrupti
              rerum expedita doloribus magnam aliquam rem voluptatem nobis? Enim culpa autem, blanditiis ipsum vero ut sapiente suscipit neque ex ipsam eveniet, consequatur in
              optio maiores nostrum accusantium pariatur saepe quo accusamus ea nulla velit perferendis! Quas rem cumque, distinctio quaerat architecto ipsam et deserunt
              dignissimos sapiente vero quia nihil praesentium, iste ducimus quod magnam maxime minus voluptate consequuntur sed eaque?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
