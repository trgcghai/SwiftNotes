'use client'
import {
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function ModalResetPassword() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [time, setTime] = useState("03:00")

    const countDown = (countDownTime: number) => {
        let minutes, seconds

        const intervalId = setInterval(() => {
            minutes = Math.floor(countDownTime / 60)
            seconds = countDownTime % 60

            let time = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
            setTime(time)

            countDownTime--

            if (countDownTime < 0) {
                clearInterval(intervalId)

                //handle time out function
            }
        }, 1000)
    }

    return (
        <>
            <Link href={'#'} className='block text-gray-400 underline text-sm mb-3' onClick={() => { onOpen(); countDown(180) }}>
                Quên mật khẩu ?
            </Link>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Đặt lại mật khẩu</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <div className="mb-3">
                                Chúng tôi đã gửi đến email của bạn mã OTP để đăng nhập và đặt lại mật khẩu.
                                Kiểm tra email và nhập lại mã OTP vào bên dưới trong vòng
                                <span className='text-red-500'> {time} </span>
                                để xác nhận.
                            </div>
                            <div className="mb-3">
                                <FormLabel>Mã OTP</FormLabel>
                                <Input type='text' />
                            </div>
                            <div className="">
                                <button type='submit' className='border-0 p-2 rounded-md outline-none bg-slate-200 text-black w-full'>Xác nhận</button>
                            </div>
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}