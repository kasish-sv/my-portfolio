"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "./ThemeToggle";
import { MobileNavbar } from "./MobileNavbar";
export default function NavBar() {
  return (
    <div className="flex items-center p-5 md:px-8 font-medium border-b border-gray-300 dark:border-gray-700">
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
      <div className="flex-wrap gap-3 hidden sm:block">
        <NavigationMenu>
          <Link href="/" className="font-serif text-2xl italic px-3">
            Kasish S V
          </Link>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/skills">Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/experience">Experience</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex space-x-2.5 ml-auto">
        <Button asChild className="flex ml-auto space-x-4 bg-blue-500">
          <Link href="https://drive.google.com/uc?export=download&id=1Fc0YYUq2CMBzuJIO91mH7hGhO-pcXMFq">
            Get Resume
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
