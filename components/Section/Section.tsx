import { SectionProps } from "@/types/types";
import React from "react";

const Section = (props: SectionProps) => {
  const { children, bottomSpacing = "mb-44", className = '' } = props;

  return (
    <section className={`${bottomSpacing} ${className}`}>{children}</section>
  );
};

export default Section;
