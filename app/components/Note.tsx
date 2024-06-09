import { Button, Divider, Textarea } from "@chakra-ui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import SlateNote from "../lib/Slate/Slate";

export default function Note() {
    return (
        <div className="h-full p-2 flex flex-col">
            <div className="h-full w-full max-h-full overflow-y-scroll no-scrollbar">
                <SlateNote></SlateNote>
            </div>
        </div>
    )
}