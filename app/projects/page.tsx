import React from "react";
import ProjectCard from "@/components/card/ProjectCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { projects } from "@/data/RawData";
export default function Projects() {
  return (
    <div>
      <div className="grid gap-2 p-4 grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            gitlink={project.gitlink}
            demolink={project.demolink}
          />
        ))}
      </div>
      <div className="text-sm italic items-center justify-center flex p-4 text-gray-500">
        The future will have a lot more to serve! I'm working on quite a few
        projects right now.
      </div>
    </div>
  );
}
