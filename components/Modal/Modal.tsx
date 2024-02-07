"use client";

import { ModalProps } from "@/types/types";
import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import { IoCloseSharp } from "react-icons/io5";

const Modal = (props: ModalProps) => {
  const { visible = false, children, className, onClose } = props;
  const modalBodyRef = React.useRef<HTMLDivElement>(null);

  const [visibleModal, setVisibleModal] = React.useState(false);

  const onVisibleModal = () => {
    if (modalBodyRef.current) {
      modalBodyRef.current.classList.replace("opacity-0", "opacity-100");
      modalBodyRef.current.classList.replace("translate-y-2", "translate-y-0");
    }
  };

  const onInvisibleModal = () => {
    if (modalBodyRef.current) {
      modalBodyRef.current.classList.replace("opacity-100", "opacity-0");
      modalBodyRef.current.classList.replace("translate-y-0", "translate-y-2");
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible) {
      setVisibleModal(true);
    } else {
      onInvisibleModal();
      timer = setTimeout(() => {
        setVisibleModal(false);
      }, 300);
    }
  }, [visible]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visibleModal) {
      timer = setTimeout(() => {
        onVisibleModal();
      }, 100);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [visibleModal]);

  return (
    <>
      {visibleModal && (
        <div className="__modal-root-context fixed inset-0 bg-dark/50">
          <div className="__modal-root flex items-center justify-center h-full w-full">
            <div
              ref={modalBodyRef}
              className="__modal-body min-w-[280px] relative opacity-0 translate-y-2 duration-300 bg-light rounded shadow-xl"
            >
              <div className="flex p-4 gap-4 w-full items-center justify-between">
                <h1 className="text-2xl font-medium">Modal title</h1>
                <Button
                  onClick={onClose}
                  className="block ml-auto w-8 h-8"
                  size="sm"
                  iconAnimation={false}
                  themeColor="primary"
                  icon={<IoCloseSharp className="text-2xl" />}
                />
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
