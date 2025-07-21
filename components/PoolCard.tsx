"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import OrderModal from "./OrderModal";

const PoolCard = ({
  status,
  frame,
  discount,
  price,
}: {
  status?: "recommended" | "discount" | "none";
  frame: string;
  discount?: number;
  price: number;
}) => {
  const t = useTranslations("Frame");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      style={{
        boxShadow:
          "0px 2px 10px rgba(0,0,0,0.1), 0px 6px 20px rgba(0,0,0,0.15)",
      }}
      className={`${
        discount
          ? "w-[340px] h-[284px]"
          : "w-[633px] h-[505px] py-[50px] px-[60px]"
      } rounded-b-[35px] rounded-tr-[35px]`}
    >
      {status && (
        <div
          className={`${
            status == "recommended"
              ? "bg-[#139D4B]"
              : status == "discount"
              ? "bg-[#FFD600]"
              : "bg-[#ED2020]"
          } shadow-lg w-[140px] py-[5px] text-[15px] font-bold leading-[100%] px-[18px] rounded-br-[10px]`}
        >
          {t(status)}
        </div>
      )}
      <div
        className={`${status ? "mt-[17px]" : "mt-[45px]"} 
        ${discount ? "w-[250px]" : ""}
        mx-auto flex flex-col justify-between h-[210px]`}
      >
        <Heading
          tag="h2"
          classList={`${
            discount ? "!text-[20px]" : "!text-[35px]"
          } !text-[var(--clr-green)] text-center pb-[10px]`}
        >
          {frame}
        </Heading>
        <Image
          className={`${
            discount && discount > 0
              ? "w-[200px] h-[100px]"
              : "w-[500px] h-[300px]"
          } object-cover bg-red-500`}
          src={"/pool.jpg"}
          alt="pool"
          width={200}
          height={100}
          priority
        />
        {discount ? (
          <div className="flex pt-[20px] leading-[120%] items-end justify-between">
            <div>
              <div className="relative inline-block">
                <p className="text-[12px] font-normal text-gray-600">
                  {discount} {t("price")}
                </p>
                <div className="absolute top-[9px] left-0 w-full h-[1.5px] bg-red-500 rotate-[6deg]"></div>
              </div>
              <Heading tag="h2" classList="text-black !text-[16px]">
                {price} {t("price")}
              </Heading>
            </div>
            <button
              className="w-[110px] py-[6px] cursor-pointer bg-[#FFE600] leading-[100%] h-min rounded-tr-[10px] rounded-bl-[10px] text-black font-bold text-[15px]"
              onClick={() => setIsOpen(true)}
            >
              {t("order")}
            </button>
          </div>
        ) : (
          <Heading tag="h2" classList={`text-black ${discount ? "!text-[16px]": "!text-[30px] text-center"}`}>
            {price} {t("price")}
          </Heading>
        )}
      </div>
      <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PoolCard;
