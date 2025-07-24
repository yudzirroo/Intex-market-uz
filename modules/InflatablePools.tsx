"use client";
import PoolCard from "@/components/PoolCard";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const InflatablePools = () => {
    const t = useTranslations("Inflatable");

    interface Product {
        id: number;
        status: string;
        shape: string;
        discountPrice: number;
        price: number;
    }

    const [products, setProducts] = useState<Product[]>([]);

    const fetchData = async () => {
        try {
            const res = await fetch("http://13.61.23.60/product/");
            const data = await res.json();
            console.log("Data fetched successfully:", data);
            setProducts(data); // <-- Statega saqlayapti
        } catch (err) {
            console.log("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(products);

    return (
        <div className="text-white" id="frame">
            <Title title={t("title")} />
            <div className="containers !py-[100px] px-[30px] lg:!px-0 flex gap-y-[40px] gap-x-[10px] justify-center md:justify-between flex-wrap">
                {products.map((product) => (
                    <PoolCard
                        key={product.id}
                        status={
                            ["recommended", "discount", "none"].includes(product.status)
                                ? (product.status as "recommended" | "discount" | "none")
                                : undefined
                        }
                        frame={product.shape}
                        discount={product.discountPrice}
                        price={product.price}
                    />
                ))}
                {/* <PoolCard
                    status="discount"
                    frame="Металлический каркас"
                    discount={1000}
                    price={200000}
                />
                <PoolCard
                    status="recommended"
                    frame="Металлический каркас"
                    discount={1000}
                    price={200000}
                />
                <PoolCard
                    status="none"
                    frame="Металлический каркас"
                    discount={1000}
                    price={200000}
                />
                <PoolCard
                    frame="Металлический каркас"
                    discount={1000}
                    price={200000}
                /> */}
            </div>
        </div>
    );
};

export default InflatablePools;
