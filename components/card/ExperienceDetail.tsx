import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type ExperienceDetailProps = {
  detail?: string[];
};

export default function ExperienceDetail({ detail }: ExperienceDetailProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">View Details</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Role Description and Responsibilities</DialogTitle>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {detail?.map((point, index) => (
                <li className="text-sm" key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
