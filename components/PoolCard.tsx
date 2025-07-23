"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import OrderModal from "./OrderModal";
import { ProductType } from "@/types/ProductType";
import { API } from "@/service/hooks/getEnv";
import { getCookie } from "cookies-next";
import { useTheme } from "next-themes";

const PoolCard = ({ item, id }: { item: ProductType; id?: number }) => {
  const t = useTranslations("Frame");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [poolId, setPoolId] = useState<number | null>(null);
  const b = getCookie("NEXT_LOCALE");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        boxShadow:
          "0px 2px 10px rgba(0,0,0,0.1), 0px 6px 20px rgba(0,0,0,0.15)",
      }}
      className={`${
        id ? "w-[340px] h-[284px]" : "w-[633px] h-[505px] py-[50px] px-[60px]"
      } rounded-b-[35px] rounded-tr-[35px] ${
        resolvedTheme == "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      {item.status !== "available" && id && (
        <div
          className={`${
            item.status == "recommended"
              ? "bg-[#139D4B]"
              : item.status == "discount"
              ? "bg-[#FFD600]"
              : "bg-[#ED2020]"
          } shadow-lg w-[140px] py-[5px] text-[15px] font-bold leading-[100%] px-[18px] rounded-br-[10px]`}
        >
          {t(item.status)}
        </div>
      )}
      <div
        className={`${item.status !== "available" ? "mt-[17px]" : "mt-[45px]"} 
        ${id ? "w-[250px]" : `space-y-10 h-full !mt-[-30px]`}
        mx-auto flex flex-col justify-between h-[210px]`}
      >
        <Heading
          tag="h2"
          classList={`${
            id ? "!text-[20px]" : "!text-[35px]"
          } !text-[var(--clr-green)] text-center pb-[10px]`}
        >
          {b == "uz" ? item.shapeUzb : item.shape}
        </Heading>
        <Image
          className={`${
            id ? "w-[300px] h-[120px]" : "w-[500px] h-[300px]"
          } object-contain`}
          src={`${API}/file/${item?.image}`}
          alt="pool"
          width={200}
          height={100}
          priority
        />
        {id ? (
          <div className="flex pt-[20px] leading-[120%] items-end justify-between">
            <div>
              <div className="relative inline-block">
                <p
                  className={`text-[12px] font-normal 
                  ${resolvedTheme == "dark" ? "text-gray-300" : "text-gray-500"}
                  `}
                >
                  {new Intl.NumberFormat("de-DE").format(item.price)}
                  {t("price")}
                </p>
                <div className="absolute top-[9px] left-0 w-full h-[1.5px] bg-red-500 rotate-[6deg]"></div>
              </div>
              <Heading
                tag="h2"
                classList={`${
                  resolvedTheme == "dark" ? "text-white" : "text-black"
                } !text-[16px]`}
              >
                {new Intl.NumberFormat("de-DE").format(item.discountPrice)}{" "}
                {t("price")}
              </Heading>
            </div>
            <button
              className="w-[110px] py-[6px] cursor-pointer bg-[#FFE600] leading-[100%] h-min rounded-tr-[10px] rounded-bl-[10px] text-black font-bold text-[15px]"
              onClick={() => {
                setIsOpen(true), setPoolId(item.id);
              }}
            >
              {t("order")}
            </button>
          </div>
        ) : (
          <Heading
            tag="h2"
            classList={`!text-white ${
              id ? "!text-[16px]" : "!text-[30px] text-center"
            }`}
          >
            {new Intl.NumberFormat("de-DE").format(item.discountPrice)}
            {t("price")}
          </Heading>
        )}
      </div>
      <OrderModal id={poolId} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PoolCard;
