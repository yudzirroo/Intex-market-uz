"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Modal from "./Modal";
import PoolCard from "./PoolCard";
import { CardIcon } from "@/assets/icons/icon";
import { useTranslations } from "next-intl";
import getRequest from "@/service/getRequest";
import { ProductType } from "@/types/ProductType";
import CheckModal from "./CheckModal";
import { API } from "@/service/hooks/getEnv";
import Heading from "./Heading";

const OrderModal = ({
  resolvedTheme,
  isOpen,
  setIsOpen,
  id,
}: {
  resolvedTheme?: string;
  isOpen: boolean;
  setIsOpen: any;
  id: number | null;
}) => {
  const t = useTranslations("Order");
  const [data, setData] = useState<ProductType | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id && isOpen) {
      getRequest(`/product/${id}`).then(setData);
    }
  }, [id, isOpen]);

  if (!data) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    setIsLoading(true);

    console.log("userName: ", formData.get("name"));
    console.log("userPhone: ", formData.get("phone"));
    console.log("userAddress: ", formData.get("adres"));
    console.log("productId: ", id ? +id : "");

    if (id) {
      fetch(`${API}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.get("name"),
          userPhone: formData.get("phone"),
          userAddress: formData.get("adres"),
          productId: +id,
        }),
      })
        .then(async (res) => {
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Ошибка при создании заказа");
          }
          return res.json();
        })
        .then((res) => {
          console.log("Успешный заказ:", res);
          setIsOpenModal(true);
          setIsLoading(false);
          setIsOpen(false);
        })
        .catch((err) => {
          console.error("Ошибка:", err.message);
          setIsLoading(false);
          setIsOpenModal(true);
          setIsOpen(false);
        });
    }
  }

  return (
    <>
      <Modal onSubmit={handleSubmit} setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="flex flex-col lg:flex-row pt-6 lg:pt-0 items-center gap-[47px]">
          <div
            style={{
              boxShadow:
                "0px 2px 10px rgba(0,0,0,0.1), 0px 6px 20px rgba(0,0,0,0.15)",
            }}
            className={`
            ${resolvedTheme == "dark" ? "bg-gray-700" : "bg-white"}
            rounded-b-[35px]  rounded-tr-[35px] flex items-center !w-[900px] flex-col lg:flex-row`}
          >
            <PoolCard item={data as ProductType} />
            <div className="space-y-5 p-5">
              <Heading
                classList={`
            ${resolvedTheme == "dark" && "text-white"}
                
                `}
                tag="h2"
              >
                {t("size")}: <span className="!font-normal">{data.size} м</span>
              </Heading>
              <Heading
                classList={`
            ${resolvedTheme == "dark" && "text-white"}
                
                `}
                tag="h2"
              >
                {t("depth")}:{" "}
                <span className="!font-normal">{data.depth} см</span>
              </Heading>
              <Heading
                classList={`
            ${resolvedTheme == "dark" && "text-white"}
                
                `}
                tag="h2"
              >
                {t("status")}:{" "}
                <span className="!font-normal">{data.status}</span>
              </Heading>
              <Heading
                classList={`
            ${resolvedTheme == "dark" && "text-white"}
                
                `}
                tag="h2"
              >
                {t("category")}:{" "}
                <span className="!font-normal">{data.Category.name}</span>
              </Heading>
            </div>
          </div>

          <div className="flex flex-col gap-[18px] w-[100%] lg:w-[50%]">
            <input
              disabled={isLoading}
              required
              type={"text"}
              name="name"
              className={`text-center !py-[14px] w-full !rounded-[17px] font-bold !text-[20px] ${
                resolvedTheme == "dark" && "text-white"
              }`}
              style={{ boxShadow: "0 0 10px #CBCBCB" }}
              placeholder={t("name")}
            />
            <input
              disabled={isLoading}
              required
              name="phone"
              type={"tel"}
              className={`text-center !py-[14px] w-full !rounded-[17px] font-bold !text-[20px] ${
                resolvedTheme == "dark" && "text-white"
              }`}
              style={{ boxShadow: "0 0 10px #CBCBCB" }}
              placeholder={t("phone")}
            />

            <div className="flex gap-[18px]">
              <input
                disabled={isLoading}
                required
                name="adres"
                type={"text"}
                className={`text-center !py-[14px] w-full !rounded-[17px] font-bold !text-[20px] ${
                  resolvedTheme == "dark" && "text-white"
                }`}
                style={{ boxShadow: "0 0 10px #CBCBCB" }}
                placeholder={t("adres")}
              />
              <button
                className="text-center !py-[14px] !px-[14px] !rounded-[17px] font-bold !text-[20px]"
                style={{ boxShadow: "0 0 10px #CBCBCB" }}
              >
                <CardIcon />
              </button>
            </div>

            <div className="mx-auto">
              <button
                type="submit"
                style={{ boxShadow: "0 0 10px #CBCBCB" }}
                className="bg-[#FFE600] text-[25px] py-[7px] w-[237px] rounded-[10px] cursor-pointer"
              >
                {isLoading ? t("loading") : t("order")}
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <CheckModal
        resolvedTheme={resolvedTheme}
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
    </>
  );
};

export default OrderModal;
