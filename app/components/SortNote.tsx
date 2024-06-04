import { Select, Stack } from "@chakra-ui/react";

export default function SortNote() {
    return (
        <Stack spacing={3} className="mb-4">
            <Select placeholder='Sắp xếp theo' size='md'>
                <option value='AlphabetIncrease'>A-Z</option>
                <option value='AlphabetDecrease'>Z-A</option>
                <option value='DateIncrease'>Ngày tạo mới nhất</option>
                <option value='DateDecrease'>Ngày tạo cũ nhất</option>
            </Select>
        </Stack>
    )
}