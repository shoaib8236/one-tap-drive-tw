"use client";

import { useState } from "react";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  return (
    <div className="flex flex-col gap-6">
             <h3>Frequently Asked Questions</h3>
      <Accordion title="Why is driving a BMW recommended in Dubai?">
        <p>
          Among the popular car choices, BMW is definitely a favorite. In Dubai,
          more so, as it’s perfect for Sheikh Zayed Road as well as on the
          highways stretching across the Emirates. Being one of the most scenic
          places for those seeking a luxurious adventure on wheels, BMWs are the
          most-in-demand cars in Dubai. You’ll be driving alongside exotic cars
          such as Porsche, Mercedes Benz, Audi, not to mention a range of sports
          cars.Many tourists and residents in Dubai rent a BMW to soak the
          pleasure of driving a luxurious sedan. The spacious cabin, extra
          legroom, advanced driving and safety features are what BMW vehicles
          are most known for.
        </p>
      </Accordion>
      <Accordion title="Can I take the BMW rental car to Abu Dhabi from Dubai?">
        <p>
          Yes, you can! Most customers rent a luxury sedan in Dubai to visit Abu
          Dhabi and other emirates. It’s definitely the best way to explore the
          UAE. Car rental companies allow their vehicles to be driven anywhere
          in the UAE, barring a few locations such as Jebel Hafeet, Jebel Jais
          and desert areas. Be sure to plan your drives in advance to make the
          most of it. Google Maps is your best friend!If you’re planning a trip
          to the Grand Mosque, Louvre or Yas Marina, consider renting for 2 or
          more days to offset the additional mileage charge you will incur. As
          most car rentals, including luxury and sports cars, come with a
          standard mileage limit of 250-km per day. Dubai to Abu Dhabi is a good
          150-km away so you’ll probably be clocking over 300 km on the journey
          back.Best practice: Consult with the car rental agency regarding your
          trip plan for suggestions. Additional mileage packages may be
          available.
        </p>
      </Accordion>
      <Accordion title="Which type of BMW cars are available for rent in Dubai?">
        <p>
          WheelsOnClick.com works with several car rental companies across the
          world. In Dubai, we work with quite a few BMW car rental providers.
          You can choose among cars with a range of engine sizes and additional
          features, including GPS navigation, safety and performance
          enhancements. The BMW sedan comes in various 4-door sedan, convertible
          models with advanced features. Different models including: BMW
          2-series, 3-series, 550i, 550 mpower, 730li, 750li, X5, X6 and more.
          If you’re looking for a rare BMW car model, contact our suppliers who
          have listed a BMW. They might be able to cater to your distinguished
          needs.
        </p>
      </Accordion>
    </div>
  );
};

export default Faq;
