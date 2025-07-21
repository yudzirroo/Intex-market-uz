"use client"
import Heading from "@/components/Heading";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import LangConfig from "./LangConfig";
import { MenuIcon } from "@/assets/icons/icon";
import NavbarModal from "../NavbarModal";

const Header = () => {
  const t = useTranslations("Header")
  const [isOpen, setIsOpen] = useState<boolean>(false) 
  return (
    <div className="py-5 px-[24px] md:px-[67px] text-white bg-[var(--clr-green)] flex items-center justify-between">
        <h1 style={{ fontFamily: "var(--font-signika)" }} className="font-semibold text-[20px] lg:text-[25px]">INTEX-MARKET.UZ</h1>
        <div className="hidden lg:flex gap-[30px]">
            <a href="#frame"><Heading tag="h2">{t("a1")}</Heading></a>
            <a href="#"><Heading tag="h2">{t("a2")}</Heading></a>
        </div>
        <div className="flex items-center">
            <Heading classList="!text-[20px] mr-[10px] hidden lg:flex" tag="h2">(99) 911 02 04</Heading>
            <Link href={"#"}>
              <Image className="w-[40px] h-[40px]" src={"/telegram.svg"} alt="telegram img" width={40} height={40} priority/>
            </Link>
            <Link href={"#"}>
              <Image className="w-[40px] h-[40px]" src={"/instagram.svg"} alt="instagram img" width={40} height={40} priority/>
            </Link>
            <LangConfig />
            <button onClick={() => setIsOpen(true)} className="self-start mt-[7px] ml-2 cursor-pointer lg:hidden">
              <MenuIcon />
            </button>
        </div>
        <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
