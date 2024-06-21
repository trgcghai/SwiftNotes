import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function RegisterSection() {
    return (
        <FormControl>
            <div className="mb-3">
                <FormLabel>Email</FormLabel>
                <Input type='email' />
                <FormErrorMessage>Email của bạn không hợp lệ</FormErrorMessage>
            </div>
            <div className="mb-3">
                <FormLabel>Mật khẩu</FormLabel>
                <Input type='password' />
                <FormErrorMessage>Mật khẩu không chính xác !!</FormErrorMessage>
            </div>
            <div className="mb-4">
                <FormLabel>Nhập lại mật khẩu</FormLabel>
                <Input type='password' />
                <FormErrorMessage>Mật khẩu không trùng khớp !!</FormErrorMessage>
            </div>
            <div className="">
                <button type='submit' className='border-0 p-2 rounded-md outline-none bg-slate-200 text-black w-full'>Đăng ký</button>
            </div>
        </FormControl>
    )
}