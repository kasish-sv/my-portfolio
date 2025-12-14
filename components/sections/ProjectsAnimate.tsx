"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { projects } from "@/data/RawData";
import ProjectCard from "@/components/card/ProjectCard";
export default function ProjectsAnimate() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }} // start off-screen to the left
      whileInView={{ y: 0, opacity: 1 }} // move to natural position
      transition={{
        type: "tween", // smooth interpolation
        ease: "easeOut", // easing function
        duration: 1, // animation speed
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="w-1/4 border-t border-gray-400"></div>
          <h2 className="section-header">Projects</h2>
          <div className="w-1/4 border-t border-gray-400"></div>
        </div>
        <div className="grid gap-2 p-4 grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">
          {projects.slice(0, 3).map((project, index) => (
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
        <Link href="/projects" className="mx-auto my-4">
          <Button className=" dark:bg-gray-400">
            View All
            <ChevronsRight />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
