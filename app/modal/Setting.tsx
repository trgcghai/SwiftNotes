import { FormLabel, Select } from '@chakra-ui/react'

const lang = ['English', 'Tiếng Việt', '日本語', '中国人', 'Deutsch', '한국인'].sort((a, b) => a.localeCompare(b))

export default function Setting() {
    return (
        <>
            <div className="mb-3 flex justify-between">
                <FormLabel textAlign="center" lineHeight={10}>Chọn ngôn ngữ</FormLabel>
                <Select w={200}>
                    {lang.map((item) => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        )
                    })}
                </Select>
            </div>
            <div className="flex justify-between">
                <FormLabel textAlign="center" lineHeight={10}>Chọn giao diện</FormLabel>
                <Select w={200}>
                    <option value='light'>Sáng</option>
                    <option value='dark'>Tối</option>
                    <option value='system'>Hệ thống</option>
                </Select>
            </div>
        </>
    )
}