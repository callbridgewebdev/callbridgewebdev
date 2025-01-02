import React from "react";
import Spacer from "@/components/Spacer";
import ContentCard from "@/components/Card/ContentCard";
import Info from "../Info";
import RenderData from "../../../../components/RenderData";
import { sustainabilityData } from "@/app/(home)/_data/data";

const SustainabilitySection: React.FC = () => {
  return (
    <ContentCard
      title={"Why Choose Us"}
      description="We elevate your website design to the next level."
    >
      <Spacer spaceingAmount={4} />
      <div className="flex flex-col xs:grid xs:grid-cols-2 gap-x-5 gap-y-4">
  <RenderData data={sustainabilityData.slice(0, 4)}>
    {(item, index) => (
      <Info
        key={item.id}
        title={item.stat}
        description={item.description}
        className={index === sustainabilityData.slice(0, 4).length - 1 ? "col-span-1" : ""}
      />
    )}
  </RenderData>
</div>

    </ContentCard>
  );
};

export default SustainabilitySection;
