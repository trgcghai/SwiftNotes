import Link from "next/link";
import { ArrowLeftEndOnRectangleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ModalSetting from "../modal/OpenSetting";
import ModalAboutUs from "../modal/OpenAboutUsSection";
import { User } from "@/app/global";

export default function SideHeader({ user }: { user: User | undefined }) {
    return (
        <div className="p-2 h-full flex flex-col justify-between">
            <ul className="">
                <li className="mb-3 cursor-pointer border-gray-500">
                    <Link href={'/'} className="flex gap-2 items-center">
                        <Image src="/logo_high_res.png" priority={true} className="rounded-lg" width={1000} height={1000} alt={"logo"}></Image>
                    </Link>
                </li>
                <li className="mb-3 border-2 rounded-lg cursor-pointer border-gray-500">
                    <Link href={'#'} className="flex gap-2 p-2 items-center">
                        <UserCircleIcon height={28}></UserCircleIcon>
                        {user ? (user.email.length > 10 ? user.email.slice(0, 8) + '...' : user.email) : 'Người dùng'}
                    </Link>
                </li>
                <li className="mb-3 border-2 rounded-lg cursor-pointer border-gray-500">
                    <ModalSetting></ModalSetting>
                </li>
                <li className="mb-3 border-2 rounded-lg cursor-pointer border-gray-500">
                    <ModalAboutUs></ModalAboutUs>
                </li>
            </ul>
            <div className="border-2 rounded-lg cursor-pointer border-gray-500">
                <Link href={'/login'} className="flex gap-2 p-2 items-center">
                    <ArrowLeftEndOnRectangleIcon height={28}></ArrowLeftEndOnRectangleIcon>
                    Đăng xuất
                </Link>
            </div>
        </div>
    )
}