import { Button, Select } from '@chakra-ui/react'
import { CustomElement, CustomText } from './Types/slate'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faListOl } from '@fortawesome/free-solid-svg-icons';

export default function Toolbar({ insertImage }: { insertImage: Function }) {
    return (
        <div className='flex gap-2'>
            <Button className='font-extrabold uppercase'>
                b
            </Button>
            <Button className='italic uppercase'>
                i
            </Button>
            <Button className='underline uppercase'>
                u
            </Button>
            <Select w={"150px"}>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
            </Select>
            <Button>
                <CodeBracketIcon height={22}></CodeBracketIcon>
            </Button>
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