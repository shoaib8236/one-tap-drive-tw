import { SelectProps } from "@/types/types";
import React from "react";

const Select = (props: SelectProps) => {
  const { id, name, value, onChange, className } = props;

  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="border px-2 bg-gray-200 outline-none rounded-lg flex-1 focus:shadow-lg focus:shadow-gray-300 focus:border focus:border-gray-200 duration-300 py-3"
    >
        
      {props.children}
    </select>
  );
};

export default Select;
