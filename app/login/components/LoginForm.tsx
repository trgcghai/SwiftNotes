'use client'
import Link from 'next/link'
import { useState } from 'react'
import RegisterSection from './RegisterSection'
import LoginSection from './LoginSection'

export default function LoginForm() {

    const [login, setLogin] = useState(true)

    return (
        <div className='w-96 p-3 border-2 rounded-lg'>
            <div className="text-center text-2xl mb-1">{login ? 'Đăng nhập' : 'Đăng ký'}</div>
            <div className='block text-center text-gray-500 text-sm mb-3'>
                {login ? 'Chưa có tài khoản ?' : 'Đã có tài khoản ?'}
                {login ?
                    <Link href={"#"} className='text-gray-400 underline inline-block ml-2' onClick={() => { setLogin(false) }}>Đăng ký ngay</Link>
                    :
                    <Link href={"#"} className='text-gray-400 underline inline-block ml-2' onClick={() => { setLogin(true) }}>Đăng nhập ngay</Link>
                }
            </div>
            {login ? <LoginSection></LoginSection> : <RegisterSection></RegisterSection>}
        </div>
    )
}