import { Button, Select } from '@chakra-ui/react'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { CustomText } from './Types/slate';
import { Editor } from 'slate';
import { Formater } from './Formater';
import { useState } from 'react';
import { HistoryEditor } from 'slate-history';
import createNewNote from './Components/newNote';
import { ReactEditor } from 'slate-react';

export default function Toolbar({ editor }: { editor: Editor & HistoryEditor }) {

    const [mark, setMark] = useState({ bold: false, italic: false, underline: false })
    const isMarkActive = (mark: string): boolean | undefined => {
        const match: Omit<CustomText, "text"> = Editor.marks(editor)!
        if (!match) {
            return false;
        }
        return match[mark as keyof Omit<CustomText, "text">]
    }

    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <Button className='font-extrabold uppercase' isActive={isMarkActive('bold')} onClick={() => {
                    Formater.toggleBold(editor)
                    const match: Omit<CustomText, "text"> = Editor.marks(editor)!
                    setMark({ ...mark, bold: !match.bold! })
                    ReactEditor.focus(editor)
                }}>
                    b
                </Button>
                <Button className='italic uppercase' isActive={isMarkActive('italic')} onClick={() => {
                    Formater.toggleItalic(editor)
                    const match: Omit<CustomText, "text"> = Editor.marks(editor)!
                    setMark({ ...mark, bold: !match.italic! })
                    ReactEditor.focus(editor)
                }}>
                    i
                </Button>
                <Button className='underline uppercase' isActive={isMarkActive('underline')} onClick={() => {
                    Formater.toggleUnderline(editor)
                    const match: Omit<CustomText, "text"> = Editor.marks(editor)!
                    setMark({ ...mark, bold: !match.underline! })
                    ReactEditor.focus(editor)
                }}>
                    u
                </Button>
                <Select w={"150px"} onChange={(e) => { Formater.toggleHeading(editor, e.target.value); ReactEditor.focus(editor) }}>
                    <option value=''>Paragraph</option>
                    <option value='1'>Heading 1</option>
                    <option value='2'>Heading 2</option>
                    <option value='3'>Heading 3</option>
                    <option value='4'>Heading 4</option>
                    <option value='5'>Heading 5</option>
                </Select>
                <Button>
                    <ArrowUturnLeftIcon height={18} onClick={() => { HistoryEditor.undo(editor); ReactEditor.focus(editor) }}></ArrowUturnLeftIcon>
                </Button>
                <Button>
                    <ArrowUturnRightIcon height={18} onClick={() => { HistoryEditor.redo(editor); ReactEditor.focus(editor) }}></ArrowUturnRightIcon>
                </Button>
            </div>
            <Button className="rounded-none mb-3 flex gap-2" onClick={() => createNewNote(editor)}>
                <PlusCircleIcon height={28}></PlusCircleIcon>
                Ghi chú mới
            </Button>
        </div>
    )
}