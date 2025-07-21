import SeasonCard from "@/components/SeasonCard";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";
import React from "react";

const SeasonalSale = () => {
  const t = useTranslations("Season");
  return (
    <div className="text-white">
      <Title title={t("title")} />
      <div className="containers hidden !py-[100px] md:flex items-center flex-wrap gap-y-[30px] !px-[30px] justify-between">
        <SeasonCard index={1} title={t("card1title")} text={t("card1text")} />
        <SeasonCard index={2} title={t("card2title")} text={t("card2text")} />
        <SeasonCard index={3} title={t("card3title")} text={t("card3text")} />
      </div>
      <div className="text-center text-[var(--clr-green)] py-[35px] md:hidden">
        <p className="font-bold text-[15px]">Бесплатная доставка бассейна</p>
        <span className="font-normal text-[15px]">Мы ценим наших клиентов, можете быть уверены в качестве нашего сервиса!</span>
      </div>
    </div>
  );
};

export default SeasonalSale;
