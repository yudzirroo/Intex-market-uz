import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const t = useTranslations("Header");
    return (
        <footer className="py-12 bg-[var(--clr-green)] ">
            <div className="containers px-3">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-20">
                    <div className="flex-col gap-5 mb-8 md:w-[33%]">
                        <h4 className="font-semibold text-[25px] mb-4 text-center text-white">
                            Bepul konsultatsiya yordami uchun
                        </h4>
                        <div className="flex-col gap-5 w-full">
                            <div className="mb-4 w-full">
                                <input
                                    placeholder="Ismingiz"
                                    className="w-full bg-white border-white text-[#000] placeholder:text-[#919191] rounded-[10px] h-12 px-3"
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <input
                                    type="tel"
                                    placeholder="Telefon raqamingiz"
                                    className="w-full bg-white border-white text-[#000] placeholder:text-[#919191] rounded-[10px] h-12 px-3"
                                />
                            </div>
                            <button className="w-full bg-[#FFE600] hover:bg-accent/90 text-[#000] py-3 rounded-[10px] font-semibold">
                                Konsultatsiya olish
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mb-8 md:w-[33%]">
                        <p className="text-[20px] text-white">
                            Ish kunlari: 10:00 - 22:00
                        </p>
                        <p className="text-[20px] text-white">
                            Dam olish kunlarisiz
                        </p>
                        <div className="flex mt-2">
                            <Link href={"#"}>
                                <Image
                                    // className="w-[43px] h-[43px]"
                                    src={"/telegram.svg"}
                                    alt="telegram img"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    // className="w-[43px] h-[43px]"
                                    src={"/instagram.svg"}
                                    alt="instagram img"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-[33%]">
                        <p className="text-[20px] text-white">
                            Intex-market.uz
                        </p>
                        <p className="text-[20px] text-white">
                            +998(99)911-02-04
                        </p>
                        <p className="text-[20px] text-white">
                            Pahlavon Mahmud ko’chasi, Yashnobod tumani,
                            Toshkent.
                        </p>
                        <p className="text-[15px] text-white mt-5">
                            Разработано в Support Solutions Все права защищены.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
