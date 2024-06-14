import { deleteNote } from '@/app/controller/notesController'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function ModalDeleteNote({ noteId, isOpen, onClose }: { noteId: string, isOpen: boolean, onClose: Function }) {
    const router = useRouter()
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
                                onClick={() => {
                                    const handleDelete = async () => {
                                        const res = await deleteNote(noteId)
                                        if (res && res.status == 200) {
                                            onClose()
                                            router.push('/')
                                        }
                                    }
                                    handleDelete()
                                }}
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