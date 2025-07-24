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

    fetch(`${API}/order`, {
      method: "post",
      body: JSON.stringify({
        userName: formData.get("name"),
        userPhone: formData.get("phone"),
        userAddress: formData.get("adres"),
        productId: id,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setIsOpenModal(true);
        setIsLoading(false);
        setIsOpen(false);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        setIsLoading(false);
        setIsOpenModal(true);
        setIsOpen(false);
      });
  }

  return (
    <>
      <Modal onSubmit={handleSubmit} setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="flex flex-col lg:flex-row pt-6 lg:pt-0 items-center gap-[47px]">
          <PoolCard item={data as ProductType} />
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
      <CheckModal resolvedTheme={resolvedTheme} isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  );
};

export default OrderModal;
