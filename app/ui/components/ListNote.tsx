import { useEffect, useState } from "react";
import SearchNote from "./SearchNote";
import SortNote from "./SortNote";
import { Divider, Grid, GridItem, useColorMode, useDisclosure } from "@chakra-ui/react";
import { Note } from "@/app/global";
import { useParams, useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ModalDeleteNote from "../modal/ModalDeleteNote";

export default function ListNote({ notes }: { notes: Note[] }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()
    const router = useRouter()
    const params = useParams()

    return (
        <Grid className="h-full p-2" templateRows='repeat(24, 1fr)'>
            <GridItem rowSpan={1}>
                <SearchNote></SearchNote>
            </GridItem>

            <GridItem rowSpan={1}>
                <SortNote></SortNote>
            </GridItem>

            <GridItem rowStart={3} rowEnd={25}>
                <div className="border-2 h-full rounded-md">
                    <ul className="h-full no-scrollbar overflow-y-scroll ">
                        {notes && notes.length != 0 &&
                            notes.map((note: Note, index: number) => {
                                return colorMode == 'dark' ? (
                                    <>
                                        <li
                                            key={note._id}
                                            id={note._id}
                                            onClick={() => router.push(`/${note._id}`)}
                                            className={"listnote p-2 cursor-pointer hover:bg-gray-700 " + (note._id == params.id as string ? 'bg-gray-700' : "")}
                                        >
                                            <div className="flex items-center justify-between">
                                                {note.title}
                                                <XMarkIcon onClick={onOpen}
                                                    className={'note-icon ' + (note._id == params.id as string ? '' : "hidden")} height={20}>
                                                </XMarkIcon>
                                                <ModalDeleteNote noteId={note._id} isOpen={isOpen} onClose={onClose}></ModalDeleteNote>
                                            </div>
                                        </li>
                                        <Divider></Divider>
                                    </>
                                ) : (
                                    <>
                                        <li
                                            key={note._id}
                                            id={note._id}
                                            onClick={() => router.push(`/${note._id}`)}
                                            className={"listnote p-2 cursor-pointer hover:bg-gray-200 " + (note._id == params.id as string ? 'bg-gray-200' : "")}
                                        >
                                            <div className="flex items-center justify-between">
                                                {note.title}
                                                <XMarkIcon onClick={onOpen}
                                                    className={'note-icon ' + (note._id == params.id as string ? '' : "hidden")} height={20}>
                                                </XMarkIcon>
                                                <ModalDeleteNote noteId={note._id} isOpen={isOpen} onClose={onClose}></ModalDeleteNote>
                                            </div>
                                        </li >
                                        <Divider></Divider>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </GridItem>
        </Grid >
    )
}