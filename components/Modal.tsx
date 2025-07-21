"use client";
import { CloseOutlined } from "@/assets/icons/icon";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

const Modal = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000058] backdrop-blur-[6px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white p-8 rounded-lg shadow-lg max-w-[90vw] max-h-[90vh] overflow-auto text-black"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[20px] text-gray-500 hover:text-black transition cursor-pointer"
        >
          <CloseOutlined />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
