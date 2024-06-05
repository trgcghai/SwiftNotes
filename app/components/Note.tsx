import { Button, Divider, Textarea } from "@chakra-ui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import SlateNote from "../lib/Slate/Slate";

export default function Note() {
    return (
        <div className="h-full p-2 flex flex-col">
            <div className="flex items-center justify-end">
                <Button className="rounded-none mb-3 flex gap-2">
                    <PlusCircleIcon height={28}></PlusCircleIcon>
                    Ghi chú mới
                </Button>
            </div>
            <Divider className="mb-2"></Divider>
            <div className="h-full w-full max-h-full overflow-y-scroll no-scrollbar">
                <SlateNote></SlateNote>
            </div>
        </div>
    )
}