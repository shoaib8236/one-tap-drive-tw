"use client";

import { AccordionProps } from "@/types/types";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Accordion = (props: AccordionProps) => {
  const { title, children, isOpen, onToggle } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const onToggleHandler = () => {
    if (bodyRef.current && rootRef.current) {
      let rootHeight = rootRef.current.getBoundingClientRect().height;
      let bodyHeight = bodyRef.current.getBoundingClientRect().height;

      console.log(rootHeight, bodyHeight);

      if (rootHeight === 50) {
        rootRef.current.style.height = `${rootHeight + bodyHeight}px`;
        bodyRef.current.style.opacity = "1";

        setOpen(true);
      } else {
        rootRef.current.style.height = `50px`;
        bodyRef.current.style.opacity = "0";
        setOpen(false);
      }
    }
  };

  return (
    <div ref={rootRef} style={{ height: 50 }} className="duration-300 overflow-hidden">
      <div
        onClick={onToggleHandler}
        style={{ height: 45 }}
        className="bg-gray-200 px-4 flex items-center justify-between cursor-pointer"
      >
        <h1 className="text-lg select-none">{title}</h1>{" "}
        <IoCloseSharp
          className={`duration-300 ${open ? "rotate-180" : "-rotate-45"}`}
        />
      </div>
      <div
        ref={bodyRef}
        className="p-4 border border-t-0 border-gray-200 opacity-0 duration-300"
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
