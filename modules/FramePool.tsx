import PoolCard from "@/components/PoolCard";
import Title from "@/components/Title";
import getRequest from "@/service/getRequest";
import { ProductType } from "@/types/ProductType";
import { getTranslations } from "next-intl/server";

const FramePool = async () => {
  const t = await getTranslations("Frame");
  const data = await getRequest("/product?categoryId=1");

  return (
    <div className="text-white bg-[var(--clr-bg)]" id="1">
      <Title title={t("title")} />
      <div className="containers !py-[100px] px-[30px] lg:!px-0 flex gap-y-[40px] gap-x-[10px] justify-center md:justify-between flex-wrap">
        {data.map((item: ProductType) => (
          <PoolCard key={item.id} id={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FramePool;
