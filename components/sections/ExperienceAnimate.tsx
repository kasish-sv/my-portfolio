"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/RawData";
import ExperienceCard from "@/components/card/ExperienceCard";
export default function ExperienceAnimate() {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }} // start off-screen to the left
      whileInView={{ x: 0, opacity: 1 }} // move to natural position
      transition={{
        type: "tween", // smooth interpolation
        ease: "easeOut", // easing function
        duration: 1, // animation speed
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col bg-linear-to-r from-zinc-400 via-gray-800 to-black rounded-l-2xl">
        <div className="flex items-center justify-center">
          <div className="w-1/4 border-t border-gray-400"></div>
          <h2 className="section-header">Experience</h2>
          <div className="w-1/4 border-t border-gray-400"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 p-4 justify-center items-center">
          {experiences.slice(0, 2).map((experience, index) => (
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
      </div>
    </motion.div>
  );
}
