import React from "react";
import ExperienceCard from "@/components/card/ExperienceCard";
import { experiences } from "@/data/RawData";
export default function Experience() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 justify-center items-center">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          imageSrc={experience.imageSrc}
          imageAlt={experience.imageAlt}
          title={experience.title}
          description={experience.description}
          content={experience.content}
          footer={experience.footer}
          detail={experience.detail}
        />
      ))}
    </div>
  );
}
