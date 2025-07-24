"use client";
import { CloseOutlined } from "@/assets/icons/icon";
import React, { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";

const Modal = ({
  children,
  onSubmit,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000058] backdrop-blur-[6px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[var(--clr-bg)]  p-8 rounded-[35px] shadow-lg max-w-[90vw] max-h-[90vh] overflow-auto text-black"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[22px] right-[30px] text-[20px] text-gray-500 hover:text-black transition cursor-pointer"
        >
          <CloseOutlined />
        </button>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </div>
  );
};

export default Modal;
