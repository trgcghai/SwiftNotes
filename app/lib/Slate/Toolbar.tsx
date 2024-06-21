import { Button, Select } from '@chakra-ui/react'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { CustomText } from './Types/slate';
import { Editor } from 'slate';
import { Formater } from './Formater';
import { useEffect, useState } from 'react';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
import { useRouter } from 'next/navigation';
import { User } from '@/app/global';
import { getUser } from '../actions';
import { ObjectId } from 'mongodb';

export default function Toolbar({ editor }: { editor: Editor & HistoryEditor }) {
    const router = useRouter()
    const [user, setUser] = useState<User | undefined>()
    const [mark, setMark] = useState({ bold: false, italic: false, underline: false })
    const isMarkActive = (mark: string): boolean | undefined => {
        const match: Omit<CustomText, "text"> = Editor.marks(editor)!
        if (!match) {
            return false;
        }
        return match[mark as keyof Omit<CustomText, "text">]
    }

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser('user@nextmail.com')
            data[0]._id = data[0]._id.toString()
            if (data) setUser({ ...data[0] })
        }
        fetchUser()
    }, [])

    const handleCreateNote = () => {
        const note = {
            _id: (() => {
                const chars = '0123456789abcdef'
                let res = ''
                for (let i = 0; i < 12; i++) {
                    res += chars[Math.floor(Math.random() * 16)]
                }
                return res
            })(),
            title: 'untitled',
            content: '',
            createdAt: new Date(),
            lastModified: new Date(),
        }
        const notes = JSON.parse(localStorage.getItem('notes')!) || []
        notes.push(note)
        localStorage.setItem('notes', JSON.stringify(notes))
        router.push('/' + note._id)
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
            <Button className="rounded-none mb-3 flex gap-2" onClick={handleCreateNote}>
                <PlusCircleIcon height={28}></PlusCircleIcon>
                Ghi chú mới
            </Button>
        </div >
    )
}