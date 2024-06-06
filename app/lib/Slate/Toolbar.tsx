import { Button, Select } from '@chakra-ui/react'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faListOl } from '@fortawesome/free-solid-svg-icons';
import { CustomText } from './Types/slate';
import { BaseEditor, Editor } from 'slate';
import { ReactEditor } from 'slate-react';
import { Formater } from './Types/Formater';

export default function Toolbar({ insertImage, editor }: { insertImage: Function, editor: BaseEditor & ReactEditor }) {
    return (
        <div className='flex gap-2'>
            <Button className='font-extrabold uppercase' onClick={() => {
                Formater.toggleBold(editor)
            }}>
                b
            </Button>
            <Button className='italic uppercase' onClick={() => {
                Formater.toggleItalic(editor)
            }}>
                i
            </Button>
            <Button className='underline uppercase' onClick={() => {
                Formater.toggleUnderline(editor)
            }}>
                u
            </Button>
            <Select w={"150px"} onChange={(e) => Formater.toggleHeading(editor, e.target.value)}>
                <option value=''>Paragraph</option>
                <option value='1'>Heading 1</option>
                <option value='2'>Heading 2</option>
                <option value='3'>Heading 3</option>
                <option value='4'>Heading 4</option>
                <option value='5'>Heading 5</option>
            </Select>
            <Button>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            </Button>
            <Button>
                <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
            </Button>
            <Button onClick={(e) => {
                e.preventDefault()
                const url = prompt('Enter the URL of the image:');
                if (url) {
                    insertImage(url);
                }
            }}>
                Insert Image
            </Button>
        </div>
    )
}