"use client";
import Heading from "@/components/Heading";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LangConfig from "./LangConfig";
import { MenuIcon, MoonIcon, SunIcon } from "@/assets/icons/icon";
import NavbarModal from "../NavbarModal";
import getRequest from "@/service/getRequest";
import { InfoType } from "@/types/InfoType";
import { useTheme } from "next-themes";

const Header = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<InfoType | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    getRequest(`/info/1`).then(setData);
  }, []);
  if (!mounted) return null;
  return (
    <div className="py-5 px-[24px] md:px-[67px] text-white bg-[var(--clr-green)] flex items-center justify-between">
      <h1
        style={{ fontFamily: "var(--font-signika)" }}
        className="font-semibold text-[20px] lg:text-[25px]"
      >
        INTEX-MARKET.UZ
      </h1>
      <div className="hidden lg:flex gap-[30px]">
        <a href="#frame">
          <Heading tag="h2">{t("a1")}</Heading>
        </a>
        <a href="#">
          <Heading tag="h2">{t("a2")}</Heading>
        </a>
      </div>
      <div className="flex items-center">
        <Heading classList="!text-[20px] mr-[10px] hidden lg:flex" tag="h2">
          {data?.phone}
        </Heading>
        <Link target="_blank" href={`${data?.telegram_link}`}>
          <Image
            className="w-[40px] h-[40px]"
            src={"/telegram.svg"}
            alt="telegram img"
            width={40}
            height={40}
            priority
          />
        </Link>
        <Link target="_blank" href={`${data?.instagram_link}`}>
          <Image
            className="w-[40px] h-[40px]"
            src={"/instagram.svg"}
            alt="instagram img"
            width={40}
            height={40}
            priority
          />
        </Link>
        <LangConfig />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="self-start mt-[5px] p-[3px] ml-2 cursor-pointer bg-white text-[var(--clr-green)] rounded-[3px] shadow-lg"
        >
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="self-start mt-[7px] ml-2 cursor-pointer lg:hidden"
        >
          <MenuIcon />
        </button>
      </div>
      <NavbarModal data={data} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
