import React, { Dispatch, FC, SetStateAction } from "react";
import Modal from "./Modal";
import { CheckIcon } from "@/assets/icons/icon";
import { useTranslations } from "next-intl";
import Heading from "./Heading";

const CheckModal: FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const t = useTranslations("Order");
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="text-center space-y-[40px] pt-[49px] pb-[100px] flex flex-col items-center">
        <CheckIcon />
        <Heading tag="h1" classList="!text-[61px]">
          {t("thanks")}
        </Heading>
        <p className="font-normal text-[25px]">{t("checked")}</p>
      </div>
    </Modal>
  );
};

export default CheckModal;
