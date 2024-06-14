import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function AboutUs() {
    return (
        <>
            <p>Chào mừng bạn đến với SwiftNotes! Trang web này là sản phẩm của Trương Công Hải, sinh viên trường Đại học Công Nghiệp TP.HCM. SwiftNotes được thiết kế để trở thành một nền tảng ghi chú tiện lợi trên web, được xây dựng bởi các công nghệ tiên tiến như Next.js, TailwindCSS, và Heroicons.</p>
            <br />
            <p>Tại SwiftNotes, sứ mệnh của chúng tôi là cung cấp trải nghiệm liền mạch và hiệu quả cho người dùng trong việc tạo, quản lý, và truy cập các ghi chú từ bất kỳ thiết bị nào có kết nối internet. Giao diện thân thiện với người dùng và chức năng mạnh mẽ của nền tảng này làm cho nó trở thành công cụ lý tưởng cho sinh viên, chuyên gia, và bất kỳ ai cần theo dõi suy nghĩ và nhiệm vụ của mình.</p>
            <br />
            <p>Chúng tôi hy vọng SwiftNotes sẽ trở thành giải pháp tin cậy cho tất cả nhu cầu ghi chú của bạn, nâng cao năng suất và giúp bạn luôn ngăn nắp.</p>
            <br />
            <p>Cảm ơn bạn đã lựa chọn SwiftNotes!</p>
            <br />
            <p>Liên hệ với tôi</p>
            <UnorderedList>
                <ListItem>
                    <span className='inline-block w-24'>Facebook:</span>
                    <Link className='ml-2 hover:text-blue-400 hover:underline' target='_blank' href={"https://www.facebook.com/trcg.hai151204"}>https://www.facebook.com/trcg.hai151204</Link>
                </ListItem>
                <ListItem>
                    <span className='inline-block w-24'>Github:</span>
                    <Link className='ml-2 hover:text-blue-400 hover:underline' target='_blank' href={"https://github.com/trgcghai/SwiftNotes"}>https://github.com/trgcghai/SwiftNotes</Link>
                </ListItem>
                <ListItem>
                    <span className='inline-block w-24'>Email:</span>
                    <Link className='ml-2 hover:text-blue-400 hover:underline' target='_blank' href={''}>conghai.tpma@gmail.com</Link>
                </ListItem>
            </UnorderedList>
        </>
    )
}