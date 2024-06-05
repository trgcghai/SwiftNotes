import SearchNote from "./SearchNote";
import SortNote from "./SortNote";
import { Divider, Grid, GridItem, useColorMode } from "@chakra-ui/react";

export default function ListNote() {

    const { colorMode } = useColorMode()

    return (
        <Grid className="h-full p-2" templateRows='repeat(24, 1fr)'>
            <GridItem rowSpan={1}>
                <SearchNote></SearchNote>
            </GridItem>

            <GridItem rowSpan={1}>
                <SortNote></SortNote>
            </GridItem>

            <GridItem rowStart={3} rowEnd={25}>
                <div className="border-2 h-full rounded-md">
                    <ul className="h-full no-scrollbar overflow-y-scroll ">
                        {colorMode == 'dark' ?
                            <li className="p-2 cursor-pointer hover:bg-gray-700">
                                Note 2
                            </li>
                            :
                            <li className="p-2 cursor-pointer hover:bg-gray-200">
                                Note 2
                            </li>
                        }
                        <Divider></Divider>
                    </ul>
                </div>
            </GridItem>
        </Grid >
    )
}