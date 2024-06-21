import { Note } from '@/app/global'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import { redirect, usePathname, useRouter } from 'next/navigation'

export default function ModalDeleteNote({ noteId, isOpen, onClose }: { noteId: string, isOpen: boolean, onClose: Function }) {
    const router = useRouter()
    const path = usePathname()
    const handleDeleteNote = () => {
        let notes = JSON.parse(localStorage.getItem('notes')!)
        if (noteId != undefined) {
            notes = notes.filter((item: Note) => item._id != noteId)
        }
        localStorage.setItem('notes', JSON.stringify(notes))
        if (path == '/') {
            window.location.reload()
        } else {
            router.push('/')
        }
    }

    return (
        <>
            <Modal isOpen={isOpen} size={'lg'} isCentered={true} onClose={() => { onClose() }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className="py-4 text-xl text-center">
                            Bạn có chắc muốn xóa ghi chú này ?
                        </div>
                        <div className='py-4 flex justify-center gap-4'>
                            <Button size='md' onClick={() => onClose()}>
                                Hủy
                            </Button>
                            <Button
                                colorScheme='red'
                                size='md'
                                onClick={handleDeleteNote}
                            >
                                Xác nhận
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}