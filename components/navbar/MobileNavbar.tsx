"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";

export function MobileNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => redirect("/")}>Home</DropdownMenuItem>
        <DropdownMenuItem onClick={() => redirect("/skills")}>
          Skills
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => redirect("/projects")}>
          Projects
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => redirect("/experience")}>
          Experience
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => redirect("/contact")}>
          Contact
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
