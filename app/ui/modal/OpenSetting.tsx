import {
    useDisclosure,
} from '@chakra-ui/react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ModalDashboard from './Modal';


export default function ModalSetting() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Link href={'#'} onClick={onOpen} className="flex gap-2 p-2 items-center">
                <Cog6ToothIcon height={28}></Cog6ToothIcon>
                Cài đặt
            </Link>
            <ModalDashboard index={0} isOpen={isOpen} onClose={onClose}></ModalDashboard>
        </>
    )
}