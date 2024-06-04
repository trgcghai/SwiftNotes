import { Button, Divider, Textarea } from "@chakra-ui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Note() {
    return (
        <div className="h-full p-2">
            <div className="flex items-center justify-end">
                <Button className="rounded-none mb-3 flex gap-2">
                    <PlusCircleIcon height={28}></PlusCircleIcon>
                    Ghi chú mới
                </Button>
            </div>
            <Divider></Divider>
            <Textarea variant='unstyled' h='100%' size='lg' className="w-full outline-none border-0" placeholder="Type something..."></Textarea>
        </div>
    )
}