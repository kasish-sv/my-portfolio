import { CalendarIcon } from "lucide-react";
import { Heart } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export function ContactCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href="https://github.com/kasish-sv/my-portfolio"
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <div className="border-2 rounded-2xl p-4 flex flex-col items-center gap-4 hover:border-red-500 transition-colors">
            <Heart className="h-18 w-18 cursor-pointer text-red-500" />

            <p className="text-center text-sm font-medium text-gray-400">
              Incase you'd like to checkout the Portfolio source code
            </p>
          </div>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              Built with Next.js, ShadcnUI elements styled with Tailwind CSS,
              and deployed on Vercel.
            </p>
            <div className="text-muted-foreground text-xs">
              Created December 2025
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
