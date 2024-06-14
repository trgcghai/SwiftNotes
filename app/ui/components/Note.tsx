import { Note as NoteType, User } from "@/app/global";
import SlateNote from "@/app/lib/Slate/Slate";
import { useEffect } from "react";

export default function Note() {
    return (
        <div className="h-full p-2 flex flex-col">
            <div className="h-full w-full max-h-full overflow-y-scroll no-scrollbar">
                <SlateNote></SlateNote>
            </div>
        </div>
    )
}