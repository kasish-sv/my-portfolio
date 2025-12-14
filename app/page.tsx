import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Hero from "@/components/hero/Hero";
import ProjectCard from "@/components/card/ProjectCard";
import SkillCard from "@/components/card/SkillCard";
import ExperienceCard from "@/components/card/ExperienceCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronsRight } from "lucide-react";
import { skills, projects, experiences } from "@/data/RawData";
import { motion } from "framer-motion";
import SkillsAnimate from "@/components/sections/SkillsAnimate";
import ProjectsAnimate from "@/components/sections/ProjectsAnimate";
import ExperienceAnimate from "@/components/sections/ExperienceAnimate";

export default function Home() {
  return (
    <div>
      <Hero />
      <SkillsAnimate />
      <ProjectsAnimate />
      <ExperienceAnimate />
    </div>
  );
}
