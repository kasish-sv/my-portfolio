"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/RawData";
import SkillCard from "@/components/card/SkillCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
export default function SkillsAnimate() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }} // start off-screen to the left
      whileInView={{ x: 0, opacity: 1 }} // move to natural position
      transition={{
        type: "tween", // smooth interpolation
        ease: "easeOut", // easing function
        staggerChildren: 0.2,
        duration: 1, // animation speed
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col bg-linear-to-r from-black via-gray-800 to-zinc-400 rounded-r-2xl">
        <div className="flex items-center justify-center">
          <div className="w-1/4 border-t border-gray-400"></div>
          <h2 className="section-header">Skills</h2>
          <div className="w-1/4 border-t border-gray-400"></div>
        </div>
        <div className="grid gap-2 p-4 grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">
          {skills.slice(0, 3).map((skill, index) => (
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
        <Link href="/skills" className="mx-auto my-4">
          <Button className=" dark:bg-gray-400">
            View All
            <ChevronsRight />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
