import { ShieldAlertIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ExperienceDetail from "./ExperienceDetail";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  ItemFooter,
} from "@/components/ui/item";
import Image from "next/image";
type ExperienceCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  content: string;
  footer?: string[];
  detail?: string[];
};

export default function ExperienceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  content,
  footer,
  detail,
}: ExperienceCardProps) {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={30}
            height={30}
            className="w-full aspect-square rounded-sm object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
          <Badge>{content}</Badge>
        </ItemContent>
        <ItemActions>
          <ExperienceDetail detail={detail} />
        </ItemActions>
        <ItemFooter className="flex gap-2 justify-baseline">
          {footer?.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </ItemFooter>
      </Item>
    </div>
  );
}
