import React from "react";

const Info = () => {
    return (
        <section className="pt-24">
            <div className="py-5 bg-[#E2EFEF] mb-12">
                <h2 className="!text-[23px] md:!text-[50px] font-bold text-center  text-[#009398]">
                    Intex basseynlari Toshkentda
                </h2>
            </div>
            <div className="containers px-3">
                <div className="flex-col md:flex justify-between gap-18 space-y-4 mb-8">
                    <p className="text-[18px] md:text-[25px] font-medium md:w-[50%]">
                        Intex basseynlari - bu butun oila uchun yoqimli dam
                        olish uchun mo'ljallangan arzon, yuqori sifatli,
                        ishonchli va ekologik toza mahsulotlar. Basseyn har
                        qanday hovliga to'liq o'rnatilishi va yozda faol
                        foydalanilishi mumkin. Basseyn sizga yorqin
                        his-tuyg'ularni beradi va issiq yoz kunlarida sizni
                        jaziramadan qutqaradi.
                    </p>

                    <div className="md:w-[50%] flex-col gap-4 text-sm">
                        <div>
                            <p className="text-[18px] md:text-[25px] font-medium mb-4">
                                Intex Basseynlari afzalliklarning kengligi bilan
                                ajralib turadi, quyida ulardan eng muhimlarini
                                ajratib ko'rsatish mumkin:
                            </p>
                        </div>
                        <div className="text-[18px] md:text-[25px] font-medium">
                            <div className="flex items-center gap-2 mb-2">
                                <img
                                    src={"./check.svg"}
                                    alt="img"
                                    className="w-6 h-6"
                                />
                                <p> Chidamlilik Zamonaviy dizayn </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img
                                    src={"./check.svg"}
                                    alt="img"
                                    className="w-6 h-6"
                                />
                                <p> O'rnatish uchun oson oson </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img
                                    src={"./check.svg"}
                                    alt="img"
                                    className="w-6 h-6"
                                />
                                <p> Chiroyli va yorqin ranglar </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img
                                    src={"./check.svg"}
                                    alt="img"
                                    className="w-6 h-6"
                                />
                                <p> Yuqori sifatli </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
