import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Code, Tv } from "lucide-react";
type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  gitlink: string;
  demolink?: string;
};

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "../ui/card";
export default function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  description,
  gitlink,
  demolink,
}: ProjectCardProps) {
  return (
    <Card className="flex w-full max-w-xl flex-col dark:bg-zinc-800">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={20}
        height={20}
        className="w-full aspect-30/9 rounded-2xl object-contain"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4 my-2">
        <Link href={gitlink} target="_blank">
          <Button>
            <p className="hidden md:block">GitHub</p>
            <Code />
          </Button>
        </Link>

        {demolink ? (
          <Link href={demolink} target="_blank">
            <Button>
              <p className="hidden md:block">Live Demo</p>
              <Tv />
            </Button>
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}
