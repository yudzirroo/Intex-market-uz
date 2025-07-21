import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
     className="w-full h-auto"
    >
        <Image className="w-full h-auto object-contain" src={"/heroBg.png"} alt="Hero img" width={1440} height={1060} priority/>
    </div>
  );
};

export default Hero;
