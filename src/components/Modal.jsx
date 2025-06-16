import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function IPNoticeModal() {
  return (
    <Dialog defaultOpen>
      <DialogContent
        className="sm:max-w-[425px]"
        hideCloseButton
      >
        <DialogHeader>
          <DialogTitle>Privacy Notice</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          We collect your IP address to determine approximate location for analytics and to improve your experience on this site. 
          This data is processed securely and never shared beyond essential services. By continuing, you agree to this usage.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="default">I Understand</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
