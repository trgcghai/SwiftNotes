import { ChangeEventHandler, useEffect, useState } from "react";
import SearchNote from "./SearchNote";
import { Divider, Grid, GridItem, Input, InputGroup, InputRightAddon, Select, Stack, useColorMode, useDisclosure } from "@chakra-ui/react";
import { Note } from "@/app/global";
import { useParams, useRouter } from "next/navigation";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ModalDeleteNote from "../modal/ModalDeleteNote";

export default function ListNote() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()
    const router = useRouter()
    const params = useParams()
    const [notes, setNotes] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes')!) || []
        setNotes(notes)
    }, [])

    const handleSort = (sortType: string) => {
        setNotes(() => {
            switch (sortType) {
                case 'AlphabetIncrease':
                    return notes.sort((a: Note, b: Note) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
                case 'AlphabetDecrease':
                    return notes.sort((a: Note, b: Note) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
                case 'DateIncrease':
                    return notes.sort((a: Note, b: Note) => a.createdAt.toString().localeCompare(b.createdAt.toString()))
                case 'DateDecrease':
                    return notes.sort((a: Note, b: Note) => b.createdAt.toString().localeCompare(a.createdAt.toString()))
                default:
                    return notes
            }
        })
    }

    const handleSearch = () => {
        const oldNotes = notes
        const searchedNotes = notes.filter((note: Note) => {
            return note.title.toLowerCase().includes(searchInput.toLowerCase())
        })
        const searchLength = searchedNotes.length
        setNotes(searchLength != 0 ? searchedNotes : oldNotes)
    }

    return (
        <Grid className="h-full p-2" templateRows='repeat(24, 1fr)'>
            <GridItem rowSpan={1}>
                <InputGroup className="mb-4">
                    <Input
                        placeholder="Tìm ghi chú..."
                        _placeholder={{ opacity: 1, color: 'gray.700' }}
                        value={searchInput}
                        onChange={(e) => { setSearchInput(e.target.value); handleSearch() }}
                    ></Input>
                    <InputRightAddon className="cursor-pointer">
                        <MagnifyingGlassIcon height={20} onClick={() => handleSearch()}></MagnifyingGlassIcon>
                    </InputRightAddon>
                </InputGroup>
            </GridItem>

            <GridItem rowSpan={1}>
                <Stack spacing={3} className="mb-4">
                    <form>
                        <Select placeholder='Sắp xếp theo' onChange={(e) => handleSort(e.target.value)} size='md'>
                            <option value='AlphabetIncrease'>A-Z</option>
                            <option value='AlphabetDecrease'>Z-A</option>
                            <option value='DateIncrease'>Ngày tạo mới nhất</option>
                            <option value='DateDecrease'>Ngày tạo cũ nhất</option>
                        </Select>
                    </form>
                </Stack>
            </GridItem>

            <GridItem rowStart={3} rowEnd={25}>
                <div className="border-2 h-full rounded-md">
                    <ul className="h-full no-scrollbar overflow-y-scroll ">
                        {notes && notes.length != 0 &&
                            notes.map((note: Note) => {
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
                                                <XMarkIcon onClick={(e) => {
                                                    e.stopPropagation()
                                                    onOpen()
                                                }}
                                                    className={'note-icon ' + (note._id == params.id as string ? '' : "hidden")} height={20}>
                                                </XMarkIcon>
                                                <ModalDeleteNote noteId={note._id} isOpen={isOpen} onClose={onClose}></ModalDeleteNote>
                                            </div>
                                        </li >
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
                                                <XMarkIcon onClick={(e) => {
                                                    e.stopPropagation()
                                                    onOpen()
                                                }}
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