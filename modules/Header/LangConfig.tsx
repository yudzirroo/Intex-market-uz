"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const langs = [
  {
    id: 1,
    src: "/ru.svg",
    title: "ru",
  },
  {
    id: 2,
    src: "/uz.svg",
    title: "uz",
  },
];

const LangConfig = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const b = getCookie("NEXT_LOCALE");
    if (b === "uz" || b === "ru") {
      const findLang = langs.find((item) => item.title === b);
      if (findLang) setActiveId(findLang.id);
    }
  }, []);

  const activeLang = useMemo(
    () => langs.find((lang) => lang.id === activeId),
    [activeId]
  );

  function toggleLang() {
    const newId = activeId === 1 ? 2 : 1;
    const selectedLang = langs.find((lang) => lang.id === newId);
    if (selectedLang) {
      setActiveId(newId);
      router.push(pathname, { locale: selectedLang.title });
    }
  }

  return (
    <div className="">
      <Image
        key={activeLang?.id}
        src={activeLang?.src || "/ru.svg"}
        alt={`${activeLang?.title} icon`}
        width={40}
        height={40}
        onClick={toggleLang}
        className="cursor-pointer"
        priority
      />
    </div>
  );
};

export default LangConfig;
