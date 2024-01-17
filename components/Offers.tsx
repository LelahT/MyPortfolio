import React from "react";
import { RxCopy } from "react-icons/rx";
import { SiAntdesign } from "react-icons/si";
import { FaChartPie, FaConnectdevelop } from "react-icons/fa";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <div className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          What I offer.
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <OfferCard
            title="BRANDING"
            subTitle="With a vision for design and storytelling"
            Icon={RxCopy}
          />
          <OfferCard
            title="WEB DESIGN"
            subTitle="An eye for aesthetics and appeal to the masses "
            Icon={SiAntdesign}
          />
          <OfferCard
            title="Business Strategy"
            subTitle="Goal oriented with a drive for success"
            Icon={FaChartPie}
          />
          <OfferCard
             title="Development"
             subTitle="Working with Javascript, Typescript, React, HTML, CSS, & Python "
             Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
