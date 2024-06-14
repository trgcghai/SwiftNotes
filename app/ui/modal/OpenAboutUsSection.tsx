import {
    useDisclosure,
} from '@chakra-ui/react'
import { UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ModalDashboard from './Modal';


export default function ModalAboutUs() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Link href={'#'} onClick={onOpen} className="flex gap-2 p-2 items-center">
                <UserGroupIcon height={28}></UserGroupIcon>
                Về chúng tôi
            </Link>
            <ModalDashboard index={1} isOpen={isOpen} onClose={onClose}></ModalDashboard>
        </>
    )
}