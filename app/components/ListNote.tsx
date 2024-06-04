import SearchNote from "./SearchNote";
import SortNote from "./SortNote";
import { Divider, Grid, GridItem } from "@chakra-ui/react";

export default function ListNote() {
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
                        <li className="p-2 hover:bg-gray-700">
                            Note 2
                        </li>
                        <Divider></Divider>
                        <li className="p-2 hover:bg-gray-700">
                            Note 1
                        </li>
                    </ul>
                </div>
            </GridItem>
        </Grid >
    )
}