import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react'
import ModalResetPassword from './ResetPassword'

export default function LoginSection() {
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
                <ModalResetPassword></ModalResetPassword>
            </div>
            <div className="">
                <button type='submit' className='border-0 p-2 rounded-md outline-none bg-slate-200 text-black w-full'>Đăng nhập</button>
            </div>
        </FormControl>
    )
}