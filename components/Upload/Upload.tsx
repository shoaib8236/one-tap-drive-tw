"use client";

import { UploadProps } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Upload = (props: UploadProps) => {
  const { size = "sm", className = "", onChange } = props;

  const [file, setFile] = useState<File | null>(null);

  const renderSize = (size: string) => {
    switch (size) {
      case "sm":
        return "w-28 h-28";
      case "md":
        return "w-40 h-40";
      case "lg":
        return "w-60 h-60";
      default:
        return "w-40 h-40";
    }
  };

  const onPickFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      console.log(selectedFile);
      setFile(selectedFile);
    }

    if (onChange) {
      onChange(selectedFile || null);
    }
  };

  let createImageUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  return (
    <div className="SR_upload">
      <div
        className={`${renderSize(
          size
        )} ${className} group relative overflow-hidden border border-dashed border-gray-400 rounded-full shadow-lg shadow-gray-50 hover:shadow-gray-300`}
      >
        {file ? (
          <div className="">
            <div className="absolute opacity-0 bg-primary-opacity-75 translate-x-full z-50 h-full w-full flex items-center justify-center group-hover:opacity-100 group-hover:translate-x-0 duration-300">
              <button
                onClick={() => setFile(null)}
                className="text-gray-800 text-2xl"
              >
                <RiDeleteBin5Line />
              </button>
            </div>
            <Image src={createImageUrl(file)} alt="upload" layout="fill" />
          </div>
        ) : (
          <span className="absolute flex flex-col inset-0 h-full w-ful items-center justify-center">
            <span className="font-medium text-center">Upload</span>
            <span className="text-xs font-medium text-center">
              Recomended size
              {size === "sm"
                ? "100x100"
                : size === "md"
                ? "200x200"
                : "300x300"}
            </span>
          </span>
        )}

        {!file && (
          <input
            onChange={onPickFile}
            type="file"
            className="absolute inset-0 h-full w-full opacity-0"
          />
        )}
      </div>
    </div>
  );
};

export default Upload;
