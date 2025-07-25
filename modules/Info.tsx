import { useTranslations } from "next-intl";
import React from "react";

const Info = () => {
  const t = useTranslations("Info");

  return (
    <section className="pt-24">
      <div className="py-5 bg-[#E2EFEF] mb-12">
        <h2 className="!text-[23px] md:!text-[50px] font-bold text-center  text-[#009398]">{t("title")}</h2>
      </div>
      <div className="containers px-3">
        <div className="flex flex-col md:flex-row justify-between gap-18 space-y-4 mb-8">
          <p className="text-[18px] md:text-[25px] font-medium md:w-[50%]">{t("info1")}</p>

          <div className="md:w-[50%] flex-col gap-4 text-sm">
            <div>
              <p className="text-[18px] md:text-[25px] font-medium mb-4">{t("info2")}</p>
            </div>
            <div className="text-[18px] md:text-[25px] font-medium">
              <div className="flex items-center gap-2 mb-2">
                <img src={"./check.svg"} alt="img" className="w-6 h-6" />
                <p>{t("item1")} </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src={"./check.svg"} alt="img" className="w-6 h-6" />
                <p>{t("item2")} </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src={"./check.svg"} alt="img" className="w-6 h-6" />
                <p>{t("item3")} </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src={"./check.svg"} alt="img" className="w-6 h-6" />
                <p>{t("item4")} </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src={"./check.svg"} alt="img" className="w-6 h-6" />
                <p>{t("item5")} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
