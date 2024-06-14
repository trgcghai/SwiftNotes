import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchNote() {
    return (
        <InputGroup className="mb-4">
            <Input placeholder="Tìm ghi chú..." _placeholder={{ opacity: 1, color: 'gray.700' }}></Input>
            <InputRightAddon className="cursor-pointer">
                <MagnifyingGlassIcon height={20}></MagnifyingGlassIcon>
            </InputRightAddon>
        </InputGroup>
    )
}