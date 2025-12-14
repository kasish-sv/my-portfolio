import React from "react";
import SkillCard from "@/components/card/SkillCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { skills } from "@/data/RawData";
export default function Skills() {
  return (
    <div className="grid gap-2 p-4 grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          imageSrc={skill.imageSrc}
          imageAlt={skill.imageAlt}
          title={skill.title}
          description={skill.description}
          rating={skill.rating}
        />
      ))}
    </div>
  );
}
