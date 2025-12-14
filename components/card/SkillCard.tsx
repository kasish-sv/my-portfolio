import React from "react";
import Image from "next/image";

type SkillCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  rating: number;
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

import StarRating from "../ui/stars";
export default function SkillCard({
  imageSrc,
  imageAlt,
  title,
  description,
  rating,
}: SkillCardProps) {
  return (
    <Card className="flex justify-between w-full max-w-xl flex-col gap-6 dark:bg-zinc-800">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={20}
        height={20}
        className="aspect-square w-[clamp(30px,10vw,69px)] h-[clamp(30px,10vw,69px)] rounded-sm object-cover mx-4"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <StarRating rating={rating} />
      </CardContent>
    </Card>
  );
}
