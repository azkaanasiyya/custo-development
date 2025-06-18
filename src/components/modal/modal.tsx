import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import Image from "next/image";

export function Modal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <Button
              variant="testimonial"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
              size="testimonial"
              >
                {/* <i className="ri-play-fill text-white text-2xl z-999"></i> */}
                <Image src="/play.png" alt="play" width={24} height={24} />
            </Button>
        </DialogTrigger>
        <DialogContent className="w-[80vw] h-[80vh] aspect-video max-w-none max-h-none">
          <video 
            autoPlay 
            muted 
            className="w-[80vw] h-[80vh] aspect-video object-cover rounded-[20px]"
            >
              <source src="/modal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </form>
    </Dialog>
  )
}
