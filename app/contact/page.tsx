import { ContactCard } from "@/components/card/ContactCard";
import { Send, CircleUser } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex p-2 gap-2 justify-center items-stretch flex-col md:flex-row">
      <Item variant="outline" className="border-2 rounded-2xl max-w-md">
        <ItemContent>
          <ItemTitle>Incase you'd like to strike a conversation!</ItemTitle>
          <p className="mt-2 text-sm text-gray-400">
            I am open to creative ideas, job opportunities, or just a friendly
            chat. Feel free to reach out to me through any of the platforms
            listed here. Looking forward to connecting with you!
          </p>
        </ItemContent>
        <ItemActions>
          <Link href="mailto:kasishshanmugam1@gmail.com">
            <Button variant="outline">
              <Send />
            </Button>
          </Link>
        </ItemActions>
      </Item>
      <div>
        <ContactCard />
      </div>
    </div>
  );
}
