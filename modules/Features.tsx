import { useTranslations } from "next-intl";
import React from "react";

const Features = () => {
  const t = useTranslations("Customers");
  const features = [
    {
      icon: "./features/features-1.png",
      title: t("card1title"),
      subtitle: t("card1title"),
    },
    {
      icon: "./features/features-2.png",
      title: t("card2title"),
      subtitle: t("card2text"),
    },
    {
      icon: "./features/features-3.png",
      title: t("card3title"),
      subtitle: t("card3text"),
    },
  ];

  return (
    <section className="pt-24">
      <div className="py-5 bg-[#E2EFEF] mb-12">
        <h2 className="!text-[23px] md:!text-[50px] font-bold text-center  text-[#009398]">{t("title")}</h2>
      </div>
      <div className="containers mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <div className="text-primary">
                  <img src={feature.icon} alt="icon" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-1">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
