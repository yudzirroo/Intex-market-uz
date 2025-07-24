import Title from '@/components/Title';
import { useTranslations } from 'next-intl';
import React from 'react'

const Delivery = () => {
  const t = useTranslations("Header");
  return (
      <section className="bg-[var(--clr-green)] text-white pb-10">
          <div className="containers text-center">
              <Title title={"Tekin yetkazib berish"} />
              <p className="text-lg mb-8 font-normal px-3">
                  Toshkent shahri ichida yetkazib berish bepul (shahar
                  tashqarisida yetkazib berish alohida to'lanadi)
              </p>
              <button className="bg-[#FFE600] hover:bg-accent/90 text-black font-semibold px-8 py-2 rounded-[10px]">
                  Buyurtma berish
              </button>
          </div> 
      </section>
  );
}

export default Delivery