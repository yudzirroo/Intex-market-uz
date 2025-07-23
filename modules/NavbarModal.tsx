import { PhoneIcon, TgIcon } from "@/assets/icons/icon";
import { Link, useRouter } from "@/i18n/navigation";
import { InfoType } from "@/types/InfoType";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const NavbarModal = ({
  isOpen,
  setIsOpen,
  data,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: InfoType | null;
}) => {
  const t = useTranslations("Header");
  const route = useRouter();
  const [isOpenIn, setIsOpenIn] = useState<boolean>(false);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpenIn(true);
      }, 300);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleClose(title?: string) {
    setIsOpenIn(false);
    setTimeout(() => {
      setIsOpen(false);
      if (title) {
        setTimeout(() => {
          route.push(title);
        }, 300);
      }
    }, 300);
  }

  return (
    <div
      onClick={() => handleClose()}
      className={`${
        isOpen ? "w-full" : "w-0"
      } fixed duration-300 overflow-hidden inset-0 z-50 bg-[#00000058] backdrop-blur-[6px]`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={` ${
          isOpenIn ? "h-[100vh] p-6 opacity-[100%]" : "h-0 p-0 opacity-[0%]"
        } overflow-hidden duration-300 bg-[var(--clr-green)] max-w-[284px] text-white flex flex-col justify-between`}
      >
        <h1
          style={{ fontFamily: "var(--font-signika)" }}
          className="font-semibold text-[20px] lg:text-[25px]"
        >
          INTEX-MARKET.UZ
        </h1>
        <div className="space-y-[30px]">
          <button
            onClick={() => handleClose("#frame")}
            className="bg-white text-[var(--clr-green)] shadow-xl p-[17px] w-[236px] rounded-[10px] text-[17px] font-bold"
          >
            {t("a1")}
          </button>
          <button className="bg-white text-[var(--clr-green)] shadow-xl p-[17px] w-[236px] rounded-[10px] text-[17px] font-bold">
            {t("a2")}
          </button>
        </div>
        <div className="flex flex-col gap-[30px]">
          <Link href={`tel:${data?.phone}`}>
            <button className="shadow-xl p-[17px] w-[236px] rounded-[10px] text-[17px] font-bold flex items-center gap-5 bg-[#139D4B]">
              <PhoneIcon />
              {t("call")}
            </button>
          </Link>
          <Link target="_blank" href={`https://${data?.telegram_link}`}>
            <button className="bg-white text-[var(--clr-green)] shadow-xl p-[17px] w-[236px] rounded-[10px] text-[17px] font-bold flex items-center gap-5">
              <TgIcon />
              {t("tg")}
            </button>
          </Link>
          <Link target="_blank" href={`https://${data?.instagram_link}`}>
            <button className="bg-white text-[var(--clr-green)] shadow-xl p-[17px] w-[236px] rounded-[10px] text-[17px] font-bold flex items-center gap-5">
              <Image
                className="w-[20px] h-[20px] object-cover"
                src={"/instagram.png"}
                alt="insta"
                width={20}
                height={20}
                priority
              />
              {t("insta")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;
