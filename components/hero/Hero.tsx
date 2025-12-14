import React from "react";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
export default function Hero() {
  return (
    <div className="flex flex-col p-4 items-center justify-center gap-4">
      <Avatar className="w-[clamp(60px,40vw,234px)] h-[clamp(60px,40vw,234px)] border-8 border-gray-400 rounded-full">
        <AvatarImage src="/Kasish.jpeg" alt="@kasish" />
        <AvatarFallback>KSV</AvatarFallback>
      </Avatar>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-2">
        Kasish S V
      </h1>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight p-2">
        (Maybe) Full Stack Developer
      </h2>
      <p className="leading-7 text-xs p-2 text-center max-w-xl">
        Just figuring my way around the world of code.
      </p>
      <blockquote className="mt-8 border-l-2 pl-6 italic">
        &quot;No one in the brief history of computing has ever written a piece
        of perfect software. It’s unlikely that you’ll be the first&quot; – Andy
        Hunt
      </blockquote>
      <Separator className="my-8" />
      <ArrowDown size={40} className="text-gray-400 animate-bounce" />
    </div>
  );
}
